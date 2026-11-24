import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ArticleHero from "@/components/store/article-hero";
import ProductGrid from "@/components/store/product-grid";
import { getArticleBySlug } from "@/lib/articles";
import { getProductsForCategory } from "@/lib/catalog";
import { formatDate } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Article not found | Kijani" };
  return { title: `${article.title} | Kijani`, description: article.subtitle };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const products = await getProductsForCategory(article.categoryId, 8);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <ArticleHero title={article.title} subtitle={article.subtitle} image={article.coverImage} as="h1" />

      <section className="px-4 pb-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">
            {article.authorName ? `By ${article.authorName}` : ""}
            {article.authorName && article.publishedAt ? " · " : ""}
            {article.publishedAt ? formatDate(article.publishedAt) : ""}
          </p>
          <p className="text-lg text-foreground leading-relaxed whitespace-pre-line">{article.intro}</p>
        </div>
      </section>

      {products.length > 0 && (
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related products</h2>
            <ProductGrid products={products} />
          </div>
        </section>
      )}

      <div className="px-4 pb-16 text-center">
        <Link href="/about#articles" className="text-primary font-semibold hover:underline">
          ← All articles
        </Link>
      </div>

      <Footer />
    </main>
  );
}