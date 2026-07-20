import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/components/services/utils/services.data";
import HowToOrder from "@/components/shop/HowToOrder";

const ServicesPage = () => {
  return (
    <main className=" w-full h-full flex-1 flex flex-col gap-8 md:gap-14 justify-center items-center p-4 md:p-6">
      <ul className="justify-center  flex flex-wrap gap-10 md:gap-14">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </ul>

      <HowToOrder />
    </main>
  );
};
export default ServicesPage;
