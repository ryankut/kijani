import { requireAdmin } from "@/lib/admin";
import { signOut } from "./login/actions";
import Link from "next/link";

export default async function AdminHome() {
  const email = await requireAdmin();
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-foreground">Kijani Admin</h1>
          <form action={signOut}>
            <button className="text-sm text-muted-foreground hover:text-foreground">
              Sign out ({email})
            </button>
          </form>
        </div>
           <nav className="grid sm:grid-cols-2 gap-4">
     <Link href="/admin/hero" className="block bg-card border border-border rounded-2xl p-6 hover:shadow-md transition">
       <h2 className="font-semibold text-foreground">Hero slides</h2>
       <p className="text-sm text-muted-foreground mt-1">Homepage banner images and text.</p>
     </Link>
   </nav>
      </div>
    </main>
  );
}