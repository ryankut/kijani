   export const MEDIA_BUCKET = "media";
   export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
   export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
   export const UPLOAD_FOLDERS = ["hero", "categories", "products", "articles"] as const;
   export type UploadFolder = (typeof UPLOAD_FOLDERS)[number];