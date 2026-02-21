'use client'
import CategoryButtons from '@/components/shop/CategoryButtons'
import HowToOrder from '@/components/shop/HowToOrder'
import ShopCard from '@/components/shop/ShopCard'
import { useFilteredCards } from '@/hooks/useFilteredCards'
import { useSwitchingAnimation } from '@/hooks/useSwitchingAnimation'
import clsx from 'clsx'
import { useState } from 'react'

const ShopPage = () => {
  const {active, setActive, items} = useFilteredCards()
  const {visible, animate} = useSwitchingAnimation()

  const [openCardId, setOpenCardId] = useState<string | null>(null)

  const handleCardClick = (id: string) => {
    setOpenCardId(prev => prev === id ? null : id)
  }
  const handleCategoryChange = (value: typeof active) => {
    if (value === active) return
    setOpenCardId(null)
    animate(() => setActive(value))
  }
  return <main className="p-6 w-full flex-1 flex flex-col gap-4 justify-center items-center">
    <ul className="flex flex-row w-full gap-4 justify-center sm:hidden">
      {items.map((item) => {
        if (item.type === 'button') {
          return (
            <CategoryButtons
              key={item.cat.label}
              cat={item.cat}
              active={active}
              isMobile
              onCategoryChange={handleCategoryChange}
            />
          )
        }
      })}
    </ul>

    <ul
      style={{transition: 'opacity 250ms ease, transform 250ms ease'}}
      className={clsx(
        'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[30vw] gap-3',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      )}
    >
      {items.map((item) => {
        if (item.type === 'button') {
          return (
            <CategoryButtons
              key={item.cat.label}
              cat={item.cat}
              active={active}
              isMobile={false}
              onCategoryChange={handleCategoryChange}
            />
          )
        }

        const {data, index} = item
        return (
          <li
            key={data.id}
            className={clsx(
              'relative overflow-hidden m-0',
              index % 2 === 0 ? 'row-span-3 sm:row-span-1' : 'row-span-3 sm:row-span-2'
            )}
          >
            <ShopCard
              description={data.description}
              image={data.image}
              title={data.title}
              isOpen={openCardId === data.id}
              onClick={() => handleCardClick(data.id)}
            />
          </li>
        )
      })}
      <li className="w-full h-full flex justify-center items-center">
        <HowToOrder />
      </li>
    </ul>
  </main>
};
export default ShopPage;
