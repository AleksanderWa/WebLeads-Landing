interface Stat {
  value: string
  label: string
  icon?: React.ReactNode
}

interface StatsBarProps {
  stats: Stat[]
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="py-12 px-4 bg-white border-y">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {stat.icon && (
                <div className="flex justify-center mb-2 text-brand-primary">
                  {stat.icon}
                </div>
              )}
              <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
