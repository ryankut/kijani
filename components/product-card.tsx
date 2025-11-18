'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group">
      <div className="relative bg-muted rounded-lg overflow-hidden mb-4 aspect-square">
        <img
          src={image || '/placeholder.svg'}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
      <h3 className="font-semibold text-foreground">{name}</h3>
      <p className="text-lg font-bold text-primary mt-2">${price}</p>
    </Link>
  )
}
