'use client'

import Image from 'next/image'
import { Sparkles, Droplet, Heart, Wind, Star, Waves } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const categories = [
  { 
    icon: Sparkles, 
    name: 'Makeup', 
    color: 'bg-accent/20',
    image: '/makeup-category.jpg',
    href: '/makeup'
  },
  { 
    icon: Droplet, 
    name: 'Skincare', 
    color: 'bg-primary/20',
    image: '/skincare-category.jpg',
    href: '/skincare'
  },
  { 
    icon: Heart, 
    name: 'Wellness', 
    color: 'bg-secondary/20',
    image: '/wellness-category.jpg',
    href: '/wellness'
  },
  { 
    icon: Wind, 
    name: 'Fragrance', 
    color: 'bg-accent/20',
    image: '/fragrance-category.jpg',
    href: '/fragrance'
  },
  { 
    icon: Star, 
    name: 'Sets', 
    color: 'bg-primary/20',
    image: '/sets-category.jpg',
    href: '/sets'
  },
  { 
    icon: Waves, 
    name: 'Haircare', 
    color: 'bg-secondary/20',
    image: '/haircare-category.jpg',
    href: '/haircare'
  },
]

export default function SmallSquareCards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    autoScrollTimer.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length)
    }, 4000)

    return () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current)
    }
  }, [isMobile])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.clientX || e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.clientX || e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      setCurrentIndex((prev) => (prev + 1) % categories.length)
    }
    if (touchEndX.current - touchStartX.current > 50) {
      // Swiped right
      setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
    }
  }

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 pb-4 border-b border-border">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Categories</span>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <div key={idx} className="flex flex-col gap-3">
                {/* Title above card */}
                <span className="font-semibold text-foreground text-center text-sm">{cat.name}</span>
                <a
                  href={cat.href}
                  className={`${cat.color} p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:shadow-md transition aspect-square relative overflow-hidden group`}
                >
                  {/* Background image with 100% transparency */}
                  <Image
                    src={cat.image || "/placeholder.svg"}
                    alt={cat.name}
                    fill
                    className="object-cover absolute inset-0 opacity-100"
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                    
                  </div>
                </a>
              </div>
            )
          })}
        </div>

        <div className="md:hidden">
          <div
            className="flex gap-4 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {categories.map((cat, idx) => {
              const Icon = cat.icon
              const isVisible = idx === currentIndex
              return (
                <div
                  key={idx}
                  className={`flex-shrink-0 w-full transition-opacity duration-300 ${
                    isVisible ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                >
                  {isVisible && (
                    <div className="flex flex-col gap-3">
                      {/* Title above card */}
                      <span className="font-semibold text-foreground text-center text-sm">{cat.name}</span>
                      <a
                        href={cat.href}
                        className={`${cat.color} p-6 rounded-2xl flex flex-col items-center justify-center gap-3 aspect-square relative overflow-hidden group`}
                      >
                        {/* Background image with 100% transparency */}
                        <Image
                          src={cat.image || "/placeholder.svg"}
                          alt={cat.name}
                          fill
                          className="object-cover absolute inset-0 opacity-100"
                        />
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                          
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {categories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-primary w-6' : 'bg-border'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
