'use client'
import { useSession } from 'next-auth/react'

import { Feedback } from '@/app/components/feedback/feedback'
import { Loader } from '@/app/components/loader/loader'
import { SignUpForm } from '@/app/components/sign-up/sign-up-form'
import { Retros } from '@/app/dashboard/retros/retros'
import { Team } from '@/app/dashboard/team/team'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  if (!isSignedUp) {
    return <SignUpForm />
  }

  if (!session?.user) {
    return <Loader isLoading fullHeight />
  }

  return (
    <>
      {session.user.email && <Feedback userEmail={session.user.email} />}
      <Retros userId={session.user.id} />
      <Team />
    </>
  )
}
