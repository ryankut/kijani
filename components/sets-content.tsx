'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { ALL_PRODUCTS } from '@/lib/products'

export function SetsContent() {
  const setsProducts = ALL_PRODUCTS.filter(p => p.category === 'sets')

  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Beauty Sets</h1>
          <p className="text-muted-foreground">Curated bundles of our favorite products at special prices</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {setsProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative bg-muted rounded-lg overflow-hidden mb-4 aspect-square">
                    <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    <button className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="font-semibold text-foreground">{product.name}</h3>
                  <p className="text-lg font-bold text-primary mt-2">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
