   import Link from "next/link";
   import { requireAdmin } from "@/lib/admin";
   import { createSlide } from "../actions";
   import HeroForm from "../hero-form";

   export default async function NewSlidePage({
     searchParams,
   }: {
     searchParams: Promise<{ error?: string }>;
   }) {
     await requireAdmin();
     const { error } = await searchParams;
     return (
       <main className="min-h-screen bg-background p-8">
         <div className="max-w-5xl mx-auto">
           <Link href="/admin/hero" className="text-sm text-primary hover:underline">← Hero slides</Link>
           <h1 className="text-2xl font-bold text-foreground my-6">Add slide</h1>
           <HeroForm action={createSlide} submitLabel="Add slide" error={error} />
         </div>
       </main>
     );
   }