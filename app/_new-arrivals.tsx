import ProductRow from "@/components/store/product-row";
import { getProductCards } from "@/lib/catalog";

export default async function NewArrivals() {
  const products = await getProductCards({ take: 4 });
  return <ProductRow title="New Arrivals" href="/shop" products={products} />;
}
