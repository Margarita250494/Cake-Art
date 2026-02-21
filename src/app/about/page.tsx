import dynamic from 'next/dynamic'

const AboutPage = dynamic(() => import('@/components/AboutPage'), {
  loading: () => <p>Loading...</p>
})
const Page = () => {
  return <AboutPage />;
};
export default Page;
