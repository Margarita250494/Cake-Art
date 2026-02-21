'use client'

import dynamic from 'next/dynamic'

const ShopPage = dynamic(() => import('@/components/ShopPage'), {
  loading: () => <p>Loading...</p>
})

export default function Page() {
  return <ShopPage />
}
