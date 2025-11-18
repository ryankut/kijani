'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { ALL_PRODUCTS } from '@/lib/products'

export default function Makeup() {
  const makeupProducts = ALL_PRODUCTS.filter(p => p.category === 'makeup')

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-secondary/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Makeup Collection</h1>
          <p className="text-muted-foreground">Professional makeup for flawless beauty</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {makeupProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="relative bg-muted rounded-lg overflow-hidden mb-4 aspect-square">
                  <img 
                    src={product.image || "/placeholder.svg"} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                  />

                  <button 
                    onClick={(e) => e.preventDefault()}
                    className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="font-semibold text-foreground">{product.name}</h3>

                <p className="text-lg font-bold text-primary mt-2">
                  ${product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
