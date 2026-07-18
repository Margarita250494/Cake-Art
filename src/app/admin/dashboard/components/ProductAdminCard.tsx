import { ProductAdminCardProps } from "@/utils/types";
import React from "react";

export const ProductAdminCard = ({
  product,
  onEdit,
  onDelete,
}: ProductAdminCardProps) => {
  return (
    <div className="border p-3 flex gap-8 flex-col md:flex-row justify-between">
      <div className="flex flex-col gap-2">
        <p className="font-bold">
          Title: <span className="font-light">{product.title}</span>
        </p>
        <p className="font-bold">
          Price: <span className="font-light">{product.price}</span>
        </p>
        <p className="font-bold">
          Description: <span className="font-light">{product.description}</span>
        </p>
        <p className="font-bold truncate">
          Image: <span className="font-light">{product.imageUrl}</span>
        </p>
        <p className="font-bold">
          Category: <span className="font-light">{product.category}</span>
        </p>
      </div>
      <div className="flex justify-between gap-2">
        <button onClick={() => onEdit(product)} className="text-blue-500">
          Edit
        </button>

        <button
          onClick={() => {
            if (!confirm("Delete this product?")) return;
            void onDelete(product.id);
          }}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
