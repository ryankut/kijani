import ArticleHero from "@/components/store/article-hero";
import { getLatestArticle } from "@/lib/articles";

export default async function LatestArticle() {
  const article = await getLatestArticle();
  if (!article) return null;

  return (
    <ArticleHero
      title={article.title}
      subtitle={article.subtitle}
      image={article.coverImage}
      label="Latest article"
      href={`/articles/${article.slug}`}
    />
  );
}