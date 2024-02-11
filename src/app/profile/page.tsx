'use client'
import { useSession } from 'next-auth/react'

import { Feedback } from '@/app/components/feedback/feedback'
import { Loader } from '@/app/components/loader/loader'
import { ProfileSection } from '@/app/components/profile-section/profile-section'
import { SignUpForm } from '@/app/components/sign-up/sign-up-form'

export default function Profile() {
  const { data: session, status } = useSession()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <>
      {session?.user?.email ? <Feedback userEmail={session.user.email} /> : null}

      {isSignedUp && session?.user ? (
        <ProfileSection />
      ) : !isSignedUp ? (
        <SignUpForm />
      ) : (
        <Loader isLoading={!isSignedUp && !session?.user} fullHeight />
      )}
    </>
  )
}
