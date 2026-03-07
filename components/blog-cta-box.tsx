import Link from 'next/link'

interface CTABoxProps {
  headline?: string
  description?: string
  buttonText?: string
  buttonUrl?: string
  variant?: 'inline' | 'end'
}

export function CTABox({
  headline = 'Find local business leads in minutes',
  description = 'Search any business type and location. Get verified contacts and decision maker emails — ready to export.',
  buttonText = 'Try WebLeads free',
  buttonUrl = 'https://webleads.site',
  variant = 'inline',
}: CTABoxProps) {
  const isEnd = variant === 'end'

  return (
    <div
      className={`my-8 rounded-xl shadow-md border border-brand-primary/5 bg-white/80 backdrop-blur-sm px-6 py-5 text-center max-w-lg mx-auto`}
    >
      <p className={`font-bold text-brand-secondary mb-1 ${isEnd ? 'text-xl' : 'text-lg'}`}>
        {headline}
      </p>
      <p className="text-gray-600 text-base mb-4">{description}</p>
      <Link
        href={buttonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block no-underline bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-base px-6 py-3 rounded-xl shadow-lg transition-colors"
      >
        {buttonText}
      </Link>
      <p className="text-xs text-gray-500 mt-2">No credit card required</p>
    </div>
  )
}
