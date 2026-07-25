import { Category } from "@/utils/types";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    let ignore = false;

    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");

        if (!res.ok) {
          console.error("Failed to fetch categories");
          return;
        }

        const data = await res.json();

        if (!ignore) {
          setCategories(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    void fetchCategories();

    return () => {
      ignore = true;
    };
  }, []);

  return { categories, setCategories };
};
