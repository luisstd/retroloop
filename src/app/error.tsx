'use client'
/**
 * This page is loaded by Next.js:
 *  - on the server, when data-fetching methods throw or reject
 *  - on the client, when `getInitialProps` throws or rejects
 *  - on the client, when a React lifecycle method throws or rejects, and it's
 *    caught by the built-in Next.js error boundary
 */

import * as Sentry from '@sentry/nextjs'
import type { NextPage } from 'next'
import NextErrorComponent, { type ErrorProps } from 'next/error'
import { useEffect } from 'react'

import { Button } from '@/app/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui/card'

const CustomErrorComponent: NextPage<
  ErrorProps & { hasGetInitialPropsRun?: boolean; err?: Error }
> = ({ statusCode, hasGetInitialPropsRun, err }) => {
  useEffect(() => {
    if (!hasGetInitialPropsRun && err) {
      // Client-side error that wasn't caught by getInitialProps
      Sentry.captureException(err)
    }
  }, [hasGetInitialPropsRun, err])

  const isClientError = statusCode >= 400 && statusCode < 500
  const isServerError = statusCode >= 500

  return (
    <div className='flex min-h-screen items-center justify-center p-4'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-center text-2xl font-bold'>
            {statusCode ? `Error ${statusCode}` : 'Application Error'}
          </CardTitle>
          <CardDescription className='text-center'>
            {isClientError &&
              'The requested page could not be found or accessed.'}
            {isServerError &&
              'A server error occurred. Our team has been notified.'}
            {!statusCode && 'An unexpected error occurred on the client side.'}
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex flex-col gap-2'>
            <Button onClick={() => window.location.reload()} className='w-full'>
              Reload Page
            </Button>
            <Button
              variant='outline'
              onClick={() => window.history.back()}
              className='w-full'
            >
              Go Back
            </Button>
            <Button
              variant='ghost'
              onClick={() => Sentry.showReportDialog()}
              className='w-full'
            >
              Report Issue
            </Button>
          </div>

          {process.env.NODE_ENV === 'development' && err && (
            <details className='bg-muted mt-4 rounded p-2 text-sm'>
              <summary className='cursor-pointer font-medium'>
                Error Details (Development)
              </summary>
              <pre className='mt-2 overflow-auto text-xs'>{err.stack}</pre>
            </details>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

CustomErrorComponent.getInitialProps = async (contextData) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(contextData)

  // This will contain the status code of the response
  const errorInitialProps =
    await NextErrorComponent.getInitialProps(contextData)

  return {
    ...errorInitialProps,
    hasGetInitialPropsRun: true,
  }
}

export default CustomErrorComponent
