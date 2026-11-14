import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductGrid from "@/components/store/product-grid";
import CategoryNav from "@/components/store/category-nav";
import { getCategoryBySlug, getProductCards, inCategories } from "@/lib/catalog";

type Props = { params: Promise<{ department: string; subcategory: string }> };

export async function generateMetadata({ params }: Props) {
  const { department, subcategory } = await params;
  const dept = await getCategoryBySlug(department);
  const sub = dept?.children.find((c) => c.slug === subcategory);
  if (!dept || dept.parentId || !sub) return { title: "Not found | Kijani" };
  return { title: `${sub.name} | ${dept.name} | Kijani`, description: sub.description ?? undefined };
}

export default async function SubcategoryPage({ params }: Props) {
  const { department, subcategory } = await params;
  const dept = await getCategoryBySlug(department);
  if (!dept || dept.parentId) notFound();
  const sub = dept.children.find((c) => c.slug === subcategory);
  if (!sub) notFound();

  const products = await getProductCards({ where: inCategories([sub.id]) });

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="bg-secondary/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-2">
            <Link href={`/shop/${dept.slug}`} className="hover:text-primary">{dept.name}</Link>
          </p>
          <h1 className="text-4xl font-bold text-foreground mb-2">{sub.name}</h1>
          {sub.description && <p className="text-muted-foreground">{sub.description}</p>}
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <CategoryNav deptName={dept.name} deptSlug={dept.slug} subs={dept.children} activeSlug={sub.slug} />
          <ProductGrid products={products} emptyText="No products in this category yet." />
        </div>
      </section>
      <Footer />
    </main>
  );
}
