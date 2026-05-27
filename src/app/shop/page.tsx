import ShopClient from '@/app/shop/ShopClient'
import { getProducts } from "@/lib/getProducts";

export default async function Page() {
  const products = await getProducts();

  return <ShopClient products={products} />;
}
