import { TButtonCard } from '@/app/shop/utils/types'
import clsx from 'clsx'

const ButtonCard = ({label, active, onClick}: TButtonCard) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'cursor-pointer scale-100 hover:scale-[1.2] w-full h-full flex items-center justify-center transition-all text-[20px] duration-500 font-medium tracking-wide  ',
        active
          ? 'text-gray pointer-events-none border-gray'
          : 'text-footer border-footer'
      )}
    >
      {label}
    </button>
  );
};
export default ButtonCard;
