import { Product } from "@/utils/types";
import React, { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "",
    price: "",
  });

  const fetchProducts = async () => {
    const res = await fetch("/api/products");

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    setProducts(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchProducts();
  }, []);
  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      imageUrl: "",
      category: "",
      price: "",
    });

    setEditing(null);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editing) {
      await fetch("/api/products", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          id: editing.id,
          price: Number(form.price),
        }),
      });
    } else {
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
        }),
      });
    }

    await fetchProducts();

    resetForm();
  };
  const handleDelete = async (id: string) => {
    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    await fetchProducts();
  };
  const handleEdit = (product: Product) => {
    setEditing(product);
    setForm({
      title: product.title,
      description: product.description,
      imageUrl: product.imageUrl,
      category: product.category,
      price: String(product.price),
    });
  };

  return {
    products,
    handleEdit,
    handleDelete,
    handleSubmit,
    handleChange,
    form,
    editing,
  };
};
