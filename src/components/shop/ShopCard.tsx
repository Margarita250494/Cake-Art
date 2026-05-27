'use client'

import { TShopCard } from '@/utils/types'
import clsx from 'clsx'
import Image from 'next/image'

type Props = TShopCard & {
  isOpen: boolean
  onClick: () => void
}
const ShopCard = ({title, description, image, isOpen, onClick}: Props) => {

  return (
    <div
      className="w-full h-full relative duration-500 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={image}
        alt=""
        width={230}
        height={350}
        className={clsx("w-full h-full object-cover duration-500 ", isOpen ? 'opacity-0' : 'opacity-100')}
      />
      <div
        className={clsx("absolute inset-0 w-full h-full flex flex-col" +
          " gap-5 " +
          " justify-center items-center p-3 ", isOpen ? 'opacity-100' : 'opacity-0')}
      >
        <h5 className="shop-card-title text-center ">{title}</h5>
        <p className="shop-card-desc  text-center">{description}</p>
      </div>
    </div>
  );
};
export default ShopCard;
/*<h3>{title}</h3>*/