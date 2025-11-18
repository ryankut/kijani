'use client'

import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function NightRenewalSerumPage() {
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Night Renewal Serum</h1>
            <p className="text-xl text-muted-foreground mb-6">$58.00</p>
            
            <p className="text-foreground mb-6">
              Experience intensive repair while you sleep with our Night Renewal Serum. Packed with advanced ingredients to rejuvenate your skin overnight for a refreshed morning appearance.
            </p>
            
            <ul className="list-disc list-inside text-foreground mb-8 space-y-2">
              <li>Intensive overnight repair</li>
              <li>Advanced anti-aging formula</li>
              <li>Stimulates cell renewal</li>
              <li>Rich and nourishing</li>
              <li>Wake up refreshed</li>
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
