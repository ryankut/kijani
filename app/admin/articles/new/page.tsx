import Link from "next/link";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { createArticle } from "../actions";
import ArticleForm from "../article-form";

export default async function NewArticlePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  await requireAdmin();
  const { error } = await searchParams;
  const categories = await db.category.findMany({
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    select: { id: true, name: true, parentId: true },
  });

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/admin/articles" className="text-sm text-primary hover:underline">← Articles</Link>
        <h1 className="text-2xl font-bold text-foreground my-6">Add article</h1>
        <ArticleForm action={createArticle} submitLabel="Create article" categories={categories} error={error} />
      </div>
    </main>
  );
}