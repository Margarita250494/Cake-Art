import { headerLinks } from '@/components/navigation/utils/headerLinks'

const HowToOrder = () => {
  return (
    <div className="w-full h-full flex gap-2 flex-col justify-center items-center">
      <h6 className="text-[18px] sm:text-[25px] text-center">To place an order, please write:</h6>
      <ul className="flex gap-1 items-center justify-center">
        {headerLinks.map(({id, icon, href}) => (
          <li
            key={id}
            className="w-10 h-10 flex justify-center items-center cursor-pointer"
          >
            <a href={href}>{icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HowToOrder;
