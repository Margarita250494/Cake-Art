'use client'
import { TShopCard } from '@/components/shop/utils/types'
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
          " gap-5 md:gap-10" +
          " justify-center items-center p-6", isOpen ? 'opacity-100' : 'opacity-0')}
      >
        <h5 className="text-[30px] text-center leading-10">{title}</h5>
        <p className="text-[20px] leading-6.25 md:leading-10 text-center">{description}</p>
      </div>
    </div>
  );
};
export default ShopCard;
/*<h3>{title}</h3>*/