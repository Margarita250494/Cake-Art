import { Category } from "@/utils/types";
import React, { useState } from "react";

export const useHandleCategories = (
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>,
) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;

    const res = await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify({
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newCategory = await res.json();

    setCategories((prev) => [...prev, newCategory]);
  };

  const showErrorMessage = (message: string) => {
    setError(message);
    setShowError(true);

    setTimeout(() => {
      setShowError(false);

      setTimeout(() => {
        setError("");
      }, 300);
    }, 2700);
  };
  const handleDelete = async (id: string) => {
    const res = await fetch("/api/categories", {
      method: "DELETE",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      showErrorMessage(data.error);
      return;
    }

    setCategories((prev) => prev.filter((category) => category.id !== id));
  };

  const handleUpdate = async (
    id: string,
    name: string,
  ): Promise<Category | undefined> => {
    if (!name.trim()) return;
    const res = await fetch("/api/categories", {
      method: "PATCH",
      body: JSON.stringify({
        id,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      showErrorMessage(data.error);
      return;
    }

    setCategories((prev) =>
      prev.map((category) => (category.id === id ? data : category)),
    );

    return data;
  };
  return {
    name,
    handleSubmit,
    setName,
    handleDelete,
    error,
    showError,
    handleUpdate,
  };
};
