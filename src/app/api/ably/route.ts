import * as Ably from 'ably'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  if (!process.env.ABLY_API_KEY) {
    return NextResponse.json(
      {
        errorMessage: `Missing ABLY_API_KEY environment variable.`,
      },
      {
        status: 500,
        headers: new Headers({
          'content-type': 'application/json',
        }),
      },
    )
  }

  const clientId =
    (await req.formData()).get('clientId')?.toString() ||
    process.env.DEFAULT_CLIENT_ID ||
    'NO_CLIENT_ID'
  const client = new Ably.Rest(process.env.ABLY_API_KEY)
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: clientId,
  })
  return NextResponse.json(tokenRequestData)
}
