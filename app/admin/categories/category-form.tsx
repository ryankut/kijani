import ImageUpload from "../image-upload";

type Category = {
  name: string;
  slug: string;
  description: string | null;
  imagePath: string | null;
  parentId: string | null;
};

type Props = {
  action: (formData: FormData) => void | Promise<void>;
  submitLabel: string;
  category?: Category;
  parentOptions: { id: string; name: string }[];
  error?: string;
};

const field =
  "w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary";
const label = "block text-sm font-medium text-foreground mb-1";

export default function CategoryForm({
  action,
  submitLabel,
  category,
  parentOptions,
  error,
}: Props) {
  return (
    <form action={action} className="bg-card border border-border rounded-2xl p-6 space-y-4 max-w-2xl">
      {error && <p className="text-sm text-destructive">{error}</p>}

      <div>
        <label className={label} htmlFor="name">Name *</label>
        <input
          id="name"
          name="name"
          required
          maxLength={80}
          defaultValue={category?.name}
          className={field}
        />
      </div>

      <div>
        <label className={label} htmlFor="slug">Slug *</label>
        <input
          id="slug"
          name="slug"
          required
          maxLength={80}
          defaultValue={category?.slug}
          className={field}
          placeholder="skin-care"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Used in the URL. Lowercase letters, numbers and hyphens only.
        </p>
      </div>

      <div>
        <label className={label} htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          maxLength={500}
          rows={3}
          defaultValue={category?.description ?? ""}
          className={field}
        />
      </div>

      <div>
        <label className={label} htmlFor="parentId">Parent category</label>
        <select
          id="parentId"
          name="parentId"
          defaultValue={category?.parentId ?? ""}
          className={field}
        >
          <option value="">(None — top level)</option>
          {parentOptions.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </div>

      <ImageUpload
        name="imagePath"
        folder="categories"
        label={category ? "Image (choose a file only to replace it)" : "Image"}
        initialUrl={category?.imagePath ?? ""}
        hint="Square image works best (aspect-square tile on the homepage)."
      />

      <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold">
        {submitLabel}
      </button>
    </form>
  );
}