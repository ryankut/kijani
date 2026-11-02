import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { updateProduct } from "../actions";
import ProductForm from "../product-form";

export default async function EditProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const { error } = await searchParams;

  const [product, tags, categories] = await Promise.all([
    db.product.findUnique({
      where: { id },
      include: {
        variants: { orderBy: { sortOrder: "asc" } },
        images: { orderBy: { sortOrder: "asc" } },
        tags: true,
        categories: true,
      },
    }),
    db.tag.findMany({ orderBy: [{ type: "asc" }, { name: "asc" }] }),
    db.category.findMany({ orderBy: [{ sortOrder: "asc" }, { name: "asc" }], select: { id: true, name: true, parentId: true } }),
  ]);

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/admin/products" className="text-sm text-primary hover:underline">← Products</Link>
        <h1 className="text-2xl font-bold text-foreground my-6">Edit product</h1>
        <ProductForm
          action={updateProduct.bind(null, id)}
          submitLabel="Save changes"
          tags={tags}
          categories={categories}
          error={error}
          product={{
            name: product.name,
            slug: product.slug,
            shortDescription: product.shortDescription,
            longDescription: product.longDescription,
            price: product.price,
            compareAtPrice: product.compareAtPrice,
            ingredients: product.ingredients,
            howToUse: product.howToUse,
            benefits: product.benefits,
            badges: product.badges,
            isActive: product.isActive,
            variants: product.variants.map((v) => ({ id: v.id, size: v.size, price: v.price, stock: v.stock, sku: v.sku })),
            images: product.images.map((i) => ({ url: i.url, alt: i.alt })),
            tagIds: product.tags.map((t) => t.tagId),
            primaryCategoryId: product.categories.find((c) => c.isPrimary)?.categoryId ?? null,
            alsoInCategoryIds: product.categories.filter((c) => !c.isPrimary).map((c) => c.categoryId),
          }}
        />
      </div>
    </main>
  );
}