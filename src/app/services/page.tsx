import dynamic from 'next/dynamic'

const ServicesPage = dynamic(() => import('@/components/services/ServicesPage'), {
  loading: () => <p>Loading...</p>
})

export default function Page() {
  return <ServicesPage />;
}