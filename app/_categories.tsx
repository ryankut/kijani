import { db } from "@/lib/db";
import SmallSquareCards from "@/components/small-square-cards";

export default async function CategorySection() {
  const categories = await db.category.findMany({
    where: { isActive: true, parentId: null },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
    select: {
      id: true,
      name: true,
      slug: true,
      imagePath: true,
    },
  });

  return <SmallSquareCards categories={categories} />;
}