export default function SupportLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="h-12 bg-muted rounded-lg mb-6 max-w-2xl mx-auto animate-pulse" />
          <div className="h-6 bg-muted rounded-lg mb-4 max-w-3xl mx-auto animate-pulse" />
          <div className="h-6 bg-muted rounded-lg max-w-2xl mx-auto animate-pulse" />
        </div>

        {/* Hero image skeleton */}
        <div className="mb-16 rounded-2xl overflow-hidden h-96 bg-muted animate-pulse" />

        {/* Stats skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-card rounded-xl p-8 border border-border">
              <div className="h-10 bg-muted rounded-lg mb-2 animate-pulse" />
              <div className="h-6 bg-muted rounded-lg animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
