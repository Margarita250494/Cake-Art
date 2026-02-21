export enum ShopCategory {
  SWEETS = 'SWEETS',
  NON_SWEETS = 'NON_SWEETS',
  CAKES = 'CAKES',
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