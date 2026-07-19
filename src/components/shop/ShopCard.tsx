"use client";

import { TShopCard } from "@/utils/types";
import clsx from "clsx";
import Image from "next/image";

type Props = TShopCard & {
  isOpen: boolean;
  onClick: () => void;
};
const ShopCard = ({
  title,
  description,
  image,
  isOpen,
  onClick,
  price,
}: Props) => {
  return (
    <div
      className={clsx(
        "w-full h-full relative duration-500 cursor-pointer",
        isOpen && "scale-[1.05]",
      )}
      onClick={onClick}
    >
      <Image
        src={image}
        alt={title ?? "Product image"}
        width={230}
        height={350}
        className={clsx(
          "w-full h-full  object-cover duration-500 ",
          isOpen ? "opacity-0" : "opacity-100",
        )}
      />
      <div
        className={clsx(
          "absolute inset-0 w-full h-full flex flex-col" +
            " gap-5 " +
            " justify-center items-center p-3 ",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      >
        <h5 className="shop-card-title text-center ">{title}</h5>
        <p className="shop-card-desc  text-center">{description}</p>
        {price !== 0 && (
          <p className="shop-card-desc  text-center">{price} Rub.</p>
        )}
      </div>
    </div>
  );
};
export default ShopCard;
