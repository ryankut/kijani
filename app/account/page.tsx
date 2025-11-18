'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { User } from 'lucide-react'

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-2xl text-center md:space-y-0.5">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
              <User className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-muted-foreground" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
              Your Account
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
            You need to be logged in to access your account.
            <br className="hidden sm:inline" />
            Sign in to continue.
          </p>

          {/* CTA Button - Only Sign In */}
          <div className="flex justify-center pt-4 sm:pt-8">
            <Link
              href="/#"
              className="px-8 sm:px-10 py-3 sm:py-3.5 bg-primary text-primary-foreground font-medium text-base hover:bg-primary/90 transition-colors duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
