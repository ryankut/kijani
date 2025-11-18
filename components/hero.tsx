export default function Hero() {
  return (
    <section className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-secondary rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto h-full flex items-center px-4">
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Discover Luxury Beauty
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Premium cosmetics crafted with the finest natural ingredients for radiant, healthy skin.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
            Shop Now
          </button>
        </div>

        {/* Product mockup placeholder */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <div className="relative w-64 h-80 bg-gradient-to-br from-secondary to-accent rounded-3xl shadow-2xl transform hover:scale-105 transition">
            <div className="absolute inset-8 bg-white/30 rounded-2xl flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Premium Product</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
