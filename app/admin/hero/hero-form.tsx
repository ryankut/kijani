   import ImageUpload from "../image-upload";

   type Slide = {
     headline: string;
     subtext: string | null;
     buttonLabel: string | null;
     buttonHref: string | null;
     imagePath: string;
   };

   type Props = {
     action: (formData: FormData) => void | Promise<void>;
     submitLabel: string;
     slide?: Slide;
     error?: string;
   };

   const field =
     "w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary";
   const label = "block text-sm font-medium text-foreground mb-1";

   const HERO_PAGE_OPTIONS = [
    { value: "", label: "(No button)" },
    { value: "/", label: "Home" },
    { value: "/skincare", label: "Skin Care" },
    { value: "/haircare", label: "Hair Care" },
    { value: "/babyproducts", label: "Baby Products" },
    { value: "/consultdermatologist", label: "Consult a Dermatologist" },
    { value: "/about", label: "About" },
    { value: "/careers", label: "Careers" },
  ];

   export default function HeroForm({ action, submitLabel, slide, error }: Props) {
     return (
       <form action={action} className="bg-card border border-border rounded-2xl p-6 space-y-4 max-w-2xl">
         {error && <p className="text-sm text-destructive">{error}</p>}

         <div>
           <label className={label} htmlFor="headline">Headline *</label>
           <input id="headline" name="headline" required maxLength={120} defaultValue={slide?.headline} className={field} />
         </div>

         <div>
           <label className={label} htmlFor="subtext">Subtext</label>
           <input id="subtext" name="subtext" maxLength={200} defaultValue={slide?.subtext ?? ""} className={field} />
         </div>

         <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={label} htmlFor="buttonLabel">Button label</label>
            <input id="buttonLabel" name="buttonLabel" maxLength={30} defaultValue={slide?.buttonLabel ?? ""} className={field} placeholder="Shop now" />
          </div>
          <div>
            <label className={label} htmlFor="buttonHref">Button page</label>
            <select id="buttonHref" name="buttonHref" defaultValue={slide?.buttonHref ?? ""} className={field}>
              {slide?.buttonHref && !HERO_PAGE_OPTIONS.some(o => o.value === slide.buttonHref) && (
                <option value={slide.buttonHref}>Current ({slide.buttonHref})</option>
              )}
              {HERO_PAGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

         <ImageUpload
           name="imagePath"
           folder="hero"
           label={slide ? "Image (choose a file only to replace it)" : "Image *"}
           initialUrl={slide?.imagePath}
           hint="Any size is fine: large photos are shrunk automatically. It is cropped to 16:6 on desktop and 16:9 on phones, so keep the subject in the centre."
         />

         <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold">
           {submitLabel}
         </button>
       </form>
     );
   }