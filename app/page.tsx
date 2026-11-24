import Header from '@/components/header';
import Hero from './_hero';
import CategorySection from './_categories';
import NewArrivals from './_new-arrivals';
import LatestArticle from './_latest-article'
import DepartmentRows from './_department-rows';
import ConsultationBand from '@/components/store/consultation-band'
import Methodology from '@/components/store/methodology'
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategorySection />
      <LatestArticle />
      <NewArrivals />
      <DepartmentRows />
      <ConsultationBand />
      <Methodology />
      <Footer />
    </main>
  );
}