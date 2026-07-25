import AdminMainButton from "@/components/buttons/AdminMainButton";
import Input from "@/components/form/Input";
import InputImage from "@/components/form/InputImage";
import { Category, TProductForm } from "@/utils/types";
import React, { useEffect, useState } from "react";

const ProductForm = ({
  form,
  editing,
  onChange,
  onSubmit,
  handleImageUpload,
  uploading,
}: TProductForm) => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("/api/categories");
      const data = await response.json();

      setCategories(data);
    }
    fetchCategories();
  }, []);
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 text-[18px]">
      <Input
        label="Title"
        id="title"
        type="text"
        value={form.title}
        onChange={onChange}
        classNameLabel="sr-only"
      />
      <Input
        classNameLabel="sr-only"
        label="Description"
        id="description"
        type="text"
        value={form.description}
        onChange={onChange}
      />

      <InputImage
        handleImageUpload={handleImageUpload}
        imageUrl={form.imageUrl}
      />

      <select
        name="categoryId"
        value={form.categoryId}
        onChange={onChange}
        className="border border-gray/30 py-1 px-1"
      >
        <option value="">Select category</option>

        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <Input
        classNameLabel="sr-only"
        label="Price"
        id="price"
        type="number"
        value={form.price}
        onChange={onChange}
      />
      <AdminMainButton
        disabled={uploading}
        typeButton="submit"
        labelButton={editing ? "Update product" : "Create product"}
      />
    </form>
  );
};
export default ProductForm;
