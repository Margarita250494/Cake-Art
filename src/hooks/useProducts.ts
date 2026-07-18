import {
  createProduct,
  deleteProduct,
  loadProducts,
  updateProduct,
  uploadImage,
} from "@/services/product.service";
import { initialProductForm } from "@/utils/constants";
import { Product } from "@/utils/types";
import React, { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState({ ...initialProductForm });
  const [uploading, setUploading] = useState(false);

  const fetchProducts = async () => {
    const data = await loadProducts();
    setProducts(data);
  };

  useEffect(() => {
    void fetchProducts();
  }, []);

  const resetForm = () => {
    setForm(initialProductForm);
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
    console.log("FORM BEFORE SAVE:", form);
    try {
      if (editing) {
        await updateProduct(editing.id, {
          ...form,
          price: Number(form.price),
        });
      } else {
        await createProduct({
          ...form,
          price: Number(form.price),
        });
      }
      await fetchProducts();
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
      await fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (product: Product) => {
    setEditing(product);
    setForm({
      title: product.title,
      description: product.description,
      imageUrl: product.imageUrl,
      imageId: product.imageId ?? "",
      category: product.category,
      price: String(product.price),
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert("Image size must be less than 10MB");
      return;
    }

    try {
      setUploading(true);

      const data = await uploadImage(file);

      setForm((prev) => ({
        ...prev,
        imageUrl: data.url,
        imageId: data.imageId,
      }));
    } finally {
      setUploading(false);
    }
  };

  return {
    products,
    handleEdit,
    handleDelete,
    handleSubmit,
    handleChange,
    form,
    editing,
    uploading,
    handleImageUpload,
  };
};
