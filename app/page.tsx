import Header from '@/components/header';
import Hero from './_hero';
import CategorySection from './_categories';
import NewArrivals from './_new-arrivals';
import DepartmentRows from './_department-rows';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategorySection />
      <NewArrivals />
      <DepartmentRows />
      <Footer />
    </main>
  );
}