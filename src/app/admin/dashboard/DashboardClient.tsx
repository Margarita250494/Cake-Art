"use client";

import LogoutButton from "@/components/admin/LogoutButton";
import ProductForm from "@/components/admin/ProductForm";
import ProductList from "@/components/admin/ProductList";
import { useProducts } from "@/hooks/useProducts";
import React from "react";

export default function DashboardClient() {
  const {
    products,
    handleEdit,
    handleDelete,
    handleSubmit,
    handleChange,
    form,
    editing,
    uploading,
    handleImageUpload,
  } = useProducts();

  return (
    <div className="p-4 md:p-10 flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-[32px]">Admin Panel</h1>
        <LogoutButton />
      </div>

      <ProductForm
        form={form}
        editing={editing}
        onChange={handleChange}
        onSubmit={handleSubmit}
        handleImageUpload={handleImageUpload}
        uploading={uploading}
      />
      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
