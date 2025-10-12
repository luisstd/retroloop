import * as Sentry from '@sentry/nextjs'

import packageJson from './package.json'

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,
  environment: process.env.NODE_ENV,
  debug: process.env.NODE_ENV === 'development',
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 1.0,
  sendDefaultPii: false,
  release: `retroloop@${packageJson.version}`,

  integrations: [
    Sentry.browserTracingIntegration({
      enableInp: true,
      enableLongTask: true,
      enableLongAnimationFrame: true,
    }),
    Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      maskAllInputs: true,
      blockAllMedia: false,
      mask: ['.sensitive-data', '[data-sensitive]'],
      block: ['.secret-content', '[data-secret]'],
    }),
    Sentry.feedbackIntegration({
      colorScheme: 'system',
      showBranding: false,
      autoInject: false,
      showName: true,
      showEmail: true,
      isNameRequired: false,
      isEmailRequired: false,
      themeDark: {
        background: '#0a0a0a',
        backgroundHover: '#1a1a1a',
        foreground: '#ffffff',
        border: '#333333',
      },
      themeLight: {
        background: '#ffffff',
        backgroundHover: '#f5f5f5',
        foreground: '#000000',
        border: '#e1e1e1',
      },
    }),
    Sentry.httpClientIntegration(),
    Sentry.captureConsoleIntegration({
      levels: ['error', 'warn', 'assert'],
    }),
    Sentry.extraErrorDataIntegration({
      depth: 10,
      captureErrorCause: true,
    }),
    Sentry.contextLinesIntegration(),
    Sentry.breadcrumbsIntegration({
      console: true,
      dom: true,
      fetch: true,
      history: true,
      sentry: true,
      xhr: true,
    }),
    Sentry.globalHandlersIntegration({
      onerror: true,
      onunhandledrejection: true,
    }),
    Sentry.linkedErrorsIntegration({
      key: 'cause',
      limit: 5,
    }),
  ],

  beforeSend(event, hint) {
    if (process.env.NODE_ENV === 'development') {
      return event
    }

    const error = hint.originalException

    if (error && error.toString().includes('AbortError')) {
      return null
    }

    if (error && error.toString().includes('NetworkError')) {
      return null
    }

    if (
      event.exception?.values?.[0]?.value?.includes('Hydration') ||
      event.exception?.values?.[0]?.value?.includes('ChunkLoadError') ||
      event.exception?.values?.[0]?.value?.includes('Script error')
    ) {
      return null
    }

    return event
  },

  beforeSendTransaction(transaction) {
    if (
      transaction.transaction?.includes('/_next/static') ||
      transaction.transaction?.includes('/favicon.ico') ||
      transaction.transaction?.includes('/robots.txt')
    ) {
      return null
    }

    if (transaction.tags) {
      transaction.tags.component = 'client'
      transaction.tags.runtime = 'browser'
    }

    return transaction
  },

  initialScope: {
    tags: {
      component: 'client',
      runtime: 'browser',
    },
    contexts: {
      app: {
        name: 'Retroloop',
        version: packageJson.version,
      },
    },
  },

  transport: Sentry.makeBrowserOfflineTransport(Sentry.makeFetchTransport),
  spotlight: process.env.NODE_ENV === 'development',
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
