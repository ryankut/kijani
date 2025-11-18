import Header from '@/components/header'
import Footer from '@/components/footer'
import { HaircareContent } from '@/components/haircare-content'

export const metadata = {
  title: 'Haircare - Luxora',
  description: 'Premium haircare products for healthy, beautiful hair',
}

export default function Haircare() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HaircareContent />
      <Footer />
    </main>
  )
}
