   function required(name: string, value: string | undefined) {
     if (!value) throw new Error(`Missing environment variable: ${name}`);
     return value;
   }

   export const appConfig = {
     supabaseUrl: required("NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL),
     supabaseKey: required(
       "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
       process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
     ),
     adminEmail: (process.env.ADMIN_EMAIL ?? "").toLowerCase(),
   };