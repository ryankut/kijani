import Link from "next/link";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { createProduct } from "../actions";
import ProductForm from "../product-form";

export default async function NewProductPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  await requireAdmin();
  const { error } = await searchParams;

  const [tags, categories] = await Promise.all([
    db.tag.findMany({ orderBy: [{ type: "asc" }, { name: "asc" }] }),
    db.category.findMany({ orderBy: [{ sortOrder: "asc" }, { name: "asc" }], select: { id: true, name: true, parentId: true } }),
  ]);

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/admin/products" className="text-sm text-primary hover:underline">← Products</Link>
        <h1 className="text-2xl font-bold text-foreground my-6">Add product</h1>
        <ProductForm action={createProduct} submitLabel="Add product" tags={tags} categories={categories} error={error} />
      </div>
    </main>
  );
}