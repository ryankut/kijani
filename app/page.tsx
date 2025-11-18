'use client'

import { useState } from 'react'
import Header from '@/components/header'
import HeroCard from '@/components/hero-card'
import SmallSquareCards from '@/components/small-square-cards'
import VerticalCardsSection from '@/components/vertical-cards-section'
import FilterBarSection from '@/components/filter-bar-section'
import MixedCardsSection from '@/components/mixed-cards-section'
import HeroSlider from '@/components/hero-slider'
import Footer from '@/components/footer'
import AutoCarouselSection from '@/components/auto-carousel-section'

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero section with large rounded card */}
      <HeroCard />
      
      {/* Row of 5 small square cards */}
      <SmallSquareCards />
      
      <AutoCarouselSection title="Featured Products" />
      
      <HeroSlider />
      
      {/* Section with title bar and 4 vertical cards */}
      <VerticalCardsSection title="Featured Collection" filter={selectedFilter} startIndex={0} />
      
      {/* Filter bar section with tab indicator */}
      <FilterBarSection selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
      
      {/* Mixed rows: 2 wide cards + 3 smaller cards */}
      <MixedCardsSection filter={selectedFilter} />
      
      {/* Another vertical cards section */}
      <VerticalCardsSection title="New Arrivals" filter={selectedFilter} startIndex={4} />
      
      <Footer />
    </main>
  )
}
