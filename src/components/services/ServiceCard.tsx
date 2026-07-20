import { TServiceCard } from "@/utils/types";
import Image from "next/image";

const ServiceCard = ({ title, description, image }: TServiceCard) => {
  return (
    <li key={title} className="flex flex-col justify-center items-center gap-4">
      <div className="w-full justify-center items-center flex flex-col gap-2">
        <h6 className="text-[30px]">{title}</h6>
        <p className="text-center max-w-75 w-full h-full text-[20px]">
          {description}
        </p>
      </div>

      <div className="w-full h-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={200}
          height={400}
          className="w-full h-full scale-100 duration-500 hover:scale-[1.2]"
          priority
        />
      </div>
    </li>
  );
};
export default ServiceCard;
