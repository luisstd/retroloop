/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')
const { withSentryConfig } = require('@sentry/nextjs')
const { version } = require('./package.json')

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    version,
  },
})

const sentryConfig = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  org: 'noisia',
  project: 'retroloop',
  release: version,
  environment: process.env.NODE_ENV,
  silent: true,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Transpiles SDK to be compatible with IE11 (increases bundle size)
  transpileClientSDK: true,

  // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
  tunnelRoute: '/sentry',

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
}

module.exports = withSentryConfig(nextConfig, sentryConfig)
