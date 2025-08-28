import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const envelope = await request.text()
    const pieces = envelope.split('\n')
    const header = JSON.parse(pieces[0] || '{}')

    const { host, pathname } = new URL(header.dsn || '')
    const projectId = pathname?.replace('/', '')

    if (!projectId) {
      return new Response('Invalid DSN', { status: 400 })
    }

    const sentryUrl = `https://${host}/api/${projectId}/envelope/`

    const response = await fetch(sentryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-sentry-envelope',
      },
      body: envelope,
    })

    return new Response(null, {
      status: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
      },
    })
  } catch (error) {
    console.error('Sentry tunnel error:', error)
    return new Response('Tunnel error', { status: 500 })
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
    },
  })
}
