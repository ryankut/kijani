'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export type HomeCategory = {
  id: string
  name: string
  slug: string
  imagePath: string | null
}

export default function SmallSquareCards({ categories }: { categories: HomeCategory[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Reset index if categories list shrinks
    if (currentIndex >= categories.length) setCurrentIndex(0)
  }, [categories.length, currentIndex])

  if (categories.length === 0) return null

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current
    if (diff > 50) {
      setCurrentIndex((prev) => (prev + 1) % categories.length)
    } else if (diff < -50) {
      setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
    }
  }

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 pb-4 border-b border-border">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Shop by Category
          </span>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted hover:shadow-lg transition-shadow"
            >
              {cat.imagePath ? (
                <Image
                  src={cat.imagePath}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-secondary" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {categories.map((cat, idx) => (
              <Link
                key={cat.id}
                href={`/${cat.slug}`}
                className={`block relative aspect-square rounded-2xl overflow-hidden bg-muted transition-opacity duration-300 ${
                  idx === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'
                }`}
              >
                {cat.imagePath ? (
                  <Image
                    src={cat.imagePath}
                    alt={cat.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-secondary" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          {categories.length > 1 && (
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
          )}
        </div>
      </div>
    </section>
  )
}