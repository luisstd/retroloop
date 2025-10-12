import * as Sentry from '@sentry/nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  return Sentry.withServerActionInstrumentation(
    'middleware',
    {
      recordResponse: true,
    },
    async () => {
      const response = NextResponse.next()

      if (process.env.NODE_ENV === 'development') {
        response.headers.set('x-debug-path', request.nextUrl.pathname)
        response.headers.set('x-debug-method', request.method)
      }

      Sentry.setContext('request', {
        url: request.url,
        method: request.method,
        pathname: request.nextUrl.pathname,
        search: request.nextUrl.search,
        userAgent: request.headers.get('user-agent'),
        ip: request.headers.get('x-forwarded-for'),
      })

      if (request.nextUrl.pathname.startsWith('/api/')) {
        Sentry.setTag('route.type', 'api')
        Sentry.setTag('api.endpoint', request.nextUrl.pathname)
      } else {
        Sentry.setTag('route.type', 'page')
      }

      return response
    },
  )
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|monitoring).*)'],
}
