import ShopClient from "@/app/shop/ShopClient";
import { getCategories } from "@/lib/getCategories";
import { getProducts } from "@/lib/getProducts";

export const dynamic = "force-dynamic";
export default async function Page() {
  const products = await getProducts();
  const categories = await getCategories();
  return <ShopClient products={products} categories={categories} />;
}
