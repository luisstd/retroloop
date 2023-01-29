/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')
const { withSentryConfig } = require('@sentry/nextjs')

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = withSentryConfig(nextConfig, { silent: true }, { hideSourcemaps: true })
