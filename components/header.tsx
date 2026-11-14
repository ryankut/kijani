'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, ShoppingCart, User, X, HeadsetIcon } from 'lucide-react';
import { searchProductsAction } from '@/app/search-actions';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  type Product = {
    id: string;
    slug: string;
    name: string;
    image: string | null;
    category: string | null;
    price: number;
  };
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skin Care', href: '/shop/skincare' },
    { label: 'Hair Care', href: '/shop/haircare' },
    { label: 'Baby Products', href: '/shop/babyproducts' },
    { label: 'Consult Dermatologist', href: '/consultdermatologist' },
    { label: 'Careers', href: '/careers' },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const query = searchQuery.trim();
    if (query.length < 2) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    let cancelled = false;
    const timer = setTimeout(async () => {
      const results = await searchProductsAction(query);
      if (!cancelled) {
        setSearchResults(results);
        setShowSearchResults(true);
      }
    }, 250);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="hidden sm:inline">Kijani - Natural remedies for your hair and skin.</span>
          <span className="sm:hidden">Kijani - Natural remedies for your hair and skin.</span>
          <div className="flex gap-2 sm:gap-4 items-center">
            <button type="button">EN</button>
            <Link href="/support" className="hover:opacity-80 transition">
              <HeadsetIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <header className="bg-card shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <Link href="/" className="flex items-center">
              <Image src="/kijani-logo.png" alt="Kijani Logo" width={3466} height={1546} className="h-10 sm:h-12 w-auto" priority />
            </Link>

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
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg transition"
                        onClick={() => setShowSearchResults(false)}
                      >
                        <img src={product.image || '/placeholder.svg'} alt={product.name} className="w-10 h-10 rounded object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                          <p className="text-xs text-muted-foreground capitalize">{product.category ?? 'Product'}</p>
                        </div>
                        <span className="text-sm font-bold text-primary">KES {product.price.toLocaleString()}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

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

            <div className="md:hidden flex items-center gap-3">
              <Link href="/account" className="text-foreground hover:text-primary transition">
                <User className="w-5 h-5" />
              </Link>
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-[10px]">0</span>
              </Link>
              <button type="button" onClick={() => setIsOpen(!isOpen)}>
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
                  {searchResults.map((product) => (
                    <Link key={product.id} href={`/product/${product.slug}`} className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg transition" onClick={() => setShowSearchResults(false)}>
                      <img src={product.image || '/placeholder.svg'} alt={product.name} className="w-10 h-10 rounded object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{product.category ?? 'Product'}</p>
                      </div>
                      <span className="text-sm font-bold text-primary">KES {product.price.toLocaleString()}</span>
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
                  <Link key={item.label} href={item.href} className="block hover:text-primary transition text-base" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>

        <nav className="hidden md:block bg-secondary/20 border-t border-border">
          <div className="max-w-7xl mx-auto w-full px-4 py-2 flex justify-center gap-8 text-sm bg-primary text-primary-foreground">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-accent transition py-2 block">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}