   import Link from "next/link";
   import { db } from "@/lib/db";
   import { requireAdmin } from "@/lib/admin";
   import { deleteSlide, moveSlide, toggleSlide } from "./actions";

   const btn = "px-3 py-1 rounded-full border border-border text-sm hover:bg-muted transition";

   export default async function HeroAdminPage() {
     await requireAdmin();
     const slides = await db.heroSlide.findMany({
       orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
     });

     return (
       <main className="min-h-screen bg-background p-8">
         <div className="max-w-5xl mx-auto">
           <Link href="/admin" className="text-sm text-primary hover:underline">← Admin</Link>
           <div className="flex items-center justify-between my-6">
             <h1 className="text-2xl font-bold text-foreground">Hero slides</h1>
             <Link href="/admin/hero/new" className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-semibold">
               Add slide
             </Link>
           </div>

           {slides.length === 0 && <p className="text-muted-foreground">No slides yet.</p>}

           <div className="space-y-3">
             {slides.map((s, i) => (
               <div key={s.id} className="bg-card border border-border rounded-2xl p-4 flex flex-wrap items-center gap-4">
                 <img src={s.imagePath} alt="" className="w-40 h-20 object-cover rounded-lg" />
                 <div className="flex-1 min-w-48">
                   <p className="font-semibold text-foreground">{s.headline}</p>
                   {s.subtext && <p className="text-sm text-muted-foreground">{s.subtext}</p>}
                   <p className="text-xs mt-1 text-muted-foreground">{s.isActive ? "Visible" : "Hidden"}</p>
                 </div>

                 <div className="flex flex-wrap items-center gap-2">
                   <form action={moveSlide.bind(null, s.id, "up")}>
                     <button className={btn} disabled={i === 0} aria-label="Move up">↑</button>
                   </form>
                   <form action={moveSlide.bind(null, s.id, "down")}>
                     <button className={btn} disabled={i === slides.length - 1} aria-label="Move down">↓</button>
                   </form>
                   <form action={toggleSlide.bind(null, s.id)}>
                     <button className={btn}>{s.isActive ? "Hide" : "Show"}</button>
                   </form>
                   <Link href={`/admin/hero/${s.id}`} className={btn}>Edit</Link>
                   <details className="relative">
                     <summary className={`${btn} cursor-pointer list-none`}>Delete</summary>
                     <form action={deleteSlide.bind(null, s.id)} className="absolute right-0 mt-2 bg-card border border-border rounded-lg p-3 z-10 w-48">
                       <p className="text-xs text-muted-foreground mb-2">Delete this slide and its image?</p>
                       <button className="w-full bg-destructive text-white rounded-full py-1 text-sm">Yes, delete</button>
                     </form>
                   </details>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </main>
     );
   }