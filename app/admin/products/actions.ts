"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { deleteImageByUrl, isOurImage } from "@/lib/storage";

const productSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(120),
  slug: z.string().trim().min(1, "Slug is required.").max(120)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase letters, numbers and hyphens."),
  shortDescription: z.string().trim().min(1, "Short description is required.").max(300),
  longDescription: z.string().trim().min(1, "Long description is required."),
  price: z.coerce.number().int().min(0, "Price must be 0 or more."),
  compareAtPrice: z.preprocess(
    (v) => (v === "" || v === null ? undefined : v),
    z.coerce.number().int().min(0).optional()
  ),
  ingredients: z.string().trim(),
  howToUse: z.string().trim(),
  benefits: z.string().trim(),
  badges: z.string().trim(),
  isActive: z.preprocess((v) => v === "on" || v === "true", z.boolean()),
});

const variantSchema = z.object({
  size: z.string().trim().min(1, "Size is required.").max(40),
  price: z.coerce.number().int().min(0),
  stock: z.coerce.number().int().min(0),
  sku: z.string().trim().max(60),
});

function fail(path: string, message: string): never {
  redirect(`${path}?error=${encodeURIComponent(message)}`);
}

function refresh() {
  revalidatePath("/");
  revalidatePath("/admin/products");
}

async function parseProductForm(formData: FormData) {
  const parsed = productSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: parsed.error.issues[0].message as string };

  const variants = [];
  for (let i = 0; i < 20; i++) {
    const size = String(formData.get(`variants[${i}].size`) ?? "").trim();
    if (!size) continue;
    const parsedVar = variantSchema.safeParse({
      size,
      price: formData.get(`variants[${i}].price`),
      stock: formData.get(`variants[${i}].stock`),
      sku: formData.get(`variants[${i}].sku`) ?? "",
    });
    if (!parsedVar.success) return { error: `Variant ${i + 1}: ${parsedVar.error.issues[0].message}` };
    variants.push(parsedVar.data);
  }
  if (variants.length === 0) return { error: "Add at least one variant (a size)." };

  const images: { url: string; alt: string }[] = [];
  for (let i = 0; i < 5; i++) {
    const url = String(formData.get(`images[${i}].url`) ?? "").trim();
    if (!url) continue;
    if (!isOurImage(url, "products")) return { error: `Image ${i + 1} is invalid. Please re-upload.` };
    images.push({ url, alt: String(formData.get(`images[${i}].alt`) ?? "") });
  }
  if (images.length === 0) return { error: "Upload at least one product image." };

  const tagIds = formData.getAll("tagIds").map(String).filter(Boolean);
  const primaryCategoryId = String(formData.get("primaryCategoryId") ?? "").trim();
  if (!primaryCategoryId) return { error: "Choose a primary category." };
  const alsoInCategoryIds = formData.getAll("alsoInCategoryIds").map(String).filter((v) => v && v !== primaryCategoryId);

  return {
    data: {
      ...parsed.data,
      compareAtPrice: parsed.data.compareAtPrice ?? null,
      ingredients: parsed.data.ingredients || null,
      howToUse: parsed.data.howToUse || null,
      benefits: parsed.data.benefits || null,
      badges: parsed.data.badges ? parsed.data.badges.split(",").map((s) => s.trim()).filter(Boolean) : [],
    },
    variants,
    images,
    tagIds,
    primaryCategoryId,
    alsoInCategoryIds,
  };
}

export async function createProduct(formData: FormData) {
  await requireAdmin();
  const back = "/admin/products/new";

  const result = await parseProductForm(formData);
  if ("error" in result) fail(back, result.error);

  const clash = await db.product.findUnique({ where: { slug: result.data.slug } });
  if (clash) fail(back, "A product with this slug already exists.");

  await db.product.create({
    data: {
      ...result.data,
      variants: { create: result.variants.map((v, i) => ({ ...v, sku: v.sku || null, sortOrder: i })) },
      images: { create: result.images.map((img, i) => ({ ...img, sortOrder: i })) },
      tags: { create: result.tagIds.map((tagId) => ({ tagId })) },
      categories: {
        create: [
          { categoryId: result.primaryCategoryId, isPrimary: true },
          ...result.alsoInCategoryIds.map((categoryId) => ({ categoryId, isPrimary: false })),
        ],
      },
    },
  });

  refresh();
  redirect("/admin/products");
}

export async function updateProduct(id: string, formData: FormData) {
  await requireAdmin();
  const back = `/admin/products/${id}`;

  const existing = await db.product.findUnique({
    where: { id },
    include: { images: true },
  });
  if (!existing) redirect("/admin/products");

  const result = await parseProductForm(formData);
  if ("error" in result) fail(back, result.error);

  if (result.data.slug !== existing.slug) {
    const clash = await db.product.findUnique({ where: { slug: result.data.slug } });
    if (clash) fail(back, "Another product uses this slug.");
  }

  // Delete images that are no longer in the new list
  const newUrls = new Set(result.images.map((i) => i.url));
  const removed = existing.images.filter((img) => !newUrls.has(img.url));
  for (const img of removed) await deleteImageByUrl(img.url);

  await db.$transaction([
    db.productImage.deleteMany({ where: { productId: id } }),
    db.productVariant.deleteMany({ where: { productId: id } }),
    db.productTag.deleteMany({ where: { productId: id } }),
    db.productCategory.deleteMany({ where: { productId: id } }),
    db.product.update({
      where: { id },
      data: {
        ...result.data,
        variants: { create: result.variants.map((v, i) => ({ ...v, sku: v.sku || null, sortOrder: i })) },
        images: { create: result.images.map((img, i) => ({ ...img, sortOrder: i })) },
        tags: { create: result.tagIds.map((tagId) => ({ tagId })) },
        categories: {
          create: [
            { categoryId: result.primaryCategoryId, isPrimary: true },
            ...result.alsoInCategoryIds.map((categoryId) => ({ categoryId, isPrimary: false })),
          ],
        },
      },
    }),
  ]);

  refresh();
  redirect("/admin/products");
}

export async function toggleProduct(id: string) {
  await requireAdmin();
  const p = await db.product.findUnique({ where: { id } });
  if (!p) return;
  await db.product.update({ where: { id }, data: { isActive: !p.isActive } });
  refresh();
}

export async function deleteProduct(id: string) {
  await requireAdmin();
  const p = await db.product.findUnique({ where: { id }, include: { images: true } });
  if (!p) return;
  await db.product.delete({ where: { id } });
  for (const img of p.images) await deleteImageByUrl(img.url);
  refresh();
}