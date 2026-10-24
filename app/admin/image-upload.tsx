   "use client";

   import { useState } from "react";
   import { createClient } from "@/lib/supabase/client";
   import { MEDIA_BUCKET } from "@/lib/media";
   import { requestUpload } from "./upload-actions";

   type Props = {
     name: string;
     folder: string;
     label: string;
     initialUrl?: string;
     hint?: string;
   };

   const INPUT_TYPES = ["image/jpeg", "image/png", "image/webp"];

   async function optimise(file: File, maxSide = 2000, quality = 0.85) {
     const bitmap = await createImageBitmap(file);
     const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
     const w = Math.round(bitmap.width * scale);
     const h = Math.round(bitmap.height * scale);
     const canvas = document.createElement("canvas");
     canvas.width = w;
     canvas.height = h;
     canvas.getContext("2d")!.drawImage(bitmap, 0, 0, w, h);
     bitmap.close();
     const toBlob = (type: string) =>
       new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, quality));
     let blob = await toBlob("image/webp");
     if (!blob || blob.type !== "image/webp") blob = await toBlob("image/jpeg");
     if (!blob) throw new Error("Could not optimise this image.");
     return blob;
   }

   export default function ImageUpload({ name, folder, label, initialUrl = "", hint }: Props) {
     const [url, setUrl] = useState(initialUrl);
     const [preview, setPreview] = useState(initialUrl);
     const [status, setStatus] = useState<"idle" | "working" | "done" | "error">("idle");
     const [message, setMessage] = useState("");

     async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
       const file = e.target.files?.[0];
       if (!file) return;
       if (!INPUT_TYPES.includes(file.type)) {
         setStatus("error");
         setMessage("Please choose a JPG, PNG or WebP image. iPhone HEIC photos must be exported as JPG first.");
         return;
       }

       setStatus("working");
       setMessage("Optimising…");
       try {
         const blob = await optimise(file);
         setMessage("Uploading…");

         const res = await requestUpload(folder, blob.type, blob.size);
         if ("error" in res) throw new Error(res.error);

         const { path, token, publicUrl } = res.upload;
         const { error } = await createClient()
           .storage.from(MEDIA_BUCKET)
           .uploadToSignedUrl(path, token, blob, {
             contentType: blob.type,
             cacheControl: "31536000",
           });
         if (error) throw new Error(error.message);

         setUrl(publicUrl);
         setPreview(URL.createObjectURL(blob));
         setStatus("done");
         setMessage(
           `Ready: ${Math.round(blob.size / 1024)} KB (original ${(file.size / 1024 / 1024).toFixed(1)} MB)`
         );
       } catch (err) {
         setStatus("error");
         setMessage(err instanceof Error ? err.message : "Upload failed. Please try again.");
       }
     }

     return (
       <div>
         <label className="block text-sm font-medium text-foreground mb-1">{label}</label>
         {preview && (
           <img src={preview} alt="" className="w-full max-w-sm h-32 object-cover rounded-lg mb-2" />
         )}
         {/* No "name" on the file input on purpose: the file itself must never be sent to the server action. */}
         <input
           type="file"
           accept="image/jpeg,image/png,image/webp"
           onChange={onChange}
           className="block w-full text-sm text-muted-foreground"
         />
         <input type="hidden" name={name} value={url} />
         {message && (
           <p className={`text-xs mt-1 ${status === "error" ? "text-destructive" : "text-muted-foreground"}`}>
             {message}
           </p>
         )}
         {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
       </div>
     );
   }