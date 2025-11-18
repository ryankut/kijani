'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState } from 'react'

export default function CheckoutPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Steps */}
            <div className="flex gap-4">
              {[1, 2, 3].map(s => (
                <div key={s} className="flex-1">
                  <div className={`h-12 rounded-full flex items-center justify-center font-bold mb-2 ${
                    s === step ? 'bg-primary text-primary-foreground' :
                    s < step ? 'bg-accent text-white' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {s}
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    {s === 1 ? 'Shipping' : s === 2 ? 'Payment' : 'Review'}
                  </p>
                </div>
              ))}
            </div>

            {/* Shipping Form */}
            {step === 1 && (
              <div className="bg-card rounded-2xl p-6 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="col-span-1 px-4 py-3 bg-muted rounded-lg text-foreground" />
                  <input type="text" placeholder="Last Name" className="col-span-1 px-4 py-3 bg-muted rounded-lg text-foreground" />
                  <input type="email" placeholder="Email" className="col-span-2 px-4 py-3 bg-muted rounded-lg text-foreground" />
                  <input type="text" placeholder="Address" className="col-span-2 px-4 py-3 bg-muted rounded-lg text-foreground" />
                  <input type="text" placeholder="City" className="col-span-1 px-4 py-3 bg-muted rounded-lg text-foreground" />
                  <input type="text" placeholder="ZIP Code" className="col-span-1 px-4 py-3 bg-muted rounded-lg text-foreground" />
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Payment Form */}
            {step === 2 && (
              <div className="bg-card rounded-2xl p-6 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Payment Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted">
                    <input type="radio" name="payment" defaultChecked />
                    <span className="text-foreground font-semibold">Credit Card</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted">
                    <input type="radio" name="payment" />
                    <span className="text-foreground font-semibold">PayPal</span>
                  </label>
                </div>
                <div className="space-y-4">
                  <input type="text" placeholder="Card Number" className="w-full px-4 py-3 bg-muted rounded-lg text-foreground" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="px-4 py-3 bg-muted rounded-lg text-foreground" />
                    <input type="text" placeholder="CVC" className="px-4 py-3 bg-muted rounded-lg text-foreground" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="w-full border border-border text-foreground py-3 rounded-full"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold"
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {/* Review Order */}
            {step === 3 && (
              <div className="bg-card rounded-2xl p-6 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Review Your Order</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-foreground pb-4 border-b border-border">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-foreground pb-4 border-b border-border">
                    <span>Tax</span>
                    <span>$8.60</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-primary">$95.60</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:bg-primary/90">
                  Place Order
                </button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="bg-card rounded-2xl p-6 shadow-md h-fit sticky top-20">
            <h3 className="font-bold text-foreground mb-4">Order Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-muted-foreground text-sm">
                <span>Silk Serum x1</span>
                <span>$49.99</span>
              </div>
              <div className="flex justify-between text-muted-foreground text-sm">
                <span>Lavender Mask x2</span>
                <span>$79.98</span>
              </div>
            </div>
            <div className="border-t border-border pt-4 flex justify-between font-bold text-foreground">
              <span>Total</span>
              <span className="text-primary">$95.60</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
