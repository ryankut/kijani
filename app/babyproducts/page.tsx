import Header from '@/components/header'
import Footer from '@/components/footer'
import { BabyproductsContent } from '@/components/babyproducts-content'

export const metadata = {
  title: 'Baby Products - REHHA',
  description: 'Gentle, safe, and dermatologist-approved baby skincare and haircare products.',
}

export default function Babyproducts() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BabyproductsContent />
      <Footer />
    </main>
  )
}