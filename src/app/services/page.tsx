import dynamic from 'next/dynamic'

const ServicesPage = dynamic(() => import('@/components/ServicesPage'), {
  loading: () => <p>Loading...</p>
})

export default function Page() {
  return <ServicesPage />;
}