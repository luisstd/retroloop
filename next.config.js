/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withPlausibleProxy } = require('next-plausible')

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
