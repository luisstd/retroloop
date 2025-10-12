import * as Sentry from '@sentry/nextjs'

import packageJson from './package.json'

const SENTRY_DSN = process.env.SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,
  environment: process.env.NODE_ENV,
  debug: process.env.NODE_ENV === 'development',
  tracesSampleRate: 1.0,
  sendDefaultPii: false,
  release: `retroloop@${packageJson.version}`,

  integrations: [
    Sentry.httpIntegration(),
    Sentry.extraErrorDataIntegration({
      depth: 5,
    }),
  ],

  beforeSend(event) {
    if (process.env.NODE_ENV === 'production') {
      if (
        event.exception?.values?.[0]?.value?.includes('AbortError') ||
        event.exception?.values?.[0]?.value?.includes('NetworkError')
      ) {
        return null
      }
    }
    return event
  },

  beforeSendTransaction(transaction) {
    if (
      transaction.transaction?.includes('/api/health') ||
      transaction.transaction?.includes('/_next/static')
    ) {
      return null
    }
    return transaction
  },

  initialScope: {
    tags: {
      component: 'edge',
      runtime: 'edge',
    },
  },
})
