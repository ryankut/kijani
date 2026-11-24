import ArticleCard from "./article-card";
import { getPublishedArticles } from "@/lib/articles";

export default async function ArticlesSection({ title = "Articles" }: { title?: string }) {
  const articles = await getPublishedArticles();
  if (articles.length === 0) return null;

  return (
    <section id="articles" className="py-16 px-4 bg-background scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}