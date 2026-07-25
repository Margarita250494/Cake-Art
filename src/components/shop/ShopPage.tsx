"use client";
import CategoryButtons from "@/components/shop/CategoryButtons";
import HowToOrder from "@/components/shop/HowToOrder";
import ShopCard from "@/components/shop/ShopCard";
import { useShopCard } from "@/hooks/useShopCard";
import { Shop } from "@/utils/types";
import clsx from "clsx";

const ShopPage = ({ products, categories }: Shop) => {
  const {
    handleCardClick,
    handleCategoryChange,
    openCardId,
    items,
    visible,
    active,
    hasProducts,
  } = useShopCard(products, categories);
  return (
    <main className="p-4 md:p-6 w-full flex-1 flex flex-col gap-6 justify-between sm:justify-center items-center">
      <ul className="flex flex-row flex-wrap items-center w-full gap-x-8 gap-y-3 justify-center sm:hidden">
        {items.map((item) => {
          if (item.type === "button") {
            return (
              <CategoryButtons
                key={item.cat.id}
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
          "w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[30vw] gap-3",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        )}
      >
        {items.map((item) => {
          if (item.type === "button") {
            return (
              <CategoryButtons
                key={item.cat.id}
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
        {!hasProducts && active && (
          <li className="col-span-full row-span-full flex items-center justify-center">
            <p className="text-xl text-center">
              In this category we don&#39;t have products yet
            </p>
          </li>
        )}
        <li className="w-full h-full hidden sm:flex justify-center items-center">
          <HowToOrder />
        </li>
      </ul>
      <div className="flex sm:hidden">
        <HowToOrder />
      </div>
    </main>
  );
};
export default ShopPage;
