import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductDetail from "@/components/store/product-detail";
import ProductGrid from "@/components/store/product-grid";
import { getProductBySlug, getRelatedProducts } from "@/lib/catalog";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Product not found | Kijani" };
  return { title: `${product.name} | Kijani`, description: product.shortDescription };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const primary = product.categories.find((c) => c.isPrimary)?.category ?? null;
  const dept = primary ? primary.parent ?? primary : null;
  const sub = primary?.parent ? primary : null;
  const related = primary ? await getRelatedProducts(product.id, primary.id) : [];

  const sections = [
    { title: "Ingredients", body: product.ingredients },
    { title: "How to use", body: product.howToUse },
    { title: "Benefits", body: product.benefits },
  ].filter((s) => s.body);

  const box = "bg-card border border-border rounded-xl p-4";

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav className="text-sm text-muted-foreground mb-6 flex flex-wrap items-center gap-x-2">
          <Link href="/shop" className="hover:text-primary">Shop</Link>
          {dept && (
            <>
              <span>/</span>
              <Link href={`/shop/${dept.slug}`} className="hover:text-primary">{dept.name}</Link>
            </>
          )}
          {dept && sub && (
            <>
              <span>/</span>
              <Link href={`/shop/${dept.slug}/${sub.slug}`} className="hover:text-primary">{sub.name}</Link>
            </>
          )}
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <ProductDetail
          name={product.name}
          shortDescription={product.shortDescription}
          images={product.images.map((i) => ({ url: i.url, alt: i.alt }))}
          variants={product.variants.map((v) => ({ id: v.id, size: v.size, price: v.price, stock: v.stock }))}
          compareAtPrice={product.compareAtPrice}
          fallbackPrice={product.price}
          badges={product.badges}
        />

        <div className="mt-12 space-y-3 max-w-3xl">
          <details open className={box}>
            <summary className="font-semibold cursor-pointer text-foreground">Description</summary>
            <p className="mt-3 text-muted-foreground whitespace-pre-line leading-relaxed">{product.longDescription}</p>
          </details>

          {sections.map((s) => (
            <details key={s.title} className={box}>
              <summary className="font-semibold cursor-pointer text-foreground">{s.title}</summary>
              <p className="mt-3 text-muted-foreground whitespace-pre-line leading-relaxed">{s.body}</p>
            </details>
          ))}

          {product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {product.tags.map((t) => (
                <span key={t.tagId} className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">
                  {t.tag.name}
                </span>
              ))}
            </div>
          )}
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">You may also like</h2>
            <ProductGrid products={related} />
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}
