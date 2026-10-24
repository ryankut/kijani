   import { createServerClient } from "@supabase/ssr";
   import { NextResponse, type NextRequest } from "next/server";
   import { appConfig } from "@/lib/config";

   export async function updateSession(request: NextRequest) {
     let response = NextResponse.next({ request });

     const supabase = createServerClient(appConfig.supabaseUrl, appConfig.supabaseKey, {
       cookies: {
         getAll() {
           return request.cookies.getAll();
         },
         setAll(cookiesToSet) {
           cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
           response = NextResponse.next({ request });
           cookiesToSet.forEach(({ name, value, options }) =>
             response.cookies.set(name, value, options)
           );
         },
       },
     });

     const { data } = await supabase.auth.getClaims();
     const email = (data?.claims?.email as string | undefined)?.toLowerCase();
     const isAdmin = !!email && email === appConfig.adminEmail;
     const isLogin = request.nextUrl.pathname === "/admin/login";

     if (!isAdmin && !isLogin) {
       const url = request.nextUrl.clone();
       url.pathname = "/admin/login";
       return NextResponse.redirect(url);
     }
     if (isAdmin && isLogin) {
       const url = request.nextUrl.clone();
       url.pathname = "/admin";
       return NextResponse.redirect(url);
     }
     return response;
   }