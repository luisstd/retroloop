'use client'
/**
 * Global error boundary for the root layout
 * This catches errors that occur in the root layout and above
 */

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

import { Button } from '@/app/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui/card'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Capture the error with additional context
    Sentry.withScope((scope) => {
      scope.setTag('errorType', 'globalError')
      scope.setLevel('fatal')
      scope.setContext('globalError', {
        digest: error.digest,
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
      })

      Sentry.captureException(error)
    })
  }, [error])

  return (
    <html lang='en'>
      <body>
        <div className='bg-background flex min-h-screen items-center justify-center p-4'>
          <Card className='w-full max-w-lg'>
            <CardHeader>
              <CardTitle className='text-destructive text-center text-2xl font-bold'>
                Critical Application Error
              </CardTitle>
              <CardDescription className='text-center'>
                A critical error occurred that prevented the application from
                functioning properly. Our team has been automatically notified.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='bg-destructive/10 border-destructive/20 rounded-md border p-4'>
                <p className='text-destructive text-sm font-medium'>
                  Error Information
                </p>
                <p className='text-muted-foreground mt-1 text-xs'>
                  {error.digest && `Error ID: ${error.digest}`}
                </p>
                <p className='text-muted-foreground text-xs'>
                  Timestamp: {new Date().toLocaleString()}
                </p>
              </div>

              <div className='flex flex-col gap-2'>
                <Button onClick={reset} className='w-full'>
                  Try to Recover
                </Button>
                <Button
                  variant='outline'
                  onClick={() => (window.location.href = '/')}
                  className='w-full'
                >
                  Go to Homepage
                </Button>
                <Button
                  variant='ghost'
                  onClick={() =>
                    Sentry.showReportDialog({
                      title: 'Critical Error Report',
                      subtitle: 'Help us understand what went wrong',
                      subtitle2: 'Any additional information would be helpful.',
                    })
                  }
                  className='w-full'
                >
                  Report This Issue
                </Button>
              </div>

              {process.env.NODE_ENV === 'development' && (
                <details className='bg-muted mt-4 rounded p-3 text-sm'>
                  <summary className='cursor-pointer font-medium'>
                    Error Details (Development)
                  </summary>
                  <div className='mt-2 space-y-2'>
                    <div>
                      <strong>Message:</strong> {error.message}
                    </div>
                    <div>
                      <strong>Stack:</strong>
                      <pre className='bg-background mt-1 overflow-auto rounded p-2 text-xs'>
                        {error.stack}
                      </pre>
                    </div>
                  </div>
                </details>
              )}
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  )
}
