'use client'

import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function EyeCreamCollectionPage() {
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Eye Cream Collection</h1>
            <p className="text-xl text-muted-foreground mb-6">$52.00</p>
            
            <p className="text-foreground mb-6">
              Rejuvenate and refresh tired eyes with our comprehensive Eye Cream Collection. Specially formulated to target fine lines, dark circles, and puffiness for a more youthful appearance.
            </p>
            
            <ul className="list-disc list-inside text-foreground mb-8 space-y-2">
              <li>Reduces dark circles and puffiness</li>
              <li>Minimizes fine lines and wrinkles</li>
              <li>Fragile skin compatible</li>
              <li>Intensive moisturization</li>
              <li>Clinically proven results</li>
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
