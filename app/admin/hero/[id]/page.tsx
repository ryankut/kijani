   import Link from "next/link";
   import { notFound } from "next/navigation";
   import { db } from "@/lib/db";
   import { requireAdmin } from "@/lib/admin";
   import { updateSlide } from "../actions";
   import HeroForm from "../hero-form";

   export default async function EditSlidePage({
     params,
     searchParams,
   }: {
     params: Promise<{ id: string }>;
     searchParams: Promise<{ error?: string }>;
   }) {
     await requireAdmin();
     const { id } = await params;
     const { error } = await searchParams;

     const slide = await db.heroSlide.findUnique({ where: { id } });
     if (!slide) notFound();

     return (
       <main className="min-h-screen bg-background p-8">
         <div className="max-w-5xl mx-auto">
           <Link href="/admin/hero" className="text-sm text-primary hover:underline">← Hero slides</Link>
           <h1 className="text-2xl font-bold text-foreground my-6">Edit slide</h1>
           <HeroForm action={updateSlide.bind(null, slide.id)} slide={slide} submitLabel="Save changes" error={error} />
         </div>
       </main>
     );
   }