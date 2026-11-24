import { db } from "@/lib/db";

const published = { status: "PUBLISHED" as const };
const byNewest = [{ publishedAt: "desc" as const }, { createdAt: "desc" as const }];

export type ArticleSummary = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  publishedAt: Date | null;
};

const summarySelect = {
  id: true,
  slug: true,
  title: true,
  subtitle: true,
  coverImage: true,
  publishedAt: true,
};

export async function getLatestArticle(): Promise<ArticleSummary | null> {
  return db.article.findFirst({ where: published, orderBy: byNewest, select: summarySelect });
}

export async function getPublishedArticles(take?: number): Promise<ArticleSummary[]> {
  return db.article.findMany({ where: published, orderBy: byNewest, take, select: summarySelect });
}

export async function getArticleBySlug(slug: string) {
  return db.article.findFirst({ where: { slug, ...published }, include: { category: true } });
}