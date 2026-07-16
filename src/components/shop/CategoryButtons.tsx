import ButtonCard from "@/components/shop/ButtonCard";
import { TCategoryButtons } from "@/utils/types";
import clsx from "clsx";

const CategoryButtons = ({
  cat,
  active,
  className,
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
        label={cat.label}
        active={active === cat.value}
        onClick={() => onCategoryChange(cat.value)}
      />
    </li>
  );
};
export default CategoryButtons;
