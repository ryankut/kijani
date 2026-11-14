import Image from "next/image";
import Link from "next/link";
import { formatKes } from "@/lib/format";
import type { ProductCardData } from "@/lib/catalog";

export default function ProductCard({ product }: { product: ProductCardData }) {
  const showCompare =
    !product.hasPriceRange &&
    product.compareAtPrice !== null &&
    product.compareAtPrice > product.price;

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden mb-3">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover group-hover:scale-105 transition duration-300"
        />
        {product.badges[0] && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {product.badges[0]}
          </span>
        )}
      </div>
      <h3 className="font-semibold text-foreground">{product.name}</h3>
      <p className="mt-1 font-bold text-primary">
        {product.hasPriceRange && <span className="text-sm font-normal text-muted-foreground">From </span>}
        {formatKes(product.price)}
        {showCompare && (
          <span className="ml-2 text-sm font-normal text-muted-foreground line-through">
            {formatKes(product.compareAtPrice!)}
          </span>
        )}
      </p>
    </Link>
  );
}
