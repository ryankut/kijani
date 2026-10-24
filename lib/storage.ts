   import { createClient } from "@/lib/supabase/server";
   import { appConfig } from "@/lib/config";
   import { MEDIA_BUCKET, type UploadFolder } from "@/lib/media";

   const publicPrefix = `${appConfig.supabaseUrl}/storage/v1/object/public/${MEDIA_BUCKET}/`;
   const EXT: Record<string, string> = {
     "image/jpeg": "jpg",
     "image/png": "png",
     "image/webp": "webp",
   };

   export async function createSignedUpload(folder: UploadFolder, contentType: string) {
     const supabase = await createClient();
     const path = `${folder}/${crypto.randomUUID()}.${EXT[contentType]}`;
     const { data, error } = await supabase.storage.from(MEDIA_BUCKET).createSignedUploadUrl(path);
     if (error || !data) throw new Error(error?.message ?? "Could not create upload URL");
     const publicUrl = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path).data.publicUrl;
     return { path, token: data.token, publicUrl };
   }

   // True only for images in our own bucket and the expected folder.
   export function isOurImage(url: string, folder: UploadFolder) {
     return url.startsWith(`${publicPrefix}${folder}/`);
   }

   // Deletes only files in our own bucket; repo images and other URLs are ignored.
   export async function deleteImageByUrl(url: string | null | undefined) {
     if (!url || !url.startsWith(publicPrefix)) return;
     const supabase = await createClient();
     await supabase.storage.from(MEDIA_BUCKET).remove([url.slice(publicPrefix.length)]);
   }