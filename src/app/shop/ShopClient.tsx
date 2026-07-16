"use client";

import { Shop } from "@/utils/types";
import dynamic from "next/dynamic";

const ShopPage = dynamic(() => import("@/components/shop/ShopPage"), {
  loading: () => <p>Loading...</p>,
});

export default function ShopClient({ products }: Shop) {
  return <ShopPage products={products} />;
}
