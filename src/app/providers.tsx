'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import * as Ably from 'ably'
import { AblyProvider, ChannelProvider } from 'ably/react'
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
  const ably = new Ably.Realtime({ authUrl: 'api/ably', authMethod: 'GET' })

  return (
    <SessionProvider session={session}>
      <PlausibleProvider domain='retroloop.io' customDomain='stats.retroloop.io'>
        <ThemeProvider attribute='class' enableColorScheme={true} enableSystem={true}>
          <QueryClientProvider client={queryClient}>
            <AblyProvider client={ably}>
              <ChannelProvider channelName='retrospective'>{children}</ChannelProvider>
            </AblyProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </PlausibleProvider>
    </SessionProvider>
  )
}
