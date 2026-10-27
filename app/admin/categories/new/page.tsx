import Link from "next/link";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { createCategory } from "../actions";
import CategoryForm from "../category-form";

export default async function NewCategoryPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  await requireAdmin();
  const { error } = await searchParams;

  const parents = await db.category.findMany({
    where: { parentId: null },
    orderBy: { sortOrder: "asc" },
    select: { id: true, name: true },
  });

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/admin/categories" className="text-sm text-primary hover:underline">← Categories</Link>
        <h1 className="text-2xl font-bold text-foreground my-6">Add category</h1>
        <CategoryForm
          action={createCategory}
          submitLabel="Add category"
          parentOptions={parents}
          error={error}
        />
      </div>
    </main>
  );
}