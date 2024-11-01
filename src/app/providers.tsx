'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import dynamic from 'next/dynamic'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'
import * as React from 'react'

const RealtimeProvider = dynamic(() => import('./components/realtime'), {
  ssr: false,
})

export interface ProvidersProps {
  children: React.ReactNode
  session: Session | null
}

const queryClient = new QueryClient()

export function Providers({ children, session }: ProvidersProps) {
  return (
    <SessionProvider session={session}>
      <PlausibleProvider
        domain='retroloop.io'
        customDomain='stats.retroloop.io'
      >
        <ThemeProvider
          attribute='class'
          enableColorScheme={true}
          enableSystem={true}
        >
          <QueryClientProvider client={queryClient}>
            <RealtimeProvider>{children}</RealtimeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </PlausibleProvider>
    </SessionProvider>
  )
}
