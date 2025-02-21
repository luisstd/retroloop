import {
  browserProfilingIntegration,
  browserTracingIntegration,
  captureConsoleIntegration,
  extraErrorDataIntegration,
  httpClientIntegration,
  init,
  replayIntegration,
} from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

init({
  dsn: SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    browserTracingIntegration({
      enableInp: true,
    }),
    browserProfilingIntegration(),
    replayIntegration(),
    captureConsoleIntegration(),
    extraErrorDataIntegration(),
    httpClientIntegration(),
  ],
})
