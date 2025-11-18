'use client'

interface FilterBarSectionProps {
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

export default function FilterBarSection({ selectedFilter, onFilterChange }: FilterBarSectionProps) {
  const filters = ['All', 'skincare', 'makeup', 'sets']
  const filterLabels = ['All', 'Skincare', 'Makeup', 'Sets']
  const tabCount = 2

  const currentTabIndex = Math.floor(filters.indexOf(selectedFilter) / 2)

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex gap-2">
            {[...Array(tabCount)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const filterIndex = i * 2
                  if (filterIndex < filters.length) {
                    onFilterChange(filters[filterIndex])
                  }
                }}
                className={`w-3 h-3 rounded-full transition cursor-pointer ${i === currentTabIndex ? 'bg-primary' : 'bg-muted hover:bg-muted/80'}`}
                aria-label={`Filter group ${i + 1}`}
              />
            ))}
          </div>
          
          <div className="flex-1 bg-muted/50 rounded-full flex items-center px-4 sm:px-6 gap-2 sm:gap-4 py-3 sm:py-0 sm:h-12 flex-wrap sm:flex-nowrap">
            <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">Filter:</span>
            <div className="flex gap-2 sm:gap-3 flex-wrap sm:flex-nowrap flex-1">
              {filterLabels.map((label, idx) => (
                <button
                  key={filters[idx]}
                  onClick={() => onFilterChange(filters[idx])}
                  className={`text-xs sm:text-sm font-medium whitespace-nowrap px-3 sm:px-4 py-2 rounded-full transition cursor-pointer ${
                    selectedFilter === filters[idx]
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
