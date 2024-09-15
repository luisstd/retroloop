'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { Feedback } from '@/app/components/feedback/feedback'
import { SignUpForm } from '@/app/components/sign-up/sign-up-form'
import { Retros } from '@/app/dashboard/retros/retros'
import { Team } from '@/app/dashboard/team/team'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const isAuthenticated = status === 'authenticated'
  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  if (!isAuthenticated) {
    const callbackURL = encodeURIComponent(pathname)
    router.push(`/auth/login?callbackurl=${callbackURL}`)
  }

  if (!isSignedUp) {
    return <SignUpForm />
  }

  return (
    <>
      {session.user.email && <Feedback userEmail={session.user.email} />}
      <Retros userId={session.user.id} />
      <Team />
    </>
  )
}
