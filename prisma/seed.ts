   import "dotenv/config";
   import { PrismaPg } from "@prisma/adapter-pg";
   import { PrismaClient } from "../generated/prisma/client";

   const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
   const prisma = new PrismaClient({ adapter });

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
   }

   main()
     .then(() => prisma.$disconnect())
     .catch(async (e) => {
       console.error(e);
       await prisma.$disconnect();
       process.exit(1);
     });