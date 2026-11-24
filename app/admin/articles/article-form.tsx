import ImageUpload from "../image-upload";

type Category = { id: string; name: string; parentId: string | null };

type Props = {
  action: (formData: FormData) => void | Promise<void>;
  submitLabel: string;
  categories: Category[];
  error?: string;
  article?: {
    title: string;
    subtitle: string;
    slug: string;
    intro: string;
    authorName: string | null;
    categoryId: string;
    status: "DRAFT" | "PUBLISHED";
    coverImage: string;
  };
};

const field =
  "w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary";
const label = "block text-sm font-medium text-foreground mb-1";

export default function ArticleForm({ action, submitLabel, categories, error, article }: Props) {
  const parents = categories.filter((c) => !c.parentId);
  const childrenOf = (id: string) => categories.filter((c) => c.parentId === id);

  return (
    <form action={action} className="bg-card border border-border rounded-2xl p-6 space-y-4 max-w-3xl">
      {error && <p className="text-sm text-destructive">{error}</p>}

      <div>
        <label className={label} htmlFor="title">Title *</label>
        <input id="title" name="title" required maxLength={120} defaultValue={article?.title} className={field} />
      </div>

      <div>
        <label className={label} htmlFor="subtitle">Subtitle *</label>
        <input id="subtitle" name="subtitle" required maxLength={200} defaultValue={article?.subtitle} className={field} />
      </div>

      <div>
        <label className={label} htmlFor="slug">Slug</label>
        <input id="slug" name="slug" maxLength={120} defaultValue={article?.slug} className={field} placeholder="how-to-pick-a-hair-oil" />
        <p className="text-xs text-muted-foreground mt-1">Leave empty to create it from the title.</p>
      </div>

      <div>
        <label className={label} htmlFor="intro">Intro paragraph *</label>
        <textarea id="intro" name="intro" required rows={7} maxLength={3000} defaultValue={article?.intro} className={field} />
        <p className="text-xs text-muted-foreground mt-1">Shown right under the hero on the article page. Keep it short and informative.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label} htmlFor="authorName">Author</label>
          <input id="authorName" name="authorName" maxLength={80} defaultValue={article?.authorName ?? ""} className={field} />
        </div>
        <div>
          <label className={label} htmlFor="status">Status</label>
          <select id="status" name="status" defaultValue={article?.status ?? "DRAFT"} className={field}>
            <option value="DRAFT">Draft (not visible)</option>
            <option value="PUBLISHED">Published</option>
          </select>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="categoryId">Category * (decides the related products)</label>
        <select id="categoryId" name="categoryId" required defaultValue={article?.categoryId ?? ""} className={field}>
          <option value="">Choose…</option>
          {parents.map((p) => (
            <optgroup key={p.id} label={p.name}>
              <option value={p.id}>{p.name} (whole department)</option>
              {childrenOf(p.id).map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <ImageUpload
        name="coverImage"
        folder="articles"
        label={article ? "Cover image (choose a file only to replace it)" : "Cover image *"}
        initialUrl={article?.coverImage}
        hint="Used on the article page and the homepage banner. Use a wide image (about 1920×900). The title sits on the left, so keep the subject on the right."
      />

      <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold">
        {submitLabel}
      </button>
    </form>
  );
}