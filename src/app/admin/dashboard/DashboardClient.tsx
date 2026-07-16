"use client";

import LogoutButton from "@/app/admin/dashboard/components/LogoutButton";
import ProductForm from "@/app/admin/dashboard/components/ProductForm";
import ProductList from "@/app/admin/dashboard/components/ProductList";
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
  } = useProducts();

  return (
    <div className="p-4 md:p-10 flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Admin Panel</h1>
        <LogoutButton />
      </div>

      <ProductForm
        form={form}
        editing={editing}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
