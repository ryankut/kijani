    "use server";

    import { redirect } from "next/navigation";
    import { createClient } from "@/lib/supabase/server";
    import { appConfig } from "@/lib/config";

    export async function signIn(formData: FormData) {
      const email = String(formData.get("email") ?? "").trim().toLowerCase();
      const password = String(formData.get("password") ?? "");

      if (!email || email !== appConfig.adminEmail) redirect("/admin/login?error=1");

      const supabase = await createClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) redirect("/admin/login?error=1");

      redirect("/admin");
    }

    export async function signOut() {
      const supabase = await createClient();
      await supabase.auth.signOut();
      redirect("/admin/login");
    }