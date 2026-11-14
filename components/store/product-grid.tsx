import ProductCard from "./product-card";
import type { ProductCardData } from "@/lib/catalog";

export default function ProductGrid({
  products,
  emptyText = "No products here yet.",
}: {
  products: ProductCardData[];
  emptyText?: string;
}) {
  if (products.length === 0) {
    return <p className="text-muted-foreground text-center py-12">{emptyText}</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
