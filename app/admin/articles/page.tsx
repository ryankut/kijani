import Link from "next/link";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { formatDate } from "@/lib/format";
import { deleteArticle, toggleArticle } from "./actions";

const btn = "px-3 py-1 rounded-full border border-border text-sm hover:bg-muted transition";

export default async function ArticlesAdminPage() {
  await requireAdmin();
  const articles = await db.article.findMany({
    orderBy: [{ createdAt: "desc" }],
    include: { category: { select: { name: true } } },
  });

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/admin" className="text-sm text-primary hover:underline">← Admin</Link>
        <div className="flex items-center justify-between my-6">
          <h1 className="text-2xl font-bold text-foreground">Articles</h1>
          <Link href="/admin/articles/new" className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-semibold">
            Add article
          </Link>
        </div>

        {articles.length === 0 && <p className="text-muted-foreground">No articles yet.</p>}

        <div className="space-y-3">
          {articles.map((a) => (
            <div key={a.id} className="bg-card border border-border rounded-2xl p-4 flex flex-wrap items-center gap-4">
              <img src={a.coverImage} alt="" className="w-40 h-20 object-cover rounded-lg" />
              <div className="flex-1 min-w-48">
                <p className="font-semibold text-foreground">{a.title}</p>
                <p className="text-sm text-muted-foreground">{a.subtitle}</p>
                <p className="text-xs mt-1 text-muted-foreground">
                  {a.status === "PUBLISHED" ? "Published" : "Draft"} · {a.category.name}
                  {a.publishedAt ? ` · ${formatDate(a.publishedAt)}` : ""}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <form action={toggleArticle.bind(null, a.id)}>
                  <button className={btn}>{a.status === "PUBLISHED" ? "Unpublish" : "Publish"}</button>
                </form>
                {a.status === "PUBLISHED" && (
                  <Link href={`/articles/${a.slug}`} className={btn}>View</Link>
                )}
                <Link href={`/admin/articles/${a.id}`} className={btn}>Edit</Link>
                <details className="relative">
                  <summary className={`${btn} cursor-pointer list-none`}>Delete</summary>
                  <form action={deleteArticle.bind(null, a.id)} className="absolute right-0 mt-2 bg-card border border-border rounded-lg p-3 z-10 w-52">
                    <p className="text-xs text-muted-foreground mb-2">Delete this article and its cover image?</p>
                    <button className="w-full bg-destructive text-white rounded-full py-1 text-sm">Yes, delete</button>
                  </form>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 