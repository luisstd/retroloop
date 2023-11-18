import * as Sentry from '@sentry/nextjs'
import { ProfilingIntegration } from '@sentry/profiling-node'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  debug: false,
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  integrations: [new ProfilingIntegration()],
})
