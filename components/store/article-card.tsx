import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { ArticleSummary } from "@/lib/articles";

export default function ArticleCard({ article }: { article: ArticleSummary }) {
  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <div className="relative aspect-[16/10] bg-muted rounded-2xl overflow-hidden mb-3">
        <Image
          src={article.coverImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      {article.publishedAt && (
        <p className="text-xs text-muted-foreground mb-1">{formatDate(article.publishedAt)}</p>
      )}
      <h3 className="font-semibold text-foreground group-hover:text-primary transition">{article.title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{article.subtitle}</p>
    </Link>
  );
}