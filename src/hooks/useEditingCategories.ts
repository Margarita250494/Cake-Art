import { UpdateCategory } from "@/utils/types";
import { useState } from "react";

export const useEditingCategories = (handleUpdate: UpdateCategory) => {
  const [editingID, setEditingID] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");

  const handleCancelEdit = () => {
    setEditingID(null);
    setEditingName("");
  };
  const handleSaveEdit = async (id: string) => {
    if (!editingName.trim()) return;
    await handleUpdate(id, editingName);
    handleCancelEdit();
  };

  const handleStartEdit = (id: string, name: string) => {
    setEditingID(id);
    setEditingName(name);
  };

  return {
    editingID,
    editingName,
    setEditingName,
    handleStartEdit,
    handleSaveEdit,
    handleCancelEdit,
  };
};
