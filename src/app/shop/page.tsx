import ShopClient from "@/app/shop/ShopClient";
import { getProducts } from "@/lib/getProducts";

export default async function Page() {
  const products = await getProducts();
  console.log("SHOP PRODUCTS:", products);
  return <ShopClient products={products} />;
}
