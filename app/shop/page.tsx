import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductGrid from "@/components/store/product-grid";
import { getDepartments, getProductCards } from "@/lib/catalog";

export const metadata = {
  title: "Shop | Kijani",
  description: "Natural remedies for your hair and skin.",
};

export default async function ShopPage() {
  const [departments, products] = await Promise.all([getDepartments(), getProductCards()]);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="bg-secondary/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Shop</h1>
          <p className="text-muted-foreground">Natural remedies for your hair and skin.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {departments.map((d) => (
              <Link key={d.id} href={`/shop/${d.slug}`} className="px-4 py-2 rounded-full border border-border text-sm hover:bg-muted transition">
                {d.name}
              </Link>
            ))}
          </div>
          <ProductGrid products={products} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
