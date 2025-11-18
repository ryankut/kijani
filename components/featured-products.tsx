'use client'

import Link from 'next/link'

export default function FeaturedProducts() {
  const featured = [
    {
      title: 'Essential Trio',
      description: 'Complete skincare routine',
      color: 'from-primary/30 to-secondary/30',
      image: '/skincare-essentials-trio-set.jpg',
      href: '/skincare'
    },
    {
      title: 'Luxury Set',
      description: 'Premium collection',
      color: 'from-secondary/30 to-accent/30',
      image: '/luxury-cosmetics-premium-set.jpg',
      href: '/shop-all'
    }
  ]

  return (
    <section className="py-8 sm:py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {featured.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group"
            >
              <div
                className={`bg-gradient-to-br ${item.color} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 min-h-56 sm:min-h-72 flex flex-col justify-between shadow-lg hover:shadow-xl transition relative overflow-hidden`}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition"
                />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg">{item.description}</p>
                </div>
                <button className="text-primary font-semibold hover:gap-2 flex items-center gap-1 transition relative z-10">
                  Explore Now →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
