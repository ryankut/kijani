import Link from "next/link";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { deleteCategory, moveCategory, toggleCategory } from "./actions";

const btn = "px-3 py-1 rounded-full border border-border text-sm hover:bg-muted transition";

export default async function CategoriesAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  await requireAdmin();
  const { error } = await searchParams;

  const categories = await db.category.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
    include: { parent: true },
  });

  const parents = categories.filter((c) => !c.parentId);
  const childrenByParent = new Map<string, typeof categories>();
  for (const c of categories) {
    if (c.parentId) {
      const arr = childrenByParent.get(c.parentId) ?? [];
      arr.push(c);
      childrenByParent.set(c.parentId, arr);
    }
  }

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/admin" className="text-sm text-primary hover:underline">← Admin</Link>
        <div className="flex items-center justify-between my-6">
          <h1 className="text-2xl font-bold text-foreground">Categories</h1>
          <Link href="/admin/categories/new" className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-semibold">
            Add category
          </Link>
        </div>

        {error && <p className="text-sm text-destructive mb-4">{error}</p>}

        {categories.length === 0 && <p className="text-muted-foreground">No categories yet.</p>}

        <div className="space-y-3">
          {parents.map((c, i) => (
            <div key={c.id} className="bg-card border border-border rounded-2xl p-4">
              <div className="flex flex-wrap items-center gap-4">
                {c.imagePath && (
                  <img src={c.imagePath} alt="" className="w-20 h-20 object-cover rounded-lg" />
                )}
                <div className="flex-1 min-w-48">
                  <p className="font-semibold text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground">/{c.slug}</p>
                  <p className="text-xs mt-1 text-muted-foreground">
                    {c.isActive ? "Visible" : "Hidden"} · {childrenByParent.get(c.id)?.length ?? 0} subcategories
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <form action={moveCategory.bind(null, c.id, "up")}>
                    <button className={btn} disabled={i === 0} aria-label="Move up">↑</button>
                  </form>
                  <form action={moveCategory.bind(null, c.id, "down")}>
                    <button className={btn} disabled={i === parents.length - 1} aria-label="Move down">↓</button>
                  </form>
                  <form action={toggleCategory.bind(null, c.id)}>
                    <button className={btn}>{c.isActive ? "Hide" : "Show"}</button>
                  </form>
                  <Link href={`/admin/categories/${c.id}`} className={btn}>Edit</Link>
                  <details className="relative">
                    <summary className={`${btn} cursor-pointer list-none`}>Delete</summary>
                    <form action={deleteCategory.bind(null, c.id)} className="absolute right-0 mt-2 bg-card border border-border rounded-lg p-3 z-10 w-56">
                      <p className="text-xs text-muted-foreground mb-2">Delete this category and its image? Child categories must be deleted first.</p>
                      <button className="w-full bg-destructive text-white rounded-full py-1 text-sm">Yes, delete</button>
                    </form>
                  </details>
                </div>
              </div>

              {(childrenByParent.get(c.id)?.length ?? 0) > 0 && (
                <div className="mt-3 pl-4 border-l border-border space-y-2">
                  {childrenByParent.get(c.id)!.map((child) => (
                    <div key={child.id} className="flex flex-wrap items-center gap-3">
                      <span className="text-sm text-foreground">{child.name}</span>
                      <span className="text-xs text-muted-foreground">/{child.slug}</span>
                      <span className="text-xs text-muted-foreground">{child.isActive ? "Visible" : "Hidden"}</span>
                      <Link href={`/admin/categories/${child.id}`} className={btn}>Edit</Link>
                      <form action={toggleCategory.bind(null, child.id)}>
                        <button className={btn}>{child.isActive ? "Hide" : "Show"}</button>
                      </form>
                      <details className="relative">
                        <summary className={`${btn} cursor-pointer list-none`}>Delete</summary>
                        <form action={deleteCategory.bind(null, child.id)} className="absolute right-0 mt-2 bg-card border border-border rounded-lg p-3 z-10 w-56">
                          <p className="text-xs text-muted-foreground mb-2">Delete this subcategory?</p>
                          <button className="w-full bg-destructive text-white rounded-full py-1 text-sm">Yes, delete</button>
                        </form>
                      </details>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}