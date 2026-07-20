import { CATEGORIES } from "@/utils/constants";
import React, { ChangeEventHandler } from "react";

export enum ShopCategory {
  SWEETS = "sweet",
  NON_SWEETS = "non-sweet",
  CAKES = "cakes",
}

export type TShopCard = {
  title?: string;
  description: string;
  image: string;
  onClick?: () => void;
  price: number;
};

export type TButtonCard = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export type TCategoryButtons = {
  cat: (typeof CATEGORIES)[0];
  active: ShopCategory | null;
  onCategoryChange: (value: ShopCategory | null) => void;
  isMobile: boolean;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageId?: string | null;
  category: string;
  price: number;
};

export type Shop = {
  products: Product[];
};

export type FormState = {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  price: string;
};

export type TProductForm = {
  form: FormState;
  editing: Product | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  uploading: boolean;
};

export type TProductList = {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => Promise<void>;
};

export type ProductAdminCardProps = {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => Promise<void>;
};

export type TInput = {
  label: string;
  classNameLabel?: string;
  id: string;
  type: string;
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> | undefined;
  classNameInput?: string;
  placeholder?: string;
};

export type TInputImage = {
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  imageUrl: string;
};

export type TAdminMainButton = {
  disabled: boolean;
  typeButton: "submit" | "reset" | "button" | undefined;
  labelButton: string;
  onClick?: () => Promise<void>;
};

export type NavigationType = {
  id: string;
  link?: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  image?: string;
};

export type TTransitionLink = {
  children: React.ReactNode;
  href: string;
  handleClose: () => void;
  className?: string;
};

export type TServiceCard = {
  title: string;
  description: string;
  image: string;
};
