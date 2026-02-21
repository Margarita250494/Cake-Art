import { BUTTON_POSITIONS, CATEGORIES } from '@/components/shop/utils/constants'
import { dataShop } from '@/components/shop/utils/data'
import { ShopCategory } from '@/components/shop/utils/types'
import { useMemo, useState } from 'react'

export const useFilteredCards = () => {
  const [active, setActive] = useState<ShopCategory | null>(null)

  const filtered = useMemo(
    () => active ? dataShop.filter(d => d.category === active) : dataShop,
    [active]
  )

  const items = useMemo(() => {
    const result: Array<{
      type: 'card';
      data: typeof filtered[0];
      index: number
    } | { type: 'button'; cat: typeof CATEGORIES[0]; id: string }> = []

    let cardIndex = 0
    let btnIndex = 0
    const positions = new Set(BUTTON_POSITIONS)

    for (let i = 0; i < filtered.length + CATEGORIES.length; i++) {
      if (positions.has(i) && btnIndex < CATEGORIES.length) {
        result.push({
          type: 'button',
          cat: CATEGORIES[btnIndex],
          id: `btn-${btnIndex}`
        })
        btnIndex++
      } else if (cardIndex < filtered.length) {
        result.push({type: 'card', data: filtered[cardIndex], index: cardIndex})
        cardIndex++
      }
    }

    while (btnIndex < CATEGORIES.length) {
      result.push({
        type: 'button',
        cat: CATEGORIES[btnIndex],
        id: `btn-${btnIndex}`
      })
      btnIndex++
    }

    return result
  }, [filtered])

  return {active, setActive, items}
}