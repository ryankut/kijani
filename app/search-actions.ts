"use server";

import { db } from "@/lib/db";

export async function searchProductsAction(query: string) {
  const q = String(query ?? "").trim().slice(0, 60);
  if (q.length < 2) return [];

  const products = await db.product.findMany({
    where: {
      isActive: true,
      OR: [
        { name: { contains: q, mode: "insensitive" } },
        { shortDescription: { contains: q, mode: "insensitive" } },
      ],
    },
    orderBy: { name: "asc" },
    take: 6,
    include: {
      images: { orderBy: { sortOrder: "asc" }, take: 1 },
      variants: { orderBy: { price: "asc" }, take: 1 },
      categories: { where: { isPrimary: true }, include: { category: true }, take: 1 },
    },
  });

  return products.map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    image: p.images[0]?.url ?? null,
    category: p.categories[0]?.category.name ?? null,
    price: p.variants[0]?.price ?? p.price,
  }));
}
