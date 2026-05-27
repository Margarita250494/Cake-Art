import { CATEGORIES } from '@/utils/constants'

export enum ShopCategory {
  SWEETS = 'sweet',
  NON_SWEETS = 'non-sweet',
  CAKES = 'cakes',
}

export type ShopType = {
  id: string;
  title?: string;
  description: string;
  image: string;
  category: ShopCategory;

}

export type TShopCard = {
  title?: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export type TButtonCard = {
  label: string
  active: boolean
  onClick: () => void
}

export type TCategoryButtons = {
  cat: typeof CATEGORIES[0]
  active: ShopCategory | null
  className?: string
  onCategoryChange: (value: ShopCategory | null) => void
  isMobile: boolean
};

export type Product = {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  price: number
}

export type Shop = {
  products: Product[]
}