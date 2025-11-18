import Header from '@/components/header'
import Footer from '@/components/footer'
import { FragranceContent } from '@/components/fragrance-content'

export const metadata = {
  title: 'Fragrance - Luxora',
  description: 'Discover luxury fragrances for every mood',
}

export default function Fragrance() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FragranceContent />
      <Footer />
    </main>
  )
}
