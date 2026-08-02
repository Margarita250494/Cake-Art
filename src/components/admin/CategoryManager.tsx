import IconButton from "@/components/buttons/IconButton";
import { Cancel, Delete, Edit, Update } from "@/components/icons";
import { useEditingCategories } from "@/hooks/useEditingCategories";
import { useHandleCategories } from "@/hooks/useHandleCategories";
import { Category } from "@/utils/types";
import clsx from "clsx";
import React from "react";

const CategoryManager = ({
  categories,
  setCategories,
}: {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}) => {
  const {
    name,
    setName,
    handleSubmit,
    handleDelete,
    error,
    showError,
    handleUpdate,
  } = useHandleCategories(setCategories);
  const {
    editingID,
    editingName,
    setEditingName,
    handleStartEdit,
    handleSaveEdit,
    handleCancelEdit,
  } = useEditingCategories(handleUpdate);
  return (
    <section className="flex flex-col gap-4 border border-gray p-4 w-full">
      <h2 className="text-[26px]">Categories</h2>
      <div className="flex justify-between w-full items-center">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="New category"
            className="border border-gray px-2 py-1"
          />

          <button type="submit" className="border border-gray px-3">
            Add
          </button>
        </form>
        {error && (
          <p
            className={clsx(
              "text-red-500 transition-all duration-300",
              showError
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2",
            )}
          >
            {error}
          </p>
        )}
      </div>

      <ul className="flex flex-col gap-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className="text-[18px] border border-gray p-2 flex justify-between items-center h-[45px]"
          >
            {editingID === category.id ? (
              <input
                value={editingName}
                onChange={(e) => setEditingName(e.target.value)}
                className="w-full h-full caret-black outline-0"
              />
            ) : (
              <span className="">{category.name}</span>
            )}

            {editingID === category.id ? (
              <div className="flex gap-3 items-center">
                <IconButton
                  handleClick={() => handleSaveEdit(category.id)}
                  Icon={Update}
                />
                <IconButton handleClick={handleCancelEdit} Icon={Cancel} />
              </div>
            ) : (
              <div className="flex gap-3 items-center">
                <IconButton
                  handleClick={() =>
                    handleStartEdit(category.id, category.name)
                  }
                  Icon={Edit}
                />
                <IconButton
                  handleClick={() => handleDelete(category.id)}
                  Icon={Delete}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default CategoryManager;
