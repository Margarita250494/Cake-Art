import AdminMainButton from "@/components/buttons/AdminMainButton";
import Input from "@/components/form/Input";
import InputImage from "@/components/form/InputImage";
import { TProductForm } from "@/utils/types";
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
      <Input
        classNameLabel="sr-only"
        label="Category"
        id="category"
        type="text"
        value={form.category}
        onChange={onChange}
      />
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
