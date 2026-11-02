import Link from "next/link";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { createTag, deleteTag } from "./actions";

const field =
  "w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary";
const label = "block text-sm font-medium text-foreground mb-1";
const btn = "px-3 py-1 rounded-full border border-border text-sm hover:bg-muted transition";

const TYPE_LABELS: Record<string, string> = {
  skin_type: "Skin type",
  hair_type: "Hair type",
  concern: "Concern",
};

export default async function TagsAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  await requireAdmin();
  const { error } = await searchParams;

  const tags = await db.tag.findMany({
    orderBy: [{ type: "asc" }, { name: "asc" }],
  });

  const grouped = new Map<string, typeof tags>();
  for (const t of tags) {
    const arr = grouped.get(t.type) ?? [];
    arr.push(t);
    grouped.set(t.type, arr);
  }

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/admin" className="text-sm text-primary hover:underline">← Admin</Link>
        <h1 className="text-2xl font-bold text-foreground my-6">Tags</h1>

        {error && <p className="text-sm text-destructive mb-4">{error}</p>}

        <form action={createTag} className="bg-card border border-border rounded-2xl p-6 space-y-4 mb-8">
          <p className="font-semibold text-foreground">Add a tag</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className={label} htmlFor="name">Name</label>
              <input id="name" name="name" required maxLength={40} className={field} placeholder="Dry skin" />
            </div>
            <div>
              <label className={label} htmlFor="type">Type</label>
              <select id="type" name="type" required className={field}>
                <option value="skin_type">Skin type</option>
                <option value="hair_type">Hair type</option>
                <option value="concern">Concern</option>
              </select>
            </div>
          </div>
          <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold">
            Add tag
          </button>
        </form>

        {tags.length === 0 && <p className="text-muted-foreground">No tags yet.</p>}

        <div className="space-y-6">
          {Array.from(grouped.entries()).map(([type, items]) => (
            <div key={type}>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                {TYPE_LABELS[type] ?? type}
              </h2>
              <div className="flex flex-wrap gap-2">
                {items.map((t) => (
                  <span key={t.id} className="inline-flex items-center gap-2 bg-card border border-border rounded-full pl-3 pr-1 py-1 text-sm">
                    {t.name}
                    <form action={deleteTag.bind(null, t.id)}>
                      <button className={`${btn} !py-0.5 !px-2`} aria-label="Delete tag">×</button>
                    </form>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}