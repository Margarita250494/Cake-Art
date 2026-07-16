import { TProductForm } from "@/utils/types";
import React from "react";

const ProductForm = ({ form, editing, onChange, onSubmit }: TProductForm) => {
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
        name="imageUrl"
        placeholder="Image URL"
        value={form.imageUrl}
        onChange={onChange}
        className="border border-gray focus:outline-0 py-1 px-1"
      />
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

      <button type="submit" className="bg-black text-white p-2">
        {editing ? "Update product" : "Create product"}
      </button>
    </form>
  );
};
export default ProductForm;
