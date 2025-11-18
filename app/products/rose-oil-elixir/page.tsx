'use client'

import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function RoseOilElixirPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/" className="text-primary hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-muted rounded-lg h-96" />
          
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Rose Oil Elixir</h1>
            <p className="text-xl text-muted-foreground mb-6">$56.00</p>
            
            <p className="text-foreground mb-6">
              Harness the natural beauty of rose oil with our luxurious Rose Oil Elixir. Perfect for achieving radiant, glowing skin with the power of nature.
            </p>
            
            <ul className="list-disc list-inside text-foreground mb-8 space-y-2">
              <li>100% natural rose oil</li>
              <li>Cold-pressed extraction</li>
              <li>Rich in antioxidants</li>
              <li>Suitable for all skin types</li>
              <li>Promotes radiant glow</li>
            </ul>
            
            <Button className="bg-primary text-primary-foreground px-8 py-3 text-lg rounded-sm">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
