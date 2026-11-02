"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";

const TAG_TYPES = ["skin_type", "hair_type", "concern"] as const;

const tagSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(40, "Name is too long."),
  type: z.enum(TAG_TYPES, { errorMap: () => ({ message: "Choose a valid tag type." }) }),
});

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function fail(path: string, message: string): never {
  redirect(`${path}?error=${encodeURIComponent(message)}`);
}

function refresh() {
  revalidatePath("/admin/tags");
  revalidatePath("/admin/products");
}

export async function createTag(formData: FormData) {
  await requireAdmin();
  const back = "/admin/tags";

  const parsed = tagSchema.safeParse({
    name: formData.get("name") ?? "",
    type: formData.get("type") ?? "",
  });
  if (!parsed.success) fail(back, parsed.error.issues[0].message);

  const slug = slugify(parsed.data.name);
  const clash = await db.tag.findUnique({ where: { type_slug: { type: parsed.data.type, slug } } });
  if (clash) fail(back, "A tag with this name already exists for this type.");

  await db.tag.create({ data: { name: parsed.data.name, slug, type: parsed.data.type } });
  refresh();
  redirect("/admin/tags");
}

export async function deleteTag(id: string) {
  await requireAdmin();
  await db.tag.delete({ where: { id } });
  refresh();
  redirect("/admin/tags");
}