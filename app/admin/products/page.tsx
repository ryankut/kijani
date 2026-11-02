import Link from "next/link";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { deleteProduct, toggleProduct } from "./actions";

const btn = "px-3 py-1 rounded-full border border-border text-sm hover:bg-muted transition";

export default async function ProductsAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  await requireAdmin();
  const { error } = await searchParams;

  const products = await db.product.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      images: { orderBy: { sortOrder: "asc" }, take: 1 },
      variants: { orderBy: { sortOrder: "asc" } },
    },
  });

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/admin" className="text-sm text-primary hover:underline">← Admin</Link>
        <div className="flex items-center justify-between my-6">
          <h1 className="text-2xl font-bold text-foreground">Products</h1>
          <Link href="/admin/products/new" className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-semibold">
            Add product
          </Link>
        </div>

        {error && <p className="text-sm text-destructive mb-4">{error}</p>}

        {products.length === 0 && <p className="text-muted-foreground">No products yet.</p>}

        <div className="space-y-3">
          {products.map((p) => (
            <div key={p.id} className="bg-card border border-border rounded-2xl p-4 flex flex-wrap items-center gap-4">
              {p.images[0]?.url && (
                <img src={p.images[0].url} alt="" className="w-20 h-20 object-cover rounded-lg" />
              )}
              <div className="flex-1 min-w-48">
                <p className="font-semibold text-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground">/{p.slug}</p>
                <p className="text-xs mt-1 text-muted-foreground">
                  KES {p.price} · {p.variants.length} variant{p.variants.length === 1 ? "" : "s"} · {p.isActive ? "Visible" : "Hidden"}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <form action={toggleProduct.bind(null, p.id)}>
                  <button className={btn}>{p.isActive ? "Hide" : "Show"}</button>
                </form>
                <Link href={`/admin/products/${p.id}`} className={btn}>Edit</Link>
                <details className="relative">
                  <summary className={`${btn} cursor-pointer list-none`}>Delete</summary>
                  <form action={deleteProduct.bind(null, p.id)} className="absolute right-0 mt-2 bg-card border border-border rounded-lg p-3 z-10 w-56">
                    <p className="text-xs text-muted-foreground mb-2">Delete this product and its images?</p>
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