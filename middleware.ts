import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { withSentryConfig } from '@sentry/nextjs'

export function middleware(request: NextRequest) {
  // Your middleware logic here
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

// Wrap the middleware with Sentry for error tracking
export default withSentryConfig(middleware) 