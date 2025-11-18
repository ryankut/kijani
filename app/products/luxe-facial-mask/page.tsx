'use client'

import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function LuxeFacialMaskPage() {
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Luxe Facial Mask</h1>
            <p className="text-xl text-muted-foreground mb-6">$48.00</p>
            
            <p className="text-foreground mb-6">
              Indulge in professional-grade hydration with our Luxe Facial Mask. This intensive treatment mask delivers nourishment and rejuvenation for visibly transformed skin.
            </p>
            
            <ul className="list-disc list-inside text-foreground mb-8 space-y-2">
              <li>Professional-grade formula</li>
              <li>Intensive hydration treatment</li>
              <li>Brightening and smoothing</li>
              <li>Single use packets</li>
              <li>Visible results in 15 minutes</li>
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
