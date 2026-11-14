import ProductRow from "@/components/store/product-row";
import { getDepartments, getProductCards, inCategories } from "@/lib/catalog";

export default async function DepartmentRows() {
  const departments = await getDepartments();
  const rows = await Promise.all(
    departments.map(async (d) => ({
      dept: d,
      products: await getProductCards({
        where: inCategories([d.id, ...d.children.map((c) => c.id)]),
        take: 4,
      }),
    }))
  );

  return (
    <>
      {rows.map(({ dept, products }) => (
        <ProductRow key={dept.id} title={dept.name} href={`/shop/${dept.slug}`} products={products} />
      ))}
    </>
  );
}
