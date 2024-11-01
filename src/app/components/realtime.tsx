import Spaces from '@ably/spaces'
import { SpacesProvider } from '@ably/spaces/react'
import { Realtime } from 'ably'
import { AblyProvider } from 'ably/react'
import React from 'react'

import { env } from '@/env.mjs'

interface RealtimeProviderProps {
  children: React.ReactNode
}

const client = new Realtime({
  authUrl: env.NEXT_PUBLIC_ABLY_BASE_URL + '/api/ably',
  authMethod: 'POST',
  clientId: 'retroloop',
  logLevel: 1,
})
const spaces = new Spaces(client)

export default function RealtimeProvider({ children }: RealtimeProviderProps) {
  return (
    <AblyProvider client={client}>
      <SpacesProvider client={spaces}>{children}</SpacesProvider>
    </AblyProvider>
  )
}
