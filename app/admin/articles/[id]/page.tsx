import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { updateArticle } from "../actions";
import ArticleForm from "../article-form";

export default async function EditArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const { error } = await searchParams;

  const [article, categories] = await Promise.all([
    db.article.findUnique({ where: { id } }),
    db.category.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      select: { id: true, name: true, parentId: true },
    }),
  ]);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/admin/articles" className="text-sm text-primary hover:underline">← Articles</Link>
        <h1 className="text-2xl font-bold text-foreground my-6">Edit article</h1>
        <ArticleForm
          action={updateArticle.bind(null, article.id)}
          submitLabel="Save changes"
          categories={categories}
          error={error}
          article={{
            title: article.title,
            subtitle: article.subtitle,
            slug: article.slug,
            intro: article.intro,
            authorName: article.authorName,
            categoryId: article.categoryId,
            status: article.status,
            coverImage: article.coverImage,
          }}
        />
      </div>
    </main>
  );
}