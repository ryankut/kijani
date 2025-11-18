import Header from '@/components/header'
import Footer from '@/components/footer'
import { WellnessContent } from '@/components/wellness-content'

export const metadata = {
  title: 'Wellness - Luxora',
  description: 'Premium wellness and beauty supplements for holistic health',
}

export default function Wellness() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <WellnessContent />
      <Footer />
    </main>
  )
}
