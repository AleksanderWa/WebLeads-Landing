import { withSentryConfig } from '@sentry/nextjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/alternatives/apollo-alternative',
        destination: '/blog/apollo-alternatives-local-lead-generation',
        permanent: true,
      },
      {
        source: '/alternatives/d7-lead-finder-alternative',
        destination: '/blog/d7-lead-finder-alternative',
        permanent: true,
      },
      {
        source: '/alternatives/lusha-alternative',
        destination: '/blog/lusha-alternative',
        permanent: true,
      },
      {
        source: '/alternatives/outscraper-alternative',
        destination: '/blog/outscraper-alternative',
        permanent: true,
      },
      {
        source: '/alternatives/phantombuster-alternative',
        destination: '/blog/phantombuster-alternative',
        permanent: true,
      },
      {
        source: '/alternatives/rocketreach-alternative',
        destination: '/blog/rocketreach-alternative',
        permanent: true,
      },
      {
        source: '/alternatives/seamless-ai-alternative',
        destination: '/blog/seamless-ai-alternative',
        permanent: true,
      },
      {
        source: '/blog/hunter-io-alternative',
        destination: '/alternatives/hunter-io-alternatives',
        permanent: true,
      },
      {
        source: '/blog/zoominfo-alternatives',
        destination: '/alternatives/zoominfo-alternatives',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/ph/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ph/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ]
  },
}

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: 'webleads',
  project: 'javascript-nextjs',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#vercel-cron-monitors
  automaticVercelMonitors: true,
})
