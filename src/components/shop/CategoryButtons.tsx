import ButtonCard from '@/components/shop/ButtonCard'
import { CATEGORIES } from '@/components/shop/utils/constants'
import { ShopCategory } from '@/components/shop/utils/types'
import clsx from 'clsx'


type TCategoryButtons = {
  cat: typeof CATEGORIES[0]
  active: ShopCategory | null
  className?: string
  onCategoryChange: (value: ShopCategory | null) => void
  isMobile: boolean
};
const CategoryButtons = ({
                           cat,
                           active,
                           className,
                           onCategoryChange,
                           isMobile
                         }: TCategoryButtons) => {
  return (
    <li
      className={clsx(" relative overflow-hidden m-0 row-span-1", !isMobile && 'hidden sm:flex')}
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
