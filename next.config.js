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
  experimental: {
    instrumentationHook: true,
  },
})

const sentryConfig = {
  hideSourceMaps: false,
  widenClientFileUpload: true,
  transpileClientSDK: true,
  release: `retroloop@${packageJson.version}`,
  setCommits: {
    auto: true,
    ignoreMissing: true,
    ignoreEmpty: true,
  },
  deploy: {
    env: process.env.NODE_ENV,
  },
  silent: process.env.NODE_ENV !== 'development',
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
  tunnelRoute: '/monitoring',
  webpack: {
    devtool: 'hidden-source-map',
  },
}

module.exports = withSentryConfig(nextConfig, sentryConfig)
