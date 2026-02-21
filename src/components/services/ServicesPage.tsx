import { services } from '@/components/services/utils/services.data'
import HowToOrder from '@/components/shop/HowToOrder'
import Image from 'next/image'


const ServicesPage = () => {
  return (
    <main className="w-full h-full flex-1 flex flex-col gap-8 md:gap-14 justify-center items-center p-6">

      <div>
        <ul className="justify-center flex flex-wrap gap-10 md:gap-14">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col justify-center items-center gap-4"
            >
              <div className="w-full justify-center items-center flex flex-col gap-2">
                <h6 className="text-[30px]">{service.title}</h6>
                <p className="text-center max-w-75 w-full h-full text-[20px]">{service.description}</p>

              </div>

              <div className="w-full h-full max-w-75 max-h-125 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={400}
                  className="w-full h-full scale-100 duration-500 hover:scale-[1.2]"
                />
              </div>

            </li>
          ))}
        </ul>
      </div>

      <HowToOrder />

    </main>
  );
};
export default ServicesPage;
