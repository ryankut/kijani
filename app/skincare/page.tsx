import Header from '@/components/header'
import Footer from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { ALL_PRODUCTS } from '@/lib/products'

export const metadata = {
  title: 'Skincare - Luxora',
  description: 'Premium skincare products for radiant, healthy skin',
}

export default function Skincare() {
  const skincareProducts = ALL_PRODUCTS.filter(p => p.category === 'skincare')

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-secondary/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Skincare Collection</h1>
          <p className="text-muted-foreground">Treat your skin with our premium skincare essentials</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skincareProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
