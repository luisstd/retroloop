import Ably from 'ably/promises'
import { NextResponse } from 'next/server'

export async function GET() {
  const client = new Ably.Realtime(process.env.ABLY_API_KEY as string)
  const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'retroloop' })
  return NextResponse.json(tokenRequestData)
}
