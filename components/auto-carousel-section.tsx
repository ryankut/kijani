'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import type { CarouselApi } from '@/components/ui/carousel'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { ALL_PRODUCTS } from '@/lib/products'

interface AutoCarouselSectionProps {
  title?: string
}

export default function AutoCarouselSection({ title = 'Featured Products' }: AutoCarouselSectionProps) {
  const categories = ['skincare', 'makeup', 'wellness', 'fragrance', 'sets', 'haircare']
  const carouselProducts = categories.map(category => {
    const categoryProducts = ALL_PRODUCTS.filter(p => p.category === category)
    return categoryProducts[Math.floor(Math.random() * categoryProducts.length)]
  }).filter(Boolean)

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1)
    }

    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  useEffect(() => {
    if (!api) return

    const timer = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(timer)
  }, [api])

  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <div className="h-px flex-1 bg-border mx-4"></div>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {carouselProducts.map((product) => (
                <CarouselItem key={product.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Link href={`/product/${product.id}`} className="group">
                    <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col h-full">
                      <div className="relative h-64 bg-muted overflow-hidden">
                        <img
                          src={product.image || '/placeholder.svg'}
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
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating)
                                    ? 'fill-accent text-accent'
                                    : 'text-muted-foreground'
                                }`}
                              />
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
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current - 1 ? 'bg-primary w-6' : 'bg-muted-foreground'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
