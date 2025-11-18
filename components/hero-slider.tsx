'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  id: number
  image: string
  title: string
  description: string
  cta: string
  link: string
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const slideContainerRef = useRef<HTMLDivElement>(null)
  const touchStartRef = useRef(0)
  const touchEndRef = useRef(0)

  const slides: Slide[] = [
    { 
      id: 1, 
      image: '/slider-model-serum.jpg', 
      title: 'Luminous Glow Serum',
      description: 'Radiant skin starts here with our hero serum',
      cta: 'Discover',
      link: '#featured-products' 
    },
    { 
      id: 2, 
      image: '/slider-model-mask.jpg', 
      title: 'Silk Revival Mask',
      description: 'Indulge in luxury skincare excellence',
      cta: 'Shop Now',
      link: '#featured-collection' 
    },
    { 
      id: 3, 
      image: '/slider-model-ritual.jpg', 
      title: 'Evening Ritual Set',
      description: 'Transform your skincare routine',
      cta: 'Explore',
      link: '#featured-products' 
    },
    { 
      id: 4, 
      image: '/slider-model-collection.jpg', 
      title: 'Rose Elegance Collection',
      description: 'Timeless beauty, modern science',
      cta: 'View Collection',
      link: '#featured-collection' 
    },
  ]

  // Auto-slide logic
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 8000)
  }

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length)
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length)

  // ✅ FIXED touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX    // FIX ✔
    setIsAutoPlay(false)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndRef.current = e.changedTouches[0].clientX   // FIX ✔
    handleSwipe()
    setTimeout(() => setIsAutoPlay(true), 8000)
  }

  const handleSwipe = () => {
    const distance = touchStartRef.current - touchEndRef.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) nextSlide()
    else if (isRightSwipe) prevSlide()
  }

  return (
    <section id="hero-slider" className="w-full overflow-hidden bg-background">
      <div className="relative w-full" style={{ aspectRatio: '1.85 / 1' }}>
        <div
          ref={slideContainerRef}
          className="relative w-full h-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <a
              key={slide.id}
              href={slide.link}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out group"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                pointerEvents: index === currentSlide ? 'auto' : 'none',
              }}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                priority={index === 0}
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-center pl-6 md:pl-12 lg:pl-16 max-w-2xl">
                <div className="space-y-3 md:space-y-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary/60 rounded-full" />
                  
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white text-balance">
                    {slide.title}
                  </h2>
                  
                  <p className="text-base md:text-lg text-white/80 font-light max-w-md">
                    {slide.description}
                  </p>

                  <div className="pt-2">
                    <button className="px-8 py-3 bg-white text-black font-medium text-sm md:text-base hover:bg-accent hover:text-white transition-all duration-300 rounded-sm tracking-wide">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 group"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 group"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
        </button>

        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full backdrop-blur-sm border ${
                index === currentSlide
                  ? 'bg-white/80 w-8 h-2 md:w-10 md:h-2.5 border-white/40'
                  : 'bg-white/20 w-2 h-2 md:w-2.5 md:h-2.5 hover:bg-white/40 border-white/20 hover:border-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
