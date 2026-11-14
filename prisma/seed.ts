import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const heroSlides = [
  { headline: "Nourish Your Skin Naturally", subtext: "Gentle, effective skincare made with ingredients your skin will love.", buttonLabel: "Shop Skin Care", buttonHref: "/shop/skincare", imagePath: "/premium-luxury-hydrating-face-serum-skincare-produ.jpg" },
  { headline: "Restore Your Natural Glow", subtext: "Botanical oils and butters for everyday radiance.", buttonLabel: "Shop Skin Care", buttonHref: "/shop/skincare", imagePath: "/luxury-eye-cream-premium-skincare-cosmetics-beauty.jpg" },
  { headline: "Strong, Healthy Hair", subtext: "Growth tonics, oils and treatments for all hair types.", buttonLabel: "Shop Hair Care", buttonHref: "/shop/haircare", imagePath: "/premium-spf-moisturizer-sunscreen-skincare-beauty-.jpg" },
  { headline: "Care for Every Strand", subtext: "Natural remedies that nourish from root to tip.", buttonLabel: "Shop Hair Care", buttonHref: "/shop/haircare", imagePath: "/luxury-facial-mask-premium-skincare-treatment.jpg" },
  { headline: "Gentle Care for Little Ones", subtext: "Safe, mild products made for babies and kids.", buttonLabel: "Shop Baby Products", buttonHref: "/shop/babyproducts", imagePath: "/rose-oil-elixir-natural-skincare-beauty.jpg" },
  { headline: "Soft Skin, Happy Baby", subtext: "Nourishing oils and moisturisers made with care.", buttonLabel: "Shop Baby Products", buttonHref: "/shop/babyproducts", imagePath: "/night-renewal-serum-advanced-skincare.jpg" },
];

const tree = [
  { name: "Skincare", slug: "skincare", children: ["Cleansers", "Facial Serums", "Moisturisers", "Butters", "Sunscreen"] },
  { name: "Haircare", slug: "haircare", children: ["Growth Tonics", "Leave-in Conditioners", "Treatments", "Natural Oils"] },
  { name: "Baby Products", slug: "babyproducts", children: ["Kids Hair", "Kids Skincare"] },
];

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

type SeedProduct = { name: string; primary: string; also?: string[]; image: string };

