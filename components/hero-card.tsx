'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type HeroSlide = {
  id: string
  headline: string
  subtext: string | null
  imagePath: string
  buttonLabel: string | null
  buttonHref: string | null
}

export default function HeroCard({ slides }: { slides: HeroSlide[] }) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  if (slides.length === 0) return null

  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length)
  const handlePrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  const goToSlide = (index: number) => setCurrent(index)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const difference = touchStartX.current - touchEndX.current
    if (Math.abs(difference) > 50) {
      if (difference > 0) handleNext()
      else handlePrev()
    }
  }

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative w-full aspect-video md:aspect-[16/6] rounded-3xl overflow-hidden shadow-lg group"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.imagePath || '/placeholder.svg'}
                alt={slide.headline}
                fill
                className="object-cover"
                priority={index === 0}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

              <div className="absolute inset-0 flex items-center px-4 md:px-12">
                <div className="max-w-md z-10">
                  <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight">
                    {slide.headline}
                  </h2>
                  {slide.subtext && (
                    <p className="text-sm md:text-lg text-white/90 mb-4 md:mb-6">
                      {slide.subtext}
                    </p>
                  )}
                  {slide.buttonLabel && slide.buttonHref && (
                    <Link href={slide.buttonHref}>
                      <button className="bg-primary text-primary-foreground md:px-8 md:py-3 font-semibold hover:shadow-lg transition py-1 px-3 rounded-sm">
                        {slide.buttonLabel}
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Mobile tap zones (invisible, whole half) */}
          <button
            className="absolute left-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent z-20"
            onClick={handlePrev}
            aria-label="Previous slide"
          />
          <button
            className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-r from-black/50 to-transparent z-20"
            onClick={handleNext}
            aria-label="Next slide"
          />

          {/* Desktop arrow buttons */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all border border-white/20 hover:border-white/40 items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all border border-white/20 hover:border-white/40 items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot indicators */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
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
        )}
      </div>
    </section>
  )
}