   import "dotenv/config";
   import { PrismaPg } from "@prisma/adapter-pg";
   import { PrismaClient } from "../generated/prisma/client";

   const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
   const prisma = new PrismaClient({ adapter });

   const heroSlides = [
    { headline: "Nourish Your Skin Naturally", subtext: "Gentle, effective skincare made with ingredients your skin will love.", buttonLabel: "Shop Skin Care", buttonHref: "/skincare", imagePath: "/premium-luxury-hydrating-face-serum-skincare-produ.jpg" },
    { headline: "Restore Your Natural Glow", subtext: "Botanical oils and butters for everyday radiance.", buttonLabel: "Shop Skin Care", buttonHref: "/skincare", imagePath: "/luxury-eye-cream-premium-skincare-cosmetics-beauty.jpg" },
    { headline: "Strong, Healthy Hair", subtext: "Growth tonics, oils and treatments for all hair types.", buttonLabel: "Shop Hair Care", buttonHref: "/haircare", imagePath: "/premium-spf-moisturizer-sunscreen-skincare-beauty-.jpg" },
    { headline: "Care for Every Strand", subtext: "Natural remedies that nourish from root to tip.", buttonLabel: "Shop Hair Care", buttonHref: "/haircare", imagePath: "/luxury-facial-mask-premium-skincare-treatment.jpg" },
    { headline: "Gentle Care for Little Ones", subtext: "Safe, mild products made for babies and kids.", buttonLabel: "Shop Baby Products", buttonHref: "/babyproducts", imagePath: "/rose-oil-elixir-natural-skincare-beauty.jpg" },
    { headline: "Soft Skin, Happy Baby", subtext: "Nourishing oils and moisturisers made with care.", buttonLabel: "Shop Baby Products", buttonHref: "/babyproducts", imagePath: "/night-renewal-serum-advanced-skincare.jpg" },
  ];

   const tree = [
     { name: "Skincare", slug: "skincare", children: ["Cleansers", "Facial Serums", "Moisturisers", "Butters", "Sunscreen"] },
     { name: "Haircare", slug: "haircare", children: ["Growth Tonics", "Leave-in Conditioners", "Treatments", "Natural Oils"] },
     { name: "Babycare", slug: "babycare", children: ["Kids Hair", "Kids Skincare"] },
   ];

   const slugify = (s: string) =>
     s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

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

    // Seed hero slides once; never overwrite admin edits.
    for (const [i, slide] of heroSlides.entries()) {
      const existing = await prisma.heroSlide.findFirst({
        where: { headline: slide.headline },
      });
      if (!existing) {
        await prisma.heroSlide.create({
          data: { ...slide, sortOrder: i },
        });
      }
    }
  }

   main()
     .then(() => prisma.$disconnect())
     .catch(async (e) => {
       console.error(e);
       await prisma.$disconnect();
       process.exit(1);
     });