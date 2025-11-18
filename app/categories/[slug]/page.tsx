'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ALL_PRODUCTS } from '@/lib/products'
import { ShoppingCart } from 'lucide-react'

// Map category slugs to product categories
const categoryMap: Record<string, { name: string; category: string }> = {
  'skincare-essentials': { name: 'Skincare Essentials', category: 'skincare' },
  'luxury-collections': { name: 'Luxury Collections', category: 'sets' },
  'trending-skincare': { name: 'Trending Skincare', category: 'skincare' },
  'makeup-must-haves': { name: 'Makeup Must-Haves', category: 'makeup' },
  'best-sellers': { name: 'Best Sellers', category: 'skincare' },
  'sale-items': { name: 'Sale Items', category: 'makeup' },
  'gift-sets': { name: 'Gift Sets', category: 'sets' },
}

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const categoryInfo = categoryMap[slug]

  if (!categoryInfo) {
    return (
      <div className="py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <Link href="/" className="text-primary hover:underline">
          Back to Home
        </Link>
      </div>
    )
  }

  const products = ALL_PRODUCTS.filter(p => p.category === categoryInfo.category)

  const handleAddToCart = (e: React.MouseEvent, productName: string) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(`[v0] Added ${productName} to cart`)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="mb-12">
          <Link href="/" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            {categoryInfo.name}
          </h1>
          <p className="text-muted-foreground text-lg">
            Showing {products.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group block h-full"
            >
              <div className="bg-muted/50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition h-full flex flex-col">
                {/* Product Image */}
                <div className="relative overflow-hidden bg-muted h-48 md:h-48 rounded-xl md:rounded-none">
                  <img
                    src={product.image || '/placeholder.svg?height=192&width=300&query=cosmetic-product'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="hidden md:flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="text-sm font-medium text-foreground">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 md:hidden">
                      {product.category === 'skincare' ? 'Skincare' : product.category === 'makeup' ? 'Makeup' : 'Sets'}
                    </p>
                  </div>

                  {/* Price and Cart Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    <button
                      onClick={(e) => handleAddToCart(e, product.name)}
                      className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground w-10 h-10 rounded-full items-center justify-center transition flex-shrink-0"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
