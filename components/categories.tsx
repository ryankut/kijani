'use client'

import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    name: 'Makeup',
    href: '/makeup',
    image: '/category-makeup.jpg',
  },
  {
    name: 'Skincare',
    href: '/skincare',
    image: '/category-skincare.jpg',
  },
  {
    name: 'Wellness',
    href: '/wellness',
    image: '/category-wellness.jpg',
  },
  {
    name: 'Fragrance',
    href: '/fragrance',
    image: '/category-fragrance.jpg',
  },
  {
    name: 'Sets',
    href: '/sets',
    image: '/category-sets.jpg',
  },
  {
    name: 'Haircare',
    href: '/haircare',
    image: '/category-haircare.jpg',
  },
  {
    name: 'Limited Edition',
    href: '/shop-all',
    image: '/category-limited-edition.jpg',
  },
]

export default function Categories() {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group"
            >
              <div className="relative bg-muted rounded-2xl overflow-hidden mb-3 aspect-square">
                <img
                  src={cat.image || "/placeholder.svg"}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm sm:text-base text-center px-2">{cat.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
