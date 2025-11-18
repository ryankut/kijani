'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselCard {
  id: number
  title: string
  description: string
  image: string
}

const CAROUSEL_CARDS: CarouselCard[] = [
  {
    id: 1,
    title: 'Premium Skincare Collection',
    description: 'Luxurious formulas for radiant skin',
    image: '/carousel-skincare.jpg'
  },
  {
    id: 2,
    title: 'Luxury Makeup Line',
    description: 'Professional-grade cosmetics',
    image: '/carousel-makeup.jpg'
  },
  {
    id: 3,
    title: 'Essential Beauty Sets',
    description: 'Complete beauty solutions',
    image: '/carousel-sets.jpg'
  },
  {
    id: 4,
    title: 'Organic Skincare Range',
    description: 'Natural beauty products',
    image: '/carousel-organic.jpg'
  },
  {
    id: 5,
    title: 'Hydration Essentials',
    description: 'Deep moisture and nourishment',
    image: '/carousel-hydration.jpg'
  },
  {
    id: 6,
    title: 'Anti-Aging Solutions',
    description: 'Timeless beauty treatments',
    image: '/carousel-antiaging.jpg'
  }
]

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_CARDS.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_CARDS.length) % CAROUSEL_CARDS.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_CARDS.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    if (touchStart - touchEnd > 50) {
      handleNext()
    }
    if (touchEnd - touchStart > 50) {
      handlePrev()
    }
  }

  const currentCard = CAROUSEL_CARDS[currentSlide]

  return (
    <div 
      ref={carouselRef}
      className="relative mt-8 rounded-3xl overflow-hidden shadow-lg group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative aspect-[2/1] sm:aspect-[3/1] lg:aspect-[4/1] overflow-hidden">
        <img
          src={currentCard.image || "/placeholder.svg"}
          alt={currentCard.title}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-end p-6 md:p-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{currentCard.title}</h2>
            <p className="text-sm md:text-lg text-white/90">{currentCard.description}</p>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {CAROUSEL_CARDS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition ${
              idx === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
