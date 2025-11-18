'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductSlider from '@/components/product-slider'
import { Heart, Share2, Star, Check, ShoppingCart, ThumbsUp } from 'lucide-react'
import { ALL_PRODUCTS } from '@/lib/products'

export default function ProductPage() {
  const params = useParams()
  const productId = Number(params.id)
  
  const product = ALL_PRODUCTS.find(p => p.id === productId)

  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('50ml')
  const [activeTab, setActiveTab] = useState('ingredients')

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">Product not found</p>
        </main>
        <Footer />
      </div>
    )
  }

  const images = product.images || ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']

  const productDetails = {
    brand: 'REHHA',
    rating: product.rating || 4.8,
    reviews: product.reviews || 124,
    description: 'Indulge in luxury with our premium beauty product, infused with rare botanical extracts and premium ingredients. Perfect for all skin types.',
  }

  const relatedProducts = ALL_PRODUCTS.filter(
    p => p.category === product.category && p.id !== productId
  ).slice(0, 6)

  const handleAddToCart = () => {
    console.log(`[v0] Added ${quantity}x ${product.name} (${selectedSize}) to cart`)
  }

  const handleRatingClick = () => {
    setActiveTab('reviews')
    setTimeout(() => {
      document.querySelector('[data-reviews-section]')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-muted rounded-2xl overflow-hidden h-96 lg:h-[500px]">
              <img
                src={images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === idx ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img src={img || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-primary text-sm font-semibold mb-2">{productDetails.brand}</p>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              <div 
                onClick={handleRatingClick}
                className="flex items-center gap-4 mb-4 cursor-pointer group"
              >
                <div className="flex gap-1 group-hover:scale-110 transition-transform">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(productDetails.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`} />
                  ))}
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition cursor-pointer">({productDetails.reviews} reviews)</span>
              </div>
              <p className="text-muted-foreground text-lg">{productDetails.description}</p>
            </div>

            <div className="border-t border-b border-border py-6">
              <p className="text-4xl font-bold text-primary mb-2">${product.price}</p>
              <p className="text-muted-foreground">Free shipping on orders over $50</p>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Size</label>
                <div className="flex gap-3">
                  {['30ml', '50ml', '100ml'].map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg transition ${
                        selectedSize === size 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border hover:border-primary hover:bg-primary/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border rounded-lg hover:bg-muted transition"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border rounded-lg hover:bg-muted transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:bg-primary/90 transition text-lg flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:bg-muted transition">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:bg-muted transition">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Highlights */}
            <div className="bg-secondary/20 rounded-xl p-4 space-y-3">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">100% Natural Ingredients</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Cruelty-Free & Vegan</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Dermatologist Tested</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Tabs */}
        <div className="bg-card rounded-2xl p-8 shadow-md mb-16" data-reviews-section>
          <div className="flex gap-8 border-b border-border mb-6 overflow-x-auto">
            <button 
              onClick={() => setActiveTab('ingredients')}
              className={`pb-4 font-semibold transition whitespace-nowrap ${
                activeTab === 'ingredients' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Ingredients
            </button>
            <button 
              onClick={() => setActiveTab('howToUse')}
              className={`pb-4 font-semibold transition whitespace-nowrap ${
                activeTab === 'howToUse' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              How to Use
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 font-semibold transition whitespace-nowrap ${
                activeTab === 'reviews' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Reviews ({productDetails.reviews})
            </button>
          </div>

          <div className="space-y-3 text-foreground">
            {activeTab === 'ingredients' && (
              <>
                <p className="font-semibold mb-4">Key Ingredients:</p>
                <ul className="space-y-2">
                  {product.ingredients?.map((ingredient, idx) => (
                    <li key={idx}>• {ingredient}</li>
                  ))}
                </ul>
              </>
            )}

            {activeTab === 'howToUse' && (
              <>
                <p className="font-semibold mb-4">How to Use:</p>
                <p className="text-muted-foreground leading-relaxed">{product.howToUse}</p>
              </>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-muted-foreground text-sm mb-2">Average Rating</p>
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-bold text-primary">{productDetails.rating}</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-5 h-5 ${i < Math.floor(productDetails.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">{productDetails.reviews}</p>
                      <p className="text-muted-foreground text-sm">customer reviews</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {product.reviewsData?.map((review, idx) => (
                    <div key={idx} className="border border-border rounded-lg p-5 hover:shadow-md hover:border-primary/30 transition">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-foreground">{review.name}</p>
                            <span className="inline-flex items-center gap-1 bg-green-500/10 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                              ✓ Verified Purchase
                            </span>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-accent text-accent' : 'text-muted-foreground'}`} />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">2 weeks ago</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-3">{review.comment}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Helpful</span>
                        </button>
                        <span className="text-muted-foreground">·</span>
                        <button className="text-muted-foreground hover:text-primary transition">Report</button>
                      </div>
                    </div>
                  ))}
                </div>

                {!product.reviewsData || product.reviewsData.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">No reviews yet. Be the first to share your experience!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Recommended Products */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-foreground">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <a
                key={p.id}
                href={`/product/${p.id}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition block"
              >
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{p.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(p.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({p.reviews})</span>
                  </div>
                  <span className="text-xl font-bold text-primary">${p.price}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
