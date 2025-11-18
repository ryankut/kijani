'use client'

import Link from 'next/link'
import { ALL_PRODUCTS } from '@/lib/products'
import BannerCarousel from './banner-carousel'

interface MixedCardsSectionProps {
  filter?: string
}

export default function MixedCardsSection({ filter = 'All' }: MixedCardsSectionProps) {
  const skincare = ALL_PRODUCTS.filter(p => p.category?.toLowerCase() === 'skincare')
  const makeup = ALL_PRODUCTS.filter(p => p.category?.toLowerCase() === 'makeup')
  const sets = ALL_PRODUCTS.filter(p => p.category?.toLowerCase() === 'sets')
  
  const featuredWide = [
    { 
      title: 'Skincare Essentials', 
      description: 'Complete skincare routine', 
      image: skincare[0]?.image || '/skincare-essentials.jpg',
      category: 'skincare',
      slug: 'skincare-essentials'
    },
    { 
      title: 'Luxury Collections', 
      description: 'Premium product sets', 
      image: sets[0]?.image || '/luxury-collections.jpg',
      category: 'sets',
      slug: 'luxury-collections'
    }
  ]

  const mainCategoryCards = [
    { 
      title: 'Skincare', 
      description: 'Discover our skincare range', 
      image: skincare[0]?.image || '/skincare.jpg',
      category: 'skincare',
      slug: 'skincare'
    },
    { 
      title: 'Makeup', 
      description: 'Explore makeup collection', 
      image: makeup[0]?.image || '/makeup.jpg',
      category: 'makeup',
      slug: 'makeup'
    },
    { 
      title: 'Sets', 
      description: 'Premium product sets', 
      image: sets[0]?.image || '/sets.jpg',
      category: 'sets',
      slug: 'sets'
    }
  ]

  const smallCards = [
    { 
      title: 'Trending Skincare', 
      description: 'Most popular picks', 
      image: skincare[1]?.image || '/trending-skincare.jpg',
      category: 'skincare',
      slug: 'trending-skincare'
    },
    { 
      title: 'Best Sellers', 
      description: 'Customer favorites', 
      image: skincare[2]?.image || '/best-sellers.jpg',
      category: 'skincare',
      slug: 'best-sellers'
    },
    { 
      title: 'Sale Items', 
      description: 'Special offers available', 
      image: makeup[1]?.image || '/sale-items.jpg',
      category: 'makeup',
      slug: 'sale-items'
    },
    { 
      title: 'Gift Sets', 
      description: 'Perfect for gifting', 
      image: sets[1]?.image || '/gift-sets.jpg',
      category: 'sets',
      slug: 'gift-sets'
    },
  ]

  const filteredWide = filter === 'All' 
    ? featuredWide 
    : featuredWide.filter(item => item.category === filter.toLowerCase())

  const filteredMainCards = filter === 'All' 
    ? mainCategoryCards 
    : mainCategoryCards.filter(item => item.category === filter.toLowerCase())

  const filteredSmall = filter === 'All' 
    ? smallCards 
    : smallCards.filter(item => item.category === filter.toLowerCase())

  const getWideGridClass = () => {
    if (filteredWide.length === 0) return 'grid-cols-1'
    if (filteredWide.length === 1) return 'grid-cols-1'
    return 'grid-cols-1 md:grid-cols-2'
  }

  const getSmallGridClass = () => {
    if (filteredSmall.length === 0) return 'grid-cols-1'
    if (filteredSmall.length === 1) return 'grid-cols-1'
    if (filteredSmall.length === 2) return 'grid-cols-1 md:grid-cols-2'
    if (filteredSmall.length === 3) return 'grid-cols-1 md:grid-cols-3'
    if (filteredSmall.length === 4) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
  }

  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Featured Wide Cards */}
        <div className={`grid ${getWideGridClass()} gap-6 mb-8`}>
          {filteredWide.map((item, idx) => (
            <Link
              key={idx}
              href={`/${item.category}`}
              className="block group"
            >
              <div
                className={`bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition h-full`}
              >
                <img 
                  src={item.image || "/placeholder.svg"} 
                  alt={item.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                  <button className="text-primary font-semibold hover:gap-2 flex items-center gap-1 transition w-fit mt-6 group-hover:translate-x-1 duration-300">
                    Explore Now →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredMainCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {filteredMainCards.map((item, idx) => (
              <Link
                key={idx}
                href={`/${item.category}`}
                className="block group"
              >
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition h-full flex flex-col">
                  {/* Better aspect ratio for main category cards */}
                  <img 
                    src={item.image || "/placeholder.svg"} 
                    alt={item.title}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <button className="text-primary font-semibold flex items-center gap-1 transition w-fit hover:gap-2 mt-4 group-hover:translate-x-1 duration-300">
                      Shop Now →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Additional small cards */}
        <div className={`grid ${getSmallGridClass()} gap-4`}>
          {filteredSmall.map((item, idx) => (
            <Link
              key={idx}
              href={`/${item.category}`}
              className="block group"
            >
              <div
                className={`bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col h-full`}
              >
                <img 
                  src={item.image || "/placeholder.svg"} 
                  alt={item.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                  <button className="text-primary font-semibold text-sm flex items-center gap-1 transition w-fit hover:gap-2 mt-3 group-hover:translate-x-1 duration-300">
                    View →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <BannerCarousel />
      </div>
    </section>
  )
}
