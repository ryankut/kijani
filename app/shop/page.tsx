'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ShoppingCart } from 'lucide-react'
import { ALL_PRODUCTS } from '@/lib/products'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState(200)
  const [sortBy, setSortBy] = useState('popular')

  const filtered = ALL_PRODUCTS.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false
    if (p.price > priceRange) return false
    return true
  })

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return 4.8 - 4.8 // All products have similar rating
    return 0
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">Shop Collection</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="space-y-6 bg-card p-6 rounded-2xl shadow-md">
              
              {/* Category Filter */}
              <div>
                <h3 className="font-bold text-foreground mb-4">Category</h3>
                <div className="space-y-2">
                  {['all', 'skincare', 'makeup', 'fragrance', 'wellness', 'haircare', 'sets'].map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="w-4 h-4"
                      />
                      <span className="text-foreground capitalize">{cat === 'all' ? 'All Products' : cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-bold text-foreground mb-4">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full accent-primary"
                />
                <p className="text-sm text-muted-foreground mt-2">Up to ${priceRange}</p>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="font-bold text-foreground mb-4">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3].map(rate => (
                    <label key={rate} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-foreground">{rate}+ Stars</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h3 className="font-bold text-foreground mb-4">Brand</h3>
                <div className="space-y-2">
                  {['Luxora', 'Beauty Co', 'Premium Plus'].map(brand => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-foreground">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sorting */}
            <div className="mb-6 flex justify-between items-center flex-wrap gap-4">
              <p className="text-muted-foreground">Showing {sorted.length} products</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-card text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map(product => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group"
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition group">
                    <div className="relative h-64 bg-muted overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-muted-foreground">★ 4.8</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">${product.price}</span>
                        <button 
                          onClick={(e) => e.preventDefault()}
                          className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition text-sm"
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              {[1, 2, 3, 4].map(page => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg transition ${
                    page === 1
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground hover:bg-muted'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
