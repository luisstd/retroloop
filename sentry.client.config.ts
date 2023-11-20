import { CaptureConsole, Debug, ExtraErrorData, HttpClient } from '@sentry/integrations'
import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,
  environment: process.env.VERCEL_ENV,
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.BrowserProfilingIntegration(),
    new Sentry.Replay(),
    new CaptureConsole(),
    new Debug(),
    new ExtraErrorData(),
    new HttpClient(),
  ],
})
