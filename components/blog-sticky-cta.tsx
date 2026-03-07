import Link from 'next/link'

interface BlogStickyCTAProps {
  headline?: string
  description?: string
  buttonText?: string
  buttonUrl?: string
}

export function BlogStickyCTA({
  headline = 'Building a local prospect list?',
  description = 'WebLeads finds businesses by type and location, surfaces decision maker contacts, and verifies emails — all in one workflow.',
  buttonText = 'Try WebLeads free',
  buttonUrl = 'https://webleads.site',
}: BlogStickyCTAProps) {
  return (
    <div className="rounded-xl shadow-md border border-brand-primary/5 bg-white/80 backdrop-blur-sm p-5 text-center">
      <p className="font-bold text-brand-secondary text-base mb-2">
        {headline}
      </p>
      <p className="text-gray-600 text-base mb-4 leading-relaxed">
        {description}
      </p>
      <Link
        href={buttonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block no-underline bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-base px-6 py-3 rounded-xl shadow-lg transition-colors text-center"
      >
        {buttonText}
      </Link>
      <p className="text-xs text-gray-500 mt-2">No credit card required</p>
    </div>
  )
}
