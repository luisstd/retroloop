import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import Login from '@/app/auth/login/page'
import { auth } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Login - Retroloop',
  description: 'Sign in to your Retroloop account',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default async function LoginLayout() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) {
    redirect('/dashboard')
  } else {
    return <Login />
  }
}
