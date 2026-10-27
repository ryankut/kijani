"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { deleteImageByUrl, isOurImage } from "@/lib/storage";

const categorySchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(80, "Name is too long."),
  slug: z
    .string()
    .trim()
    .min(1, "Slug is required.")
    .max(80, "Slug is too long.")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase letters, numbers and hyphens."),
  description: z.string().trim().max(500, "Description is too long."),
  parentId: z.string().trim(),
});

type ParsedCategory =
  | { error: string }
  | {
      data: {
        name: string;
        slug: string;
        description: string | null;
        parentId: string | null;
      };
    };

function parseCategory(formData: FormData): ParsedCategory {
  const parsed = categorySchema.safeParse({
    name: formData.get("name") ?? "",
    slug: formData.get("slug") ?? "",
    description: formData.get("description") ?? "",
    parentId: formData.get("parentId") ?? "",
  });
  if (!parsed.success) return { error: parsed.error.issues[0].message };
  const d = parsed.data;
  return {
    data: {
      name: d.name,
      slug: d.slug,
      description: d.description || null,
      parentId: d.parentId || null,
    },
  };
}

function fail(path: string, message: string): never {
  redirect(`${path}?error=${encodeURIComponent(message)}`);
}

function refresh() {
  revalidatePath("/");
  revalidatePath("/admin/categories");
}

export async function createCategory(formData: FormData) {
  await requireAdmin();
  const back = "/admin/categories/new";

  const parsed = parseCategory(formData);
  if ("error" in parsed) fail(back, parsed.error);

  const imagePath = String(formData.get("imagePath") ?? "").trim();
  if (imagePath && !isOurImage(imagePath, "categories")) {
    fail(back, "Invalid image. Please upload it again.");
  }

  const existing = await db.category.findUnique({ where: { slug: parsed.data.slug } });
  if (existing) fail(back, "A category with this slug already exists.");

  const last = await db.category.aggregate({ _max: { sortOrder: true } });
  await db.category.create({
    data: {
      ...parsed.data,
      imagePath: imagePath || null,
      sortOrder: (last._max.sortOrder ?? -1) + 1,
    },
  });

  refresh();
  redirect("/admin/categories");
}

export async function updateCategory(id: string, formData: FormData) {
  await requireAdmin();
  const back = `/admin/categories/${id}`;

  const cat = await db.category.findUnique({ where: { id } });
  if (!cat) redirect("/admin/categories");

  const parsed = parseCategory(formData);
  if ("error" in parsed) fail(back, parsed.error);

  const imagePath = String(formData.get("imagePath") ?? "").trim() || cat.imagePath;
  if (imagePath !== cat.imagePath && imagePath && !isOurImage(imagePath, "categories")) {
    fail(back, "Invalid image. Please upload it again.");
  }

  if (parsed.data.slug !== cat.slug) {
    const clash = await db.category.findUnique({ where: { slug: parsed.data.slug } });
    if (clash) fail(back, "Another category already uses this slug.");
  }

  if (parsed.data.parentId === id) fail(back, "A category cannot be its own parent.");

  await db.category.update({
    where: { id },
    data: { ...parsed.data, imagePath },
  });
  if (imagePath !== cat.imagePath) await deleteImageByUrl(cat.imagePath);

  refresh();
  redirect("/admin/categories");
}

export async function toggleCategory(id: string) {
  await requireAdmin();
  const cat = await db.category.findUnique({ where: { id } });
  if (!cat) return;
  await db.category.update({ where: { id }, data: { isActive: !cat.isActive } });
  refresh();
}

export async function deleteCategory(id: string) {
  await requireAdmin();
  const cat = await db.category.findUnique({ where: { id } });
  if (!cat) return;

  const productCount = await db.category.count({ where: { parentId: id } });
  if (productCount > 0) {
    redirect(`/admin/categories?error=${encodeURIComponent("Delete child categories first.")}`);
  }

  await db.category.delete({ where: { id } });
  await deleteImageByUrl(cat.imagePath);
  refresh();
}

export async function moveCategory(id: string, direction: "up" | "down") {
  await requireAdmin();
  const cats = await db.category.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
  });
  const i = cats.findIndex((c) => c.id === id);
  const j = direction === "up" ? i - 1 : i + 1;
  if (i < 0 || j < 0 || j >= cats.length) return;

  const reordered = [...cats];
  [reordered[i], reordered[j]] = [reordered[j], reordered[i]];
  await db.$transaction(
    reordered.map((c, index) =>
      db.category.update({ where: { id: c.id }, data: { sortOrder: index } })
    )
  );
  refresh();
}