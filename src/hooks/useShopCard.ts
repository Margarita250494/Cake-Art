import { useFilteredCards } from "@/hooks/useFilteredCards";
import { useSwitchingAnimation } from "@/hooks/useSwitchingAnimation";
import { Product } from "@/utils/types";
import { useState } from "react";

export const useShopCard = (products: Product[]) => {
  const { active, setActive, items } = useFilteredCards(products);
  const { visible, animate } = useSwitchingAnimation();
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };
  const handleCategoryChange = (value: typeof active) => {
    if (value === active) return;
    setOpenCardId(null);
    animate(() => setActive(value));
  };

  return {
    handleCardClick,
    handleCategoryChange,
    openCardId,
    items,
    visible,
    active,
  };
};
