import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  debug: false,
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
})
