import { init, prismaIntegration } from '@sentry/nextjs'

export function register() {
  const SENTRY_DSN =
    process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    init({
      dsn: SENTRY_DSN,
      environment: process.env.NODE_ENV,
      debug: false,
      tracesSampleRate: 1.0,
      profilesSampleRate: 1.0,
      integrations: [prismaIntegration()],
    })
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    init({
      dsn: SENTRY_DSN,
      environment: process.env.NODE_ENV,
      tracesSampleRate: 1,
      debug: false,
    })
  }
}
