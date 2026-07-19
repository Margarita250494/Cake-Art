import ShopClient from "@/app/shop/ShopClient";
import { getProducts } from "@/lib/getProducts";

export const dynamic = "force-dynamic";
export default async function Page() {
  const products = await getProducts();
  return <ShopClient products={products} />;
}
