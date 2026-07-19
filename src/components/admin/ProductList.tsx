import { ProductAdminCard } from "@/components/admin/ProductAdminCard";
import { TProductList } from "@/utils/types";
import React from "react";

const ProductList = ({ products, onEdit, onDelete }: TProductList) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
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
