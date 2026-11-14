import { db } from "@/lib/db";
import type { Prisma } from "@/generated/prisma/client";

const byOrder = [{ sortOrder: "asc" as const }, { createdAt: "asc" as const }];

export type ProductCardData = {
  id: string;
  slug: string;
  name: string;
  image: string | null;
  price: number;
  hasPriceRange: boolean;
  compareAtPrice: number | null;
  badges: string[];
};

type CardSource = {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice: number | null;
  badges: string[];
  images: { url: string }[];
  variants: { price: number }[];
};

function toCard(p: CardSource): ProductCardData {
  const prices = p.variants.map((v) => v.price);
  const min = prices.length ? Math.min(...prices) : p.price;
  const max = prices.length ? Math.max(...prices) : p.price;

  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    image: p.images[0]?.url ?? null,
    price: min,
    hasPriceRange: max > min,
    compareAtPrice: p.compareAtPrice,
    badges: p.badges,
  };
}

const cardInclude = {
  images: { orderBy: { sortOrder: "asc" as const }, take: 1 },
  variants: { orderBy: { price: "asc" as const } },
};

export async function getProductCards(args: { where?: Prisma.ProductWhereInput; take?: number } = {}) {
  const rows = await db.product.findMany({
    where: { isActive: true, ...args.where },
    orderBy: { createdAt: "desc" },
    take: args.take,
    include: cardInclude,
  });

  return rows.map(toCard);
}

export function inCategories(ids: string[]): Prisma.ProductWhereInput {
  return { categories: { some: { categoryId: { in: ids } } } };
}

export async function getDepartments() {
  return db.category.findMany({
    where: { isActive: true, parentId: null },
    orderBy: byOrder,
    include: { children: { where: { isActive: true }, orderBy: byOrder } },
  });
}

export async function getCategoryBySlug(slug: string) {
  return db.category.findFirst({
    where: { slug, isActive: true },
    include: { parent: true, children: { where: { isActive: true }, orderBy: byOrder } },
  });
}

export async function getProductBySlug(slug: string) {
  return db.product.findFirst({
    where: { slug, isActive: true },
    include: {
      images: { orderBy: { sortOrder: "asc" } },
      variants: { orderBy: { sortOrder: "asc" } },
      tags: { include: { tag: true } },
      categories: { include: { category: { include: { parent: true } } } },
    },
  });
}

export async function getRelatedProducts(productId: string, primaryCategoryId: string) {
  const sameSub = await getProductCards({
    where: { id: { not: productId }, ...inCategories([primaryCategoryId]) },
    take: 4,
  });

  if (sameSub.length >= 2) return sameSub;

  const primary = await db.category.findUnique({ where: { id: primaryCategoryId } });
  const deptId = primary?.parentId ?? primary?.id;
  if (!deptId) return sameSub;

  const family = await db.category.findMany({
    where: { OR: [{ id: deptId }, { parentId: deptId }] },
    select: { id: true },
  });

  return getProductCards({
    where: { id: { not: productId }, ...inCategories(family.map((c) => c.id)) },
    take: 4,
  });
}
