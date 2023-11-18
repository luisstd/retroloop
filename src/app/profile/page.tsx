'use client'
import { useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { GridLoader } from 'react-spinners'

import { Feedback } from '@/app/components/feedback/feedback'
import { ProfileSection } from '@/app/components/profile-section/profile-section'
import { SignUpForm } from '@/app/components/sign-up/sign-up-form'

export default function Profile() {
  const { data: session, status } = useSession()
  const { resolvedTheme } = useTheme()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <>
      {session?.user?.email ? <Feedback userEmail={session.user.email} /> : null}

      {isSignedUp && session?.user ? (
        <ProfileSection />
      ) : !isSignedUp ? (
        <SignUpForm />
      ) : (
        <div className='grid h-screen place-items-center'>
          <GridLoader
            color={resolvedTheme === 'light' ? 'black' : 'white'}
            loading={!isSignedUp && !session?.user}
            size={15}
            aria-label='Loading Spinner'
          />
        </div>
      )}
    </>
  )
}
