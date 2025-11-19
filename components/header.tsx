'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Search, ShoppingCart, User, X, ChevronDown, HeadsetIcon } from 'lucide-react'
import { searchProducts } from '@/lib/products'
import Image from "next/image"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  type Product = {
    id: string | number
    name: string
    image?: string
    category?: string
    price?: number
  }
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop All', href: '/shop-all' },
    {
      label: 'Shop',
      dropdown: [
        { label: 'Makeup', href: '/makeup' },
        { label: 'Skincare', href: '/skincare' },
        { label: 'Wellness', href: '/wellness' },
        { label: 'Fragrance', href: '/fragrance' },
        { label: 'Sets', href: '/sets' },
        { label: 'Haircare', href: '/haircare' },
      ]
    },
    { label: 'About', href: '/about' },
  ]

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query.trim()) {
      const results = searchProducts(query)
      setSearchResults(results)
      setShowSearchResults(true)
    } else {
      setSearchResults([])
      setShowSearchResults(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* Top mini bar */}
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="hidden sm:inline">REHHA — Glow Your Everyday Glam</span>
          <span className="sm:hidden">REHHA — Glow Your Everyday Glam</span>
          <div className="flex gap-2 sm:gap-4 items-center">
            <button>EN</button>
            <Link href="/support" className="hover:opacity-80 transition">
              <HeadsetIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-card shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">

            {/* Logo */}
         <Link href="/" className="flex items-center">
        <Image
        src="/rehha-logo.png"
        alt="Rehha Logo"
        width={180}         
        height={50}         
        className="h-10 sm:h-12 w-auto"   
        priority
        />
        </Link>

            {/* Search bar - desktop */}
            <div className="hidden md:flex flex-1 mx-4">
              <div className="w-full relative" ref={searchRef}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => searchQuery && setShowSearchResults(true)}
                  className="w-full pl-10 pr-4 py-2 bg-muted rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />

                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-2 z-50">
                    {searchResults.map(product => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg transition"
                        onClick={() => setShowSearchResults(false)}
                      >
                        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-10 h-10 rounded object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                          <p className="text-xs text-muted-foreground capitalize">{product.category}</p>
                        </div>
                        <span className="text-sm font-bold text-primary">${product.price}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/account" className="flex items-center gap-2 hover:text-primary transition">
                <User className="w-5 h-5" />
                <span>Account</span>
              </Link>
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </Link>
            </div>

            {/* Mobile actions */}
            <div className="md:hidden flex items-center gap-3">
              <Link href="/account" className="text-foreground hover:text-primary transition">
                <User className="w-5 h-5" />
              </Link>
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-[10px]">0</span>
              </Link>
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="relative" ref={searchRef}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => searchQuery && setShowSearchResults(true)}
                  className="w-full pl-10 pr-4 py-2 bg-muted rounded-full text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-2 z-50 max-h-64 overflow-y-auto">
                  {searchResults.map(product => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg transition"
                      onClick={() => {
                        setShowSearchResults(false)
                      }}
                    >
                      <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-10 h-10 rounded object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{product.category}</p>
                      </div>
                      <span className="text-sm font-bold text-primary">${product.price}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border space-y-4">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full hover:text-primary transition text-base"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="block hover:text-primary transition text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.dropdown && openDropdown === item.label && (
                      <div className="pl-4 mt-2 space-y-2 border-l border-border">
                        {item.dropdown.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-4 py-2 hover:bg-muted hover:text-primary transition first:rounded-t-lg last:rounded-b-lg text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block bg-secondary/20 border-t border-border">
          <div className="max-w-7xl mx-auto w-full px-4 py-2 flex justify-center gap-8 text-sm text-black bg-neutral-300">
            {navItems.map((item) => (
              <div key={item.label} className="relative">

                {item.dropdown ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="hover:text-primary transition flex items-center gap-1 py-2"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition py-2 block"
                  >
                    {item.label}
                  </Link>
                )}

                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute left-0 mt-0 w-40 bg-card border border-border rounded-lg shadow-lg z-20">
                    {item.dropdown.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className="block px-4 py-2 hover:bg-muted hover:text-primary transition first:rounded-t-lg last:rounded-b-lg text-sm"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}
