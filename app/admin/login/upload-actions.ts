   "use server";

   import { requireAdmin } from "@/lib/admin";
   import { ALLOWED_IMAGE_TYPES, MAX_IMAGE_BYTES, UPLOAD_FOLDERS, type UploadFolder } from "@/lib/media";
   import { createSignedUpload } from "@/lib/storage";

   export async function requestUpload(folder: string, contentType: string, size: number) {
     await requireAdmin();
     if (!UPLOAD_FOLDERS.includes(folder as UploadFolder)) return { error: "Invalid upload folder." };
     if (!ALLOWED_IMAGE_TYPES.includes(contentType)) return { error: "Image must be a JPG, PNG or WebP." };
     if (!Number.isFinite(size) || size <= 0 || size > MAX_IMAGE_BYTES) {
       return { error: "Image is still too large after optimising (max 5 MB)." };
     }
     try {
       return { upload: await createSignedUpload(folder as UploadFolder, contentType) };
     } catch {
       return { error: "Could not start the upload. Please try again." };
     }
   }