interface Step {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

interface HowItWorksLandingProps {
  id?: string
  title?: string
  description?: string
  steps: Step[]
}

export function HowItWorksLanding({ id = "how-it-works", title = "How It Works", description = "Get business data in 4 simple steps", steps }: HowItWorksLandingProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-brand-light" id={id}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                
                <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center text-brand-primary mb-4">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-brand-secondary mb-2">
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-brand-primary/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
