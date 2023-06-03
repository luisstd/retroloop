/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')
const { withSentryConfig } = require('@sentry/nextjs')
const { version } = require('./package.json')

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
})

module.exports = withSentryConfig(nextConfig, {
  silent: true,
  hideSourcemaps: true,
  tunnel: '/sentry',
  release: version,
  environment: process.env.NODE_ENV,
})
