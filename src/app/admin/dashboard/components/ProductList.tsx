import { ProductAdminCard } from "@/app/admin/dashboard/components/ProductAdminCard";
import { TProductList } from "@/utils/types";
import React from "react";

const ProductList = ({ products, onEdit, onDelete }: TProductList) => {
  return (
    <div className="flex flex-col  gap-3">
      {products.map((p) => (
        <ProductAdminCard
          key={p.id}
          product={p}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
export default ProductList;
