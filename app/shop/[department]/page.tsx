import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductGrid from "@/components/store/product-grid";
import CategoryNav from "@/components/store/category-nav";
import { getCategoryBySlug, getProductCards, inCategories } from "@/lib/catalog";

type Props = { params: Promise<{ department: string }> };

export async function generateMetadata({ params }: Props) {
  const { department } = await params;
  const dept = await getCategoryBySlug(department);
  if (!dept || dept.parentId) return { title: "Not found | Kijani" };
  return { title: `${dept.name} | Kijani`, description: dept.description ?? undefined };
}

export default async function DepartmentPage({ params }: Props) {
  const { department } = await params;
  const dept = await getCategoryBySlug(department);
  if (!dept || dept.parentId) notFound();

  const ids = [dept.id, ...dept.children.map((c) => c.id)];
  const products = await getProductCards({ where: inCategories(ids) });

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="bg-secondary/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">{dept.name}</h1>
          {dept.description && <p className="text-muted-foreground">{dept.description}</p>}
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <CategoryNav deptName={dept.name} deptSlug={dept.slug} subs={dept.children} />
          <ProductGrid products={products} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
