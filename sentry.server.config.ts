import * as Sentry from '@sentry/nextjs'

import packageJson from './package.json'

const SENTRY_DSN = process.env.SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,
  environment: process.env.NODE_ENV,
  debug: process.env.NODE_ENV === 'development',
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  sendDefaultPii: false,
  release: `retroloop@${packageJson.version}`,

  integrations: [
    Sentry.prismaIntegration(),
    Sentry.httpIntegration(),
    Sentry.extraErrorDataIntegration({
      depth: 10,
    }),
    Sentry.consoleIntegration({
      levels: ['error', 'warn'],
    }),
    Sentry.modulesIntegration(),
    Sentry.contextLinesIntegration(),
    Sentry.localVariablesIntegration({
      captureAllExceptions: false,
    }),
  ],

  beforeSend(event) {
    if (process.env.NODE_ENV === 'production') {
      if (
        event.exception?.values?.[0]?.value?.includes('AbortError') ||
        event.exception?.values?.[0]?.value?.includes('NetworkError') ||
        event.exception?.values?.[0]?.value?.includes('Hydration')
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
      component: 'server',
      runtime: 'nodejs',
    },
  },

  spotlight: process.env.NODE_ENV === 'development',
})
