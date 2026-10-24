    import { redirect } from "next/navigation";
    import { createClient } from "@/lib/supabase/server";
    import { appConfig } from "@/lib/config";

    export async function requireAdmin() {
      const supabase = await createClient();
      const { data } = await supabase.auth.getClaims();
      const email = (data?.claims?.email as string | undefined)?.toLowerCase();
      if (!email || email !== appConfig.adminEmail) redirect("/admin/login");
      return email;
    }