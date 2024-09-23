import { Realtime } from 'ably'
import { AblyProvider } from 'ably/react'
import { name } from 'package.json'
import React from 'react'

import { env } from '@/env.mjs'

interface RealtimeProviderProps {
  children: React.ReactNode
}

export default function RealtimeProvider({ children }: RealtimeProviderProps) {
  const ablyClient = new Realtime({
    authUrl: env.NEXT_PUBLIC_ABLY_BASE_URL + '/api/ably',
    authMethod: 'POST',
    clientId: name,
    logLevel: 1,
  })

  return <AblyProvider client={ablyClient}>{children}</AblyProvider>
}
