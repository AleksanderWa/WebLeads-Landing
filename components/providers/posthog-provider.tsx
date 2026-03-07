'use client'

import { usePathname } from 'next/navigation'
import { useEffect, type ReactNode } from 'react'
import { PostHogProvider as PostHogProviderRoot, usePostHog } from 'posthog-js/react'

const token = process.env.NEXT_PUBLIC_POSTHOG_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

function PostHogPageViewTracker({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const posthog = usePostHog()

  useEffect(() => {
    if (pathname == null || posthog == null) return
    posthog.capture('$pageview', { $current_url: window.location.href })
  }, [pathname, posthog])

  return <>{children}</>
}

export function PostHogProvider({ children }: { children: ReactNode }) {
  if (token == null || token === '' || host == null || host === '') {
    return <>{children}</>
  }

  return (
    <PostHogProviderRoot
      apiKey={token}
      options={{
        api_host: host,
        capture_pageview: false,
      }}
    >
      <PostHogPageViewTracker>{children}</PostHogPageViewTracker>
    </PostHogProviderRoot>
  )
}
