import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeaturesGridProps {
  title?: string
  description?: string
  features: Feature[]
}

export function FeaturesGrid({ title, description, features }: FeaturesGridProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xl text-gray-600">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card 
          key={index} 
          className="border-2 hover:border-brand-primary hover:shadow-lg transition-all duration-300"
        >
          <CardHeader>
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary mb-4">
              {feature.icon}
            </div>
            <CardTitle className="text-xl">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
        </div>
      </div>
    </section>
  )
}
