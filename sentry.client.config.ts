import {
  captureConsoleIntegration,
  debugIntegration,
  extraErrorDataIntegration,
  httpClientIntegration,
} from '@sentry/integrations'
import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.browserTracingIntegration({
      enableInp: true,
    }),
    Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration(),
    captureConsoleIntegration(),
    debugIntegration(),
    extraErrorDataIntegration(),
    httpClientIntegration(),
  ],
})
