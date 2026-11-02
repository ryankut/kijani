"use client";

import { useState } from "react";
import ImageUpload from "../image-upload";

type Variant = { id?: string; size: string; price: number; stock: number; sku: string | null };
type ProductImage = { url: string; alt: string | null };
type Tag = { id: string; name: string; type: string };
type Category = { id: string; name: string; parentId: string | null };

type Props = {
  action: (formData: FormData) => void | Promise<void>;
  submitLabel: string;
  tags: Tag[];
  categories: Category[];
  product?: {
    name: string;
    slug: string;
    shortDescription: string;
    longDescription: string;
    price: number;
    compareAtPrice: number | null;
    ingredients: string | null;
    howToUse: string | null;
    benefits: string | null;
    badges: string[];
    isActive: boolean;
    variants: Variant[];
    images: ProductImage[];
    tagIds: string[];
    primaryCategoryId: string | null;
    alsoInCategoryIds: string[];
  };
  error?: string;
};

const field =
  "w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary";
const label = "block text-sm font-medium text-foreground mb-1";

export default function ProductForm({
  action,
  submitLabel,
  tags,
  categories,
  product,
  error,
}: Props) {
  const [variantRows, setVariantRows] = useState<Variant[]>(
    product?.variants.length ? product.variants : [{ size: "", price: 1000, stock: 0, sku: "" }]
  );
  const [imageRows, setImageRows] = useState<ProductImage[]>(
    product?.images.length ? product.images : [{ url: "", alt: "" }]
  );

  const parents = categories.filter((c) => !c.parentId);
  const childrenByParent = new Map<string, Category[]>();
  for (const c of categories) {
    if (c.parentId) {
      const arr = childrenByParent.get(c.parentId) ?? [];
      arr.push(c);
      childrenByParent.set(c.parentId, arr);
    }
  }

  const addVariant = () =>
    setVariantRows([...variantRows, { size: "", price: variantRows[0]?.price ?? 1000, stock: 0, sku: "" }]);
  const removeVariant = (i: number) => setVariantRows(variantRows.filter((_, idx) => idx !== i));

  const addImage = () => setImageRows([...imageRows, { url: "", alt: "" }]);
  const removeImage = (i: number) => setImageRows(imageRows.filter((_, idx) => idx !== i));

  return (
    <form action={action} className="bg-card border border-border rounded-2xl p-6 space-y-6 max-w-4xl">
      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label} htmlFor="name">Name *</label>
          <input id="name" name="name" required maxLength={120} defaultValue={product?.name} className={field} />
        </div>
        <div>
          <label className={label} htmlFor="slug">Slug *</label>
          <input id="slug" name="slug" required maxLength={120} defaultValue={product?.slug} className={field} placeholder="vitamin-c-serum" />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="shortDescription">Short description *</label>
        <input id="shortDescription" name="shortDescription" required maxLength={300} defaultValue={product?.shortDescription} className={field} />
      </div>

      <div>
        <label className={label} htmlFor="longDescription">Long description *</label>
        <textarea id="longDescription" name="longDescription" required rows={4} defaultValue={product?.longDescription} className={field} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label} htmlFor="price">Base price (KES) *</label>
          <input id="price" name="price" type="number" min={0} required defaultValue={product?.price ?? 1000} className={field} />
          <p className="text-xs text-muted-foreground mt-1">Usually the first variant's price. Used as fallback display.</p>
        </div>
        <div>
          <label className={label} htmlFor="compareAtPrice">Compare-at price (KES)</label>
          <input id="compareAtPrice" name="compareAtPrice" type="number" min={0} defaultValue={product?.compareAtPrice ?? ""} className={field} />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="badges">Badges (comma-separated)</label>
        <input id="badges" name="badges" defaultValue={product?.badges.join(", ") ?? ""} className={field} placeholder="New, Best Seller" />
      </div>

      <div>
        <label className={label} htmlFor="ingredients">Ingredients</label>
        <textarea id="ingredients" name="ingredients" rows={2} defaultValue={product?.ingredients ?? ""} className={field} />
      </div>

      <div>
        <label className={label} htmlFor="howToUse">How to use</label>
        <textarea id="howToUse" name="howToUse" rows={2} defaultValue={product?.howToUse ?? ""} className={field} />
      </div>

      <div>
        <label className={label} htmlFor="benefits">Benefits</label>
        <textarea id="benefits" name="benefits" rows={2} defaultValue={product?.benefits ?? ""} className={field} />
      </div>

      <div className="flex items-center gap-2">
        <input id="isActive" name="isActive" type="checkbox" defaultChecked={product?.isActive ?? true} />
        <label htmlFor="isActive" className="text-sm text-foreground">Visible on storefront</label>
      </div>

      {/* Variants */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-foreground">Variants *</p>
          <button type="button" onClick={addVariant} className="text-sm text-primary hover:underline">+ Add variant</button>
        </div>
        <div className="space-y-2">
          {variantRows.map((v, i) => (
            <div key={i} className="grid grid-cols-12 gap-2">
              <input name={`variants[${i}].size`} defaultValue={v.size} placeholder="250ml" className={`${field} col-span-4`} />
              <input name={`variants[${i}].price`} type="number" min={0} defaultValue={v.price} placeholder="Price" className={`${field} col-span-3`} />
              <input name={`variants[${i}].stock`} type="number" min={0} defaultValue={v.stock} placeholder="Stock" className={`${field} col-span-2`} />
              <input name={`variants[${i}].sku`} defaultValue={v.sku ?? ""} placeholder="SKU" className={`${field} col-span-2`} />
              <button type="button" onClick={() => removeVariant(i)} className="col-span-1 text-destructive">×</button>
            </div>
          ))}
        </div>
      </div>

      {/* Images */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-foreground">Images * (up to 5)</p>
          {imageRows.length < 5 && (
            <button type="button" onClick={addImage} className="text-sm text-primary hover:underline">+ Add image</button>
          )}
        </div>
        <div className="space-y-3">
          {imageRows.map((img, i) => (
            <div key={i} className="border border-border rounded-lg p-3">
              <ImageUpload
                name={`images[${i}].url`}
                folder="products"
                label={`Image ${i + 1}`}
                initialUrl={img.url}
              />
              <input name={`images[${i}].alt`} defaultValue={img.alt ?? ""} placeholder="Alt text (optional)" className={`${field} mt-2`} />
              {imageRows.length > 1 && (
                <button type="button" onClick={() => removeImage(i)} className="text-xs text-destructive mt-1">Remove</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Primary category */}
      <div>
        <label className={label} htmlFor="primaryCategoryId">Primary category *</label>
        <select id="primaryCategoryId" name="primaryCategoryId" required defaultValue={product?.primaryCategoryId ?? ""} className={field}>
          <option value="">Choose…</option>
          {parents.map((p) => (
            <optgroup key={p.id} label={p.name}>
              <option value={p.id}>{p.name} (department)</option>
              {childrenByParent.get(p.id)?.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Also shown in */}
      <div>
        <p className={`${label} mb-2`}>Also shown in</p>
        <div className="grid sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto border border-border rounded-lg p-3">
          {parents.map((p) => (
            <div key={p.id}>
              <p className="text-xs font-semibold text-muted-foreground uppercase">{p.name}</p>
              {childrenByParent.get(p.id)?.map((c) => (
                <label key={c.id} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="alsoInCategoryIds" value={c.id} defaultChecked={product?.alsoInCategoryIds.includes(c.id)} />
                  {c.name}
                </label>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <p className={`${label} mb-2`}>Tags</p>
        <div className="grid sm:grid-cols-2 gap-2 border border-border rounded-lg p-3">
          {tags.length === 0 && <p className="text-xs text-muted-foreground">No tags yet. Create some in /admin/tags.</p>}
          {tags.map((t) => (
            <label key={t.id} className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="tagIds" value={t.id} defaultChecked={product?.tagIds.includes(t.id)} />
              {t.name} <span className="text-xs text-muted-foreground">({t.type})</span>
            </label>
          ))}
        </div>
      </div>

      <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold">
        {submitLabel}
      </button>
    </form>
  );
}