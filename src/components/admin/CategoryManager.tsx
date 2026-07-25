import { useHandleCategories } from "@/hooks/useHandleCategories";
import { Category } from "@/utils/types";
import React from "react";

const CategoryManager = ({
  categories,
  setCategories,
}: {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}) => {
  const { name, setName, handleSubmit, handleDelete, error, showError } =
    useHandleCategories(setCategories);
  return (
    <section className="flex flex-col gap-4 border border-gray p-4">
      <h2 className="text-xl">Categories</h2>
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
            className={`
      text-red-500
      transition-all
      duration-300
      ${showError ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
    `}
          >
            {error}
          </p>
        )}
      </div>

      <ul className="flex flex-col gap-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className="border border-gray p-2 flex justify-between items-center"
          >
            <span>{category.name}</span>

            <button
              type="button"
              onClick={() => handleDelete(category.id)}
              className="border border-gray px-3"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default CategoryManager;
