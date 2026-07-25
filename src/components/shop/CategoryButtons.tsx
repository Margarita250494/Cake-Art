import ButtonCard from "@/components/shop/ButtonCard";
import { TCategoryButtons } from "@/utils/types";
import clsx from "clsx";

const CategoryButtons = ({
  cat,
  active,
  onCategoryChange,
  isMobile,
}: TCategoryButtons) => {
  return (
    <li
      className={clsx(
        " relative overflow-hidden m-0 row-span-1",
        !isMobile && "hidden sm:flex",
      )}
    >
      <ButtonCard
        label={cat.name}
        active={active?.id === cat.id}
        onClick={() => onCategoryChange(cat)}
      />
    </li>
  );
};
export default CategoryButtons;
