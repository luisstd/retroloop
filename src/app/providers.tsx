'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'
import * as React from 'react'

export interface ProvidersProps {
  children: React.ReactNode
  session: Session | null
}

export function Providers({ children, session }: ProvidersProps) {
  const queryClient = new QueryClient()

  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider attribute='class' enableColorScheme={true} enableSystem={true}>
          <QueryClientProvider client={queryClient}>
            <PlausibleProvider domain='retroloop.io' customDomain='stats.retroloop.io'>
              {children}
            </PlausibleProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}
