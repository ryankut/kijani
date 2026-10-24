   import { createBrowserClient } from "@supabase/ssr";
   import { appConfig } from "@/lib/config";

   export function createClient() {
     return createBrowserClient(appConfig.supabaseUrl, appConfig.supabaseKey);
   }