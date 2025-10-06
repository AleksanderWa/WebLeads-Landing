import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeaturesGridProps {
  features: Feature[]
}

export function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
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
  )
}
