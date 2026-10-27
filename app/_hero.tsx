import { db } from "@/lib/db";
import HeroCard from "@/components/hero-card";

export default async function Hero() {
  const slides = await db.heroSlide.findMany({
    where: { isActive: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
    select: {
      id: true,
      headline: true,
      subtext: true,
      imagePath: true,
      buttonLabel: true,
      buttonHref: true,
    },
  });

  return <HeroCard slides={slides} />;
}