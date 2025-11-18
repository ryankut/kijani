'use client'

import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function HydratingFaceSerumPage() {
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Hydrating Face Serum</h1>
            <p className="text-xl text-muted-foreground mb-6">$45.00</p>
            
            <p className="text-foreground mb-6">
              Experience the ultimate in skin hydration with our luxurious Hydrating Face Serum. Formulated with premium ingredients to deliver deep moisture and leave your skin glowing and radiant.
            </p>
            
            <ul className="list-disc list-inside text-foreground mb-8 space-y-2">
              <li>Deeply hydrating formula</li>
              <li>Suitable for all skin types</li>
              <li>Lightweight and fast-absorbing</li>
              <li>Contains natural antioxidants</li>
              <li>Dermatologist tested</li>
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
