"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { slugify } from "@/lib/format";
import { deleteImageByUrl, isOurImage } from "@/lib/storage";

const articleSchema = z.object({
  title: z.string().trim().min(1, "Title is required.").max(120, "Title is too long."),
  subtitle: z.string().trim().min(1, "Subtitle is required.").max(200, "Subtitle is too long."),
  slug: z.string().trim().max(120, "Slug is too long."),
  intro: z
    .string()
    .trim()
    .min(20, "The intro paragraph is too short.")
    .max(3000, "The intro paragraph is too long."),
  authorName: z.string().trim().max(80, "Author name is too long."),
  categoryId: z.string().trim().min(1, "Choose a category."),
  status: z.enum(["DRAFT", "PUBLISHED"]),
});

type ParsedArticle =
  | { error: string }
  | {
      data: {
        title: string;
        subtitle: string;
        slug: string;
        intro: string;
        authorName: string | null;
        categoryId: string;
        status: "DRAFT" | "PUBLISHED";
      };
    };

async function parseArticle(formData: FormData): Promise<ParsedArticle> {
  const parsed = articleSchema.safeParse({
    title: formData.get("title") ?? "",
    subtitle: formData.get("subtitle") ?? "",
    slug: formData.get("slug") ?? "",
    intro: formData.get("intro") ?? "",
    authorName: formData.get("authorName") ?? "",
    categoryId: formData.get("categoryId") ?? "",
    status: formData.get("status") ?? "DRAFT",
  });
  if (!parsed.success) return { error: parsed.error.issues[0].message };

  const d = parsed.data;
  const slug = d.slug || slugify(d.title);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return { error: "Slug must be lowercase letters, numbers and hyphens." };
  }

  const category = await db.category.findUnique({ where: { id: d.categoryId }, select: { id: true } });
  if (!category) return { error: "Choose a valid category." };

  return { data: { ...d, slug, authorName: d.authorName || null } };
}

function fail(path: string, message: string): never {
  redirect(`${path}?error=${encodeURIComponent(message)}`);
}

function refresh() {
  revalidatePath("/", "layout");
  revalidatePath("/admin/articles");
}

export async function createArticle(formData: FormData) {
  await requireAdmin();
  const back = "/admin/articles/new";

  const parsed = await parseArticle(formData);
  if ("error" in parsed) fail(back, parsed.error);

  const coverImage = String(formData.get("coverImage") ?? "").trim();
  if (!coverImage) fail(back, "Please upload a cover image and wait for it to finish.");
  if (!isOurImage(coverImage, "articles")) fail(back, "Invalid cover image. Please upload it again.");

  const clash = await db.article.findUnique({ where: { slug: parsed.data.slug } });
  if (clash) fail(back, "An article with this slug already exists.");

  await db.article.create({
    data: {
      ...parsed.data,
      coverImage,
      publishedAt: parsed.data.status === "PUBLISHED" ? new Date() : null,
    },
  });

  refresh();
  redirect("/admin/articles");
}

export async function updateArticle(id: string, formData: FormData) {
  await requireAdmin();
  const back = `/admin/articles/${id}`;

  const existing = await db.article.findUnique({ where: { id } });
  if (!existing) redirect("/admin/articles");

  const parsed = await parseArticle(formData);
  if ("error" in parsed) fail(back, parsed.error);

  const coverImage = String(formData.get("coverImage") ?? "").trim() || existing.coverImage;
  if (coverImage !== existing.coverImage && !isOurImage(coverImage, "articles")) {
    fail(back, "Invalid cover image. Please upload it again.");
  }

  if (parsed.data.slug !== existing.slug) {
    const clash = await db.article.findUnique({ where: { slug: parsed.data.slug } });
    if (clash) fail(back, "Another article uses this slug.");
  }

  const publishedAt =
    existing.publishedAt ?? (parsed.data.status === "PUBLISHED" ? new Date() : null);

  await db.article.update({
    where: { id },
    data: { ...parsed.data, coverImage, publishedAt },
  });
  if (coverImage !== existing.coverImage) await deleteImageByUrl(existing.coverImage);

  refresh();
  redirect("/admin/articles");
}

export async function toggleArticle(id: string) {
  await requireAdmin();
  const a = await db.article.findUnique({ where: { id } });
  if (!a) return;
  const publishing = a.status === "DRAFT";
  await db.article.update({
    where: { id },
    data: {
      status: publishing ? "PUBLISHED" : "DRAFT",
      publishedAt: a.publishedAt ?? (publishing ? new Date() : null),
    },
  });
  refresh();
}

export async function deleteArticle(id: string) {
  await requireAdmin();
  const a = await db.article.findUnique({ where: { id } });
  if (!a) return;
  await db.article.delete({ where: { id } });
  await deleteImageByUrl(a.coverImage);
  refresh();
}