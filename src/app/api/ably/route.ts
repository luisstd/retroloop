import Ably from 'ably/promises'

export async function GET() {
  const client = new Ably.Realtime(process.env.ABLY_API_KEY as string)
  const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'retroloop' })
  return Response.json(tokenRequestData)
}
