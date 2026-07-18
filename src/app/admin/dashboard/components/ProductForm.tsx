import { TProductForm } from "@/utils/types";
import Image from "next/image";
import React from "react";

const ProductForm = ({
  form,
  editing,
  onChange,
  onSubmit,
  handleImageUpload,
  uploading,
}: TProductForm) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={onChange}
        className="border border-gray focus:outline-0 py-1 px-1"
      />
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={onChange}
        className="border border-gray focus:outline-0 py-1 px-1"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="border border-gray focus:outline-0 py-1 px-1"
      />
      {form.imageUrl && (
        <Image
          src={form.imageUrl}
          alt="preview"
          className="w-40 h-40 object-cover"
          width={300}
          height={200}
        />
      )}
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={onChange}
        className="border border-gray focus:outline-0 py-1 px-1"
      />
      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={onChange}
        className="border border-gray focus:outline-0 py-1 px-1"
      />

      <button
        disabled={uploading}
        type="submit"
        className="bg-black text-white p-2"
      >
        {editing ? "Update product" : "Create product"}
      </button>
    </form>
  );
};
export default ProductForm;
