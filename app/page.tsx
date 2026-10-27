import Header from '@/components/header'
import Hero from './_hero'
import CategorySection from './_categories'
import AutoCarouselSection from '@/components/auto-carousel-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <Hero />

      <CategorySection />

      <AutoCarouselSection title="Featured Products" />

      <Footer />
    </main>
  )
}