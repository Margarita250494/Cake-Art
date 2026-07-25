import { BUTTON_POSITIONS } from "@/utils/constants";
import { Category, Product } from "@/utils/types";
import { useMemo, useState } from "react";

export const useFilteredCards = (
  products: Product[],
  categories: Category[],
) => {
  const [active, setActive] = useState<Category | null>(null);

  const filtered = active
    ? products.filter(
        (product) =>
          product.categoryId !== null && product.categoryId === active.id,
      )
    : products;

  const items = useMemo(() => {
    const result: Array<
      | {
          type: "card";
          data: (typeof filtered)[0];
          index: number;
        }
      | { type: "button"; cat: Category; id: string }
    > = [];

    let cardIndex = 0;
    let btnIndex = 0;
    const positions = new Set(BUTTON_POSITIONS);

    for (let i = 0; i < filtered.length + categories.length; i++) {
      if (positions.has(i) && btnIndex < categories.length) {
        result.push({
          type: "button",
          cat: categories[btnIndex],
          id: `btn-${btnIndex}`,
        });
        btnIndex++;
      } else if (cardIndex < filtered.length) {
        result.push({
          type: "card",
          data: filtered[cardIndex],
          index: cardIndex,
        });
        cardIndex++;
      }
    }

    while (btnIndex < categories.length) {
      result.push({
        type: "button",
        cat: categories[btnIndex],
        id: `btn-${btnIndex}`,
      });
      btnIndex++;
    }

    return result;
  }, [filtered, categories]);

  return { active, setActive, items };
};
