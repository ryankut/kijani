   "use server";

   import { revalidatePath } from "next/cache";
   import { redirect } from "next/navigation";
   import { z } from "zod";
   import { db } from "@/lib/db";
   import { requireAdmin } from "@/lib/admin";
   import { deleteImageByUrl, isOurImage } from "@/lib/storage";

   const slideSchema = z.object({
     headline: z.string().trim().min(1, "Headline is required.").max(120, "Headline is too long."),
     subtext: z.string().trim().max(200, "Subtext is too long."),
     buttonLabel: z.string().trim().max(30, "Button label is too long."),
     buttonHref: z
       .string()
       .trim()
       .max(300)
       .refine((v) => !v || v.startsWith("/") || v.startsWith("https://"), "Button link must start with / or https://"),
   });

   type ParsedSlide =
     | { error: string }
     | {
         data: {
           headline: string;
           subtext: string | null;
           buttonLabel: string | null;
           buttonHref: string | null;
         };
       };

   function parseSlide(formData: FormData): ParsedSlide {
     const parsed = slideSchema.safeParse({
       headline: formData.get("headline") ?? "",
       subtext: formData.get("subtext") ?? "",
       buttonLabel: formData.get("buttonLabel") ?? "",
       buttonHref: formData.get("buttonHref") ?? "",
     });
     if (!parsed.success) return { error: parsed.error.issues[0].message };
     const d = parsed.data;
     if (!!d.buttonLabel !== !!d.buttonHref) {
       return { error: "Provide both a button label and a link, or neither." };
     }
     return {
       data: {
         headline: d.headline,
         subtext: d.subtext || null,
         buttonLabel: d.buttonLabel || null,
         buttonHref: d.buttonHref || null,
       },
     };
   }

   function fail(path: string, message: string): never {
     redirect(`${path}?error=${encodeURIComponent(message)}`);
   }

   function refresh() {
     revalidatePath("/");
     revalidatePath("/admin/hero");
   }

   export async function createSlide(formData: FormData) {
     await requireAdmin();
     const back = "/admin/hero/new";

     const parsed = parseSlide(formData);
     if ("error" in parsed) fail(back, parsed.error);

     const imagePath = String(formData.get("imagePath") ?? "").trim();
     if (!imagePath) fail(back, "Please upload an image and wait for it to finish.");
     if (!isOurImage(imagePath, "hero")) fail(back, "Invalid image. Please upload it again.");

     const last = await db.heroSlide.aggregate({ _max: { sortOrder: true } });
     await db.heroSlide.create({
       data: { ...parsed.data, imagePath, sortOrder: (last._max.sortOrder ?? -1) + 1 },
     });

     refresh();
     redirect("/admin/hero");
   }

   export async function updateSlide(id: string, formData: FormData) {
     await requireAdmin();
     const back = `/admin/hero/${id}`;

     const slide = await db.heroSlide.findUnique({ where: { id } });
     if (!slide) redirect("/admin/hero");

     const parsed = parseSlide(formData);
     if ("error" in parsed) fail(back, parsed.error);

     const imagePath = String(formData.get("imagePath") ?? "").trim() || slide.imagePath;
     if (imagePath !== slide.imagePath && !isOurImage(imagePath, "hero")) {
       fail(back, "Invalid image. Please upload it again.");
     }

     await db.heroSlide.update({ where: { id }, data: { ...parsed.data, imagePath } });
     if (imagePath !== slide.imagePath) await deleteImageByUrl(slide.imagePath);

     refresh();
     redirect("/admin/hero");
   }

   export async function toggleSlide(id: string) {
     await requireAdmin();
     const slide = await db.heroSlide.findUnique({ where: { id } });
     if (!slide) return;
     await db.heroSlide.update({ where: { id }, data: { isActive: !slide.isActive } });
     refresh();
   }

   export async function deleteSlide(id: string) {
     await requireAdmin();
     const slide = await db.heroSlide.findUnique({ where: { id } });
     if (!slide) return;
     await db.heroSlide.delete({ where: { id } });
     await deleteImageByUrl(slide.imagePath);
     refresh();
   }

   export async function moveSlide(id: string, direction: "up" | "down") {
     await requireAdmin();
     const slides = await db.heroSlide.findMany({
       orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
     });
     const i = slides.findIndex((s) => s.id === id);
     const j = direction === "up" ? i - 1 : i + 1;
     if (i < 0 || j < 0 || j >= slides.length) return;

     const reordered = [...slides];
     [reordered[i], reordered[j]] = [reordered[j], reordered[i]];
     await db.$transaction(
       reordered.map((s, index) =>
         db.heroSlide.update({ where: { id: s.id }, data: { sortOrder: index } })
       )
     );
     refresh();
   }