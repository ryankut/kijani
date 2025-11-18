import Link from 'next/link'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { ALL_PRODUCTS } from '@/lib/products'

interface VerticalCardsSectionProps {
  title: string
  filter?: string
  startIndex?: number
}

export default function VerticalCardsSection({ title, filter = 'All', startIndex = 0 }: VerticalCardsSectionProps) {
  const filteredProducts = filter === 'All' 
    ? ALL_PRODUCTS.slice(startIndex, startIndex + 4)
    : ALL_PRODUCTS.filter(p => p.category?.toLowerCase() === filter.toLowerCase()).slice(0, 4)

  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <div className="h-px flex-1 bg-border mx-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col block"
              >
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <button 
                    onClick={(e) => e.preventDefault()}
                    className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition"
                  >
                    <Heart className="w-5 h-5 text-primary" />
                  </button>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-primary">${product.price}</span>
                    <button 
                      onClick={(e) => e.preventDefault()}
                      className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
