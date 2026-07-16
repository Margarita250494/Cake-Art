import { TProductList } from "@/utils/types";
import React from "react";

const ProductList = ({ products, onEdit, onDelete }: TProductList) => {
  return (
    <div className="flex flex-col  gap-3">
      {products.map((p) => (
        <div
          key={p.id}
          className="border p-3 flex gap-8 flex-col md:flex-row justify-between"
        >
          <div className="flex flex-col gap-2">
            <p className="font-bold">
              Title: <span className="font-light">{p.title}</span>
            </p>
            <p className="font-bold">
              Price: <span className="font-light">{p.price}</span>
            </p>
            <p className="font-bold">
              Description: <span className="font-light">{p.description}</span>
            </p>
            <p className="font-bold truncate">
              Image: <span className="font-light">{p.imageUrl}</span>
            </p>
            <p className="font-bold">
              Category: <span className="font-light">{p.category}</span>
            </p>
          </div>

          <div className="flex justify-between gap-2">
            <button
              onClick={() => {
                onEdit(p);
              }}
              className="text-blue-500"
            >
              Edit
            </button>

            <button
              onClick={() => {
                if (!confirm("Delete this product?")) return;
                void onDelete(p.id);
              }}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
