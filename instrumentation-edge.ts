import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,
  environment: process.env.NODE_ENV,
  debug: process.env.NODE_ENV === 'development',
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  sendDefaultPii: true,
  release: `retroloop@${process.env.npm_package_version}`,

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
