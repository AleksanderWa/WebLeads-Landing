import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface UseCase {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
}

interface UseCasesGridProps {
  title: string
  subtitle: string
  cases: UseCase[]
}

export function UseCasesGrid({ title, subtitle, cases }: UseCasesGridProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-brand-accent hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center text-brand-primary mb-4">
                  {useCase.icon}
                </div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
