/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')
const { withSentryConfig } = require('@sentry/nextjs')
const { version } = require('./package.json')

import('./src/env.mjs')

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    version,
  },
})

const sentryConfig = {
  hideSourceMaps: true,
  widenClientFileUpload: true,
  transpileClientSDK: true,
  release: `retroloop@${version}`,
  silent: false,
}

const sentryWebpackOptions = {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
}

module.exports = withSentryConfig(
  nextConfig,
  sentryConfig,
  sentryWebpackOptions,
)
