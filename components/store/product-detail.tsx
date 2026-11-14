"use client";

import Image from "next/image";
import { useState } from "react";
import { formatKes } from "@/lib/format";

type Props = {
  name: string;
  shortDescription: string;
  images: { url: string; alt: string | null }[];
  variants: { id: string; size: string; price: number; stock: number }[];
  compareAtPrice: number | null;
  fallbackPrice: number;
  badges: string[];
};

export default function ProductDetail({
  name,
  shortDescription,
  images,
  variants,
  compareAtPrice,
  fallbackPrice,
  badges,
}: Props) {
  const gallery = images.length ? images : [{ url: "/placeholder.svg", alt: name }];
  const [imageIndex, setImageIndex] = useState(0);
  const [variantId, setVariantId] = useState(variants[0]?.id ?? "");
  const [quantity, setQuantity] = useState(1);
  const [notice, setNotice] = useState("");

  const variant = variants.find((v) => v.id === variantId) ?? variants[0];
  const price = variant?.price ?? fallbackPrice;
  const stock = variant?.stock ?? 0;
  const maxQty = Math.max(1, Math.min(stock, 10));
  const showCompare = compareAtPrice !== null && compareAtPrice > price;

  const chooseVariant = (id: string) => {
    setVariantId(id);
    setQuantity(1);
    setNotice("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-4">
        <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
          <Image
            src={gallery[imageIndex].url}
            alt={gallery[imageIndex].alt || name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        {gallery.length > 1 && (
          <div className="flex gap-3">
            {gallery.map((img, i) => (
              <button
                key={img.url + i}
                type="button"
                onClick={() => setImageIndex(i)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                  i === imageIndex ? "border-primary" : "border-border"
                }`}
                aria-label={`Show image ${i + 1}`}
              >
                <Image src={img.url} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div>
          {badges.length > 0 && (
            <div className="flex gap-2 mb-3">
              {badges.map((b) => (
                <span key={b} className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">{name}</h1>
          <p className="text-muted-foreground text-lg">{shortDescription}</p>
        </div>

        <div className="border-t border-b border-border py-5">
          <p className="text-3xl font-bold text-primary">
            {formatKes(price)}
            {showCompare && (
              <span className="ml-3 text-lg font-normal text-muted-foreground line-through">
                {formatKes(compareAtPrice!)}
              </span>
            )}
          </p>
          <p className={`text-sm mt-1 ${stock > 0 ? "text-primary" : "text-destructive"}`}>
            {stock > 0 ? "In stock" : "Out of stock"}
          </p>
        </div>

        {variants.length > 1 ? (
          <div>
            <p className="block text-sm font-semibold text-foreground mb-2">Size</p>
            <div className="flex flex-wrap gap-3">
              {variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => chooseVariant(v.id)}
                  className={`px-4 py-2 border rounded-lg transition ${
                    v.id === variantId ? "border-primary bg-primary/10" : "border-border hover:border-primary"
                  }`}
                >
                  {v.size}
                </button>
              ))}
            </div>
          </div>
        ) : (
          variant && <p className="text-sm text-muted-foreground">Size: {variant.size}</p>
        )}

        <div>
          <p className="block text-sm font-semibold text-foreground mb-2">Quantity</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 border border-border rounded-lg hover:bg-muted transition"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="text-lg font-semibold w-6 text-center">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(Math.min(maxQty, quantity + 1))}
              className="w-10 h-10 border border-border rounded-lg hover:bg-muted transition"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <button
            type="button"
            disabled={stock === 0}
            onClick={() => setNotice("Online ordering is opening soon. This button will work as soon as checkout is ready.")}
            className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold text-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add to cart
          </button>
          {notice && <p className="text-sm text-muted-foreground mt-3">{notice}</p>}
        </div>
      </div>
    </div>
  );
}
