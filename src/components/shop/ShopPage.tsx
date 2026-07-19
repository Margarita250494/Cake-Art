"use client";
import CategoryButtons from "@/components/shop/CategoryButtons";
import HowToOrder from "@/components/shop/HowToOrder";
import ShopCard from "@/components/shop/ShopCard";
import { useShopCard } from "@/hooks/useShopCard";
import { Shop } from "@/utils/types";
import clsx from "clsx";

const ShopPage = ({ products }: Shop) => {
  const {
    handleCardClick,
    handleCategoryChange,
    openCardId,
    items,
    visible,
    active,
  } = useShopCard(products);
  return (
    <main className="p-4 md:p-6 w-full flex-1 flex flex-col gap-4 justify-center items-center">
      <ul className="flex flex-row w-full gap-3 justify-between sm:hidden">
        {items.map((item) => {
          if (item.type === "button") {
            return (
              <CategoryButtons
                key={item.cat.label}
                cat={item.cat}
                active={active}
                isMobile
                onCategoryChange={handleCategoryChange}
              />
            );
          }
        })}
      </ul>

      <ul
        style={{ transition: "opacity 250ms ease, transform 250ms ease" }}
        className={clsx(
          "w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[30vw] gap-3",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        )}
      >
        {items.map((item) => {
          if (item.type === "button") {
            return (
              <CategoryButtons
                key={item.cat.label}
                cat={item.cat}
                active={active}
                isMobile={false}
                onCategoryChange={handleCategoryChange}
              />
            );
          }

          const { data, index } = item;
          return (
            <li
              key={data.id}
              className={clsx(
                "relative overflow-hidden m-0 @container",
                index % 2 === 0
                  ? "row-span-3 sm:row-span-1"
                  : "row-span-3 sm:row-span-2",
              )}
            >
              <ShopCard
                description={data.description}
                image={data.imageUrl}
                title={data.title}
                isOpen={openCardId === data.id}
                onClick={() => handleCardClick(data.id)}
                price={data.price}
              />
            </li>
          );
        })}
        <li className="w-full h-full flex justify-center items-center">
          <HowToOrder />
        </li>
      </ul>
    </main>
  );
};
export default ShopPage;
