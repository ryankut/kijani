'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const banners = [
  {
    id: 1,
    title: 'Hydrating Face Serum',
    subtitle: 'Deep moisture for glowing skin',
    image: '/premium-luxury-hydrating-face-serum-skincare-produ.jpg',
    cta: 'Shop Now',
    href: '/products/hydrating-face-serum',
  },
  {
    id: 2,
    title: 'Eye Cream Collection',
    subtitle: 'Rejuvenate and refresh tired eyes',
    image: '/luxury-eye-cream-premium-skincare-cosmetics-beauty.jpg',
    cta: 'Discover',
    href: '/products/eye-cream-collection',
  },
  {
    id: 3,
    title: 'SPF Moisturizer',
    subtitle: 'Protection and hydration combined',
    image: '/premium-spf-moisturizer-sunscreen-skincare-beauty-.jpg',
    cta: 'Learn More',
    href: '/products/spf-moisturizer',
  },
  {
    id: 4,
    title: 'Luxe Facial Mask',
    subtitle: 'Professional-grade hydration treatment',
    image: '/luxury-facial-mask-premium-skincare-treatment.jpg',
    cta: 'Shop Now',
    href: '/products/luxe-facial-mask',
  },
  {
    id: 5,
    title: 'Rose Oil Elixir',
    subtitle: 'Natural beauty oil for radiant skin',
    image: '/rose-oil-elixir-natural-skincare-beauty.jpg',
    cta: 'Explore',
    href: '/products/rose-oil-elixir',
  },
  {
    id: 6,
    title: 'Night Renewal Serum',
    subtitle: 'Intensive repair while you sleep',
    image: '/night-renewal-serum-advanced-skincare.jpg',
    cta: 'Get Yours',
    href: '/products/night-renewal-serum',
  },
]

export default function HeroCard() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const autoPlayTimer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (!isAutoPlay) return

    autoPlayTimer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 4000)

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current)
    }
  }, [isAutoPlay])

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % banners.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 8000)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 8000)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    const difference = touchStartX.current - touchEndX.current
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 8000)
  }

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative w-full aspect-video md:aspect-[16/6] rounded-3xl overflow-hidden shadow-lg group"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel slides */}
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={banner.image || "/placeholder.svg"}
                alt={banner.title}
                fill
                className="object-cover"
                priority={index === current}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-4 md:px-12">
                <div className="max-w-md z-10">
                  <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight">
                    {banner.title}
                  </h2>
                  <p className="text-sm md:text-lg text-white/90 mb-4 md:mb-6">
                    {banner.subtitle}
                  </p>
                  <Link href={banner.href}>
                    <button className="bg-primary text-primary-foreground md:px-8 md:py-3 font-semibold hover:shadow-lg transition py-1 px-3 rounded-sm">
                      {banner.cta}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          

          {/* Mobile arrow buttons (always visible) */}
          <button
            className="absolute left-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent z-20"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            
          </button>
          <button
            className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-r from-black/50 to-transparent z-20"
            onClick={handleNext}
            aria-label="Next slide"
          >
            
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition ${
                index === current
                  ? 'bg-primary w-8'
                  : 'bg-muted hover:bg-muted-foreground w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
