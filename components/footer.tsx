'use client'

import { useState, useRef } from "react"

export default function Footer() {
  const [expanded, setExpanded] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleExpand = () => {
    setExpanded(true)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 200)
  }

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubscribe = (e: any) => {
    if (e.key === "Enter") {
      const email = e.target.value

      if (!validateEmail(email)) {
        setError("Please enter a valid email")
        e.target.classList.add("animate-shake")
        setTimeout(() => {
          e.target.classList.remove("animate-shake")
        }, 500)
        return
      }

      setError("")
      setSubscribed(true)
      setExpanded(false)

      setTimeout(() => {
        setSubscribed(false)
      }, 2000)
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          
          {/* Shop */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition">All Products</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Skincare</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Makeup</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Sets</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition">About</a></li>
              <li><a href="/support" className="hover:opacity-100 transition">Support</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Shipping</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Returns</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Privacy</a></li>
            </ul>
          </div>

          {/* Newsletter — COLUMN ALIGNED */}
          <div className="flex flex-col items-start">
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="opacity-90 mb-3 text-xs">Get exclusive offers and beauty tips</p>

            <div className="w-full">

              {/* Subscribe Button */}
              {!expanded && !subscribed && (
                <button
                  onClick={handleExpand}
                  className="
                    w-28 h-11 rounded-lg 
                    bg-primary-foreground text-primary 
                    font-semibold text-sm
                    shadow-lg shadow-black/10
                    transition-all duration-500
                    hover:scale-[1.03]
                    active:scale-[0.97]
                    animate-rubberBand
                  "
                >
                  Subscribe
                </button>
              )}

              {/* Expanding Input */}
              {expanded && (
                <div className="w-full mt-0">
                  <input
                    ref={inputRef}
                    type="email"
                    placeholder="Enter email"
                    onKeyDown={handleSubscribe}
                    className={`
                      w-full h-11 rounded-lg 
                      bg-primary-foreground text-primary px-3 
                      text-sm outline-none 
                      transition-all duration-500 
                      origin-center animate-expandInput
                      ${error ? "border border-red-500" : ""}
                    `}
                  />
                  {error && (
                    <p className="text-red-400 text-xs mt-1 px-1">{error}</p>
                  )}
                </div>
              )}

              {/* Subscribed Message */}
              {subscribed && (
                <div className="
                  w-36 h-11 mt-0 rounded-lg 
                  bg-green-500 text-white 
                  flex items-center justify-center 
                  text-sm transition-all duration-500 animate-shrinkBack
                ">
                  Subscribed ✓
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-75">
          <p className="mb-2">&copy; 2025 REHHA. All rights reserved.</p>
          <p className="text-xs">Designed & Developed by Sujan Das.</p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes rubberBand {
          0% { transform: scale(1); }
          30% { transform: scale(1.15); }
          60% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .animate-rubberBand {
          animation: rubberBand 0.6s ease-out;
        }

        @keyframes expandInput {
          0% { transform: scaleX(0.3); opacity: 0; }
          70% { transform: scaleX(1.1); }
          100% { transform: scaleX(1); opacity: 1; }
        }
        .animate-expandInput {
          animation: expandInput 0.6s cubic-bezier(0.22, 1.61, 0.36, 1);
        }

        @keyframes shrinkBack {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-shrinkBack {
          animation: shrinkBack 0.4s ease-out;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </footer>
  )
}
