import Link from "next/link";
import ProductGrid from "./product-grid";
import type { ProductCardData } from "@/lib/catalog";

export default function ProductRow({
  title,
  href,
  products,
}: {
  title: string;
  href?: string;
  products: ProductCardData[];
}) {
  if (products.length === 0) return null;

  return (
    <section className="py-10 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          {href && (
            <Link href={href} className="text-sm font-semibold text-primary hover:underline">
              View all →
            </Link>
          )}
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