const products: SeedProduct[] = [
  { name: "Cleansing Oil", primary: "cleansers", image: "/luxury-rose-oil-bottle.jpg" },
  { name: "Shower Gel", primary: "cleansers", image: "/facial-cleanser-luxury.jpg" },
  { name: "Vitamin C Serum", primary: "facial-serums", image: "/vitamin-serum-wellness.jpg" },
  { name: "Moisturizing Face Cream", primary: "moisturisers", image: "/luxury-white-pearl-cream-jar.jpg" },
  { name: "Aloe Vera Gel", primary: "moisturisers", image: "/luxury-purple-toner-bottle.jpg" },
  { name: "Shea Butter", primary: "butters", image: "/night-cream-moisturizer.jpg" },
  { name: "Raw Shea Butter", primary: "butters", image: "/luxury-white-pearl-cream-jar.jpg" },
  { name: "Sunscreen", primary: "sunscreen", image: "/moisturizer-spf-sunscreen.jpg" },
  { name: "Herbs Infused Hair Oil", primary: "growth-tonics", image: "/hair-oil-elixir.jpg" },
  { name: "Rosemary Oil", primary: "growth-tonics", image: "/hair-growth-serum.jpg" },
  { name: "Castor Oil", primary: "growth-tonics", image: "/hair-oil-elixir.jpg" },
  { name: "Black Seed Oil", primary: "growth-tonics", image: "/hair-growth-serum.jpg" },
  { name: "Leave-in Conditioner", primary: "leave-in-conditioners", image: "/deep-conditioner-haircare.jpg" },
  { name: "Aloe Leave-in Conditioner", primary: "leave-in-conditioners", image: "/silk-hair-mask-treatment.jpg" },
  { name: "Keratin Protein Treatment", primary: "treatments", image: "/keratin-treatment-haircare.jpg" },
  { name: "Coconut Oil", primary: "natural-oils", also: ["skincare"], image: "/hair-oil-elixir.jpg" },
  { name: "Extra Virgin Olive Oil", primary: "natural-oils", also: ["skincare"], image: "/luxury-rose-oil-bottle.jpg" },
  { name: "Flaxseed Oil", primary: "natural-oils", also: ["skincare"], image: "/hair-oil-elixir.jpg" },
  { name: "Grape Seed Oil", primary: "natural-oils", also: ["skincare"], image: "/luxury-rose-oil-bottle.jpg" },
  { name: "Jojoba Oil", primary: "natural-oils", also: ["skincare"], image: "/hair-oil-elixir.jpg" },
  { name: "Neem Oil", primary: "natural-oils", also: ["skincare"], image: "/luxury-rose-oil-bottle.jpg" },
  { name: "Papaya Seed Oil", primary: "natural-oils", also: ["skincare"], image: "/hair-oil-elixir.jpg" },
  { name: "Sweet Almond Oil", primary: "natural-oils", also: ["skincare"], image: "/luxury-rose-oil-bottle.jpg" },
  { name: "Rosehip Oil", primary: "natural-oils", also: ["skincare"], image: "/luxury-rose-oil-bottle.jpg" },
  { name: "Kids Hair Growth Oil", primary: "kids-hair", image: "/hair-oil-elixir.jpg" },
  { name: "Kids Hair Oil", primary: "kids-hair", image: "/hair-oil-elixir.jpg" },
  { name: "Kids Hair Care Set", primary: "kids-hair", image: "/volumizing-shampoo-haircare.jpg" },
  { name: "Kids Moisturizer", primary: "kids-skincare", image: "/luxury-white-pearl-cream-jar.jpg" },
];

async function main() {
  for (const [i, parent] of tree.entries()) {
    const p = await prisma.category.upsert({
      where: { slug: parent.slug },
      update: {},
      create: { name: parent.name, slug: parent.slug, sortOrder: i },
    });

    for (const [j, childName] of parent.children.entries()) {
      const slug = slugify(childName);
      await prisma.category.upsert({
        where: { slug },
        update: {},
        create: { name: childName, slug, parentId: p.id, sortOrder: j },
      });
    }
  }

  for (const [i, slide] of heroSlides.entries()) {
    const existing = await prisma.heroSlide.findFirst({ where: { headline: slide.headline } });
    if (!existing) {
      await prisma.heroSlide.create({ data: { ...slide, sortOrder: i } });
    }
  }

  const cats = await prisma.category.findMany({ select: { id: true, slug: true } });
  const idBySlug = new Map(cats.map((c) => [c.slug, c.id]));

  for (const p of products) {
    const slug = slugify(p.name);
    if (await prisma.product.findUnique({ where: { slug } })) continue;
    const primaryId = idBySlug.get(p.primary);
    if (!primaryId) {
      console.warn(`Skipping ${p.name}: category "${p.primary}" not found`);
      continue;
    }
    const alsoIds = (p.also ?? []).map((s) => idBySlug.get(s)).filter((id): id is string => !!id);
    await prisma.product.create({
      data: {
        slug,
        name: p.name,
        shortDescription: "Placeholder product. Replace this in the admin.",
        longDescription: "Placeholder description. Replace this with the real product details in the admin.",
        price: 1000,
        variants: { create: [{ size: "100ml", price: 1000, stock: 50, sortOrder: 0 }] },
        images: { create: [{ url: p.image, alt: p.name, sortOrder: 0 }] },
        categories: {
          create: [
            { categoryId: primaryId, isPrimary: true },
            ...alsoIds.map((categoryId) => ({ categoryId, isPrimary: false })),
          ],
        },
      },
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });