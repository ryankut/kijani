import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { updateCategory } from "../actions";
import CategoryForm from "../category-form";

export default async function EditCategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const { error } = await searchParams;

  const category = await db.category.findUnique({ where: { id } });
  if (!category) notFound();

  const parents = await db.category.findMany({
    where: { parentId: null, id: { not: id } },
    orderBy: { sortOrder: "asc" },
    select: { id: true, name: true },
  });

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/admin/categories" className="text-sm text-primary hover:underline">← Categories</Link>
        <h1 className="text-2xl font-bold text-foreground my-6">Edit category</h1>
        <CategoryForm
          action={updateCategory.bind(null, id)}
          submitLabel="Save changes"
          category={category}
          parentOptions={parents}
          error={error}
        />
      </div>
    </main>
  );
}