import { ShopCategory } from '@/components/shop/utils/types'

export const CATEGORIES = [
  {label: 'All', value: null},
  {label: 'Sweets', value: ShopCategory.SWEETS},
  {label: 'Non-Sweets', value: ShopCategory.NON_SWEETS},
  {label: 'Cakes', value: ShopCategory.CAKES}
]

// Fixed random insertion indices so they don't shift on re-render
export const BUTTON_POSITIONS = [1, 4, 7, 11] // tweak to taste