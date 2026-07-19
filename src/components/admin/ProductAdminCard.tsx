import { ProductAdminCardProps } from "@/utils/types";
import Image from "next/image";
import React from "react";

export const ProductAdminCard = ({
  product,
  onEdit,
  onDelete,
}: ProductAdminCardProps) => {
  return (
    <div className="border border-gray/40 p-3 flex gap-8 flex-col w-full max-w-110">
      <div className="flex flex-col gap-2 font-bold text-[20px]">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={200}
          height={100}
          className="object-cover object-center w-full h-full max-h-85"
        />
        <h6>
          Title: <span className="font-light">{product.title}</span>
        </h6>
        <span>
          Price: <span className="font-light">{product.price}</span>
        </span>
        <p>
          Description: <span className="font-light">{product.description}</span>
        </p>

        <span>
          Category: <span className="font-light">{product.category}</span>
        </span>
      </div>
      <div className="flex justify-between gap-2 mt-auto">
        <button
          onClick={() => onEdit(product)}
          className="cursor-pointer bg-black text-white p-2 duration-200 hover:bg-white hover:text-black"
        >
          Edit
        </button>

        <button
          onClick={() => {
            if (!confirm("Delete this product?")) return;
            void onDelete(product.id);
          }}
          className="cursor-pointer bg-white text-black p-2 duration-200 hover:bg-black hover:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
