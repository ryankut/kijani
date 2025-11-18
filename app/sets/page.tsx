import Header from '@/components/header'
import Footer from '@/components/footer'
import { SetsContent } from '@/components/sets-content'

export const metadata = {
  title: 'Sets - Luxora',
  description: 'Premium beauty sets and bundles for the perfect collection',
}

export default function Sets() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SetsContent />
      <Footer />
    </main>
  )
}
