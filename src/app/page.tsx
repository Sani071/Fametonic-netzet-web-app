import MainLayout from '@/components/layout/MainLayout';
import Banner from '@/components/layout/Banner';

export default function Home() {
  return (
    <MainLayout showNavbar={false}>
      <Banner />
    </MainLayout>
  );
}
