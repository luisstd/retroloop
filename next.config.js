/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')
const { withSentryConfig } = require('@sentry/nextjs')
const packageJson = require('./package.json')

import('./src/env.mjs')

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  publicRuntimeConfig: {
    version: packageJson.version,
  },
  async headers() {
    return [
      {
        source: '/dashboard/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/profile/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/retro/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/auth/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ]
  },
})

const sentryConfig = {
  release: {
    name: `retroloop@${packageJson.version}`,
  },
  setCommits: {
    auto: true,
    ignoreMissing: true,
    ignoreEmpty: true,
  },
  deploy: {
    env: process.env.NODE_ENV,
  },
  dryRun: false,
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  sourcemaps: {
    assets: ['.next/static/chunks/**', '.next/server/**'],
    ignore: ['node_modules/**'],
    deleteFilesAfterUpload:
      process.env.NODE_ENV === 'production' ? ['**/*.map'] : [],
  },
  webpack: {
    devtool: 'hidden-source-map',
  },
  telemetry: false,
}

module.exports = withSentryConfig(nextConfig, sentryConfig)
