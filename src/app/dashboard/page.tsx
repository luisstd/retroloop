'use client'
import { useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { GridLoader } from 'react-spinners'

import { Feedback } from '@/app/components/feedback/feedback'
import { RetroSection } from '@/app/components/retro-section/retro-section'
import { SignUpForm } from '@/app/components/sign-up/sign-up-form'
import { TeamSection } from '@/app/components/team-section/team-section'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const { resolvedTheme } = useTheme()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <>
      {session?.user?.email ? <Feedback userEmail={session.user.email} /> : null}

      {isSignedUp && session?.user ? (
        <section className='flex w-full flex-col items-center gap-10'>
          <RetroSection userId={session.user.id} />

          <TeamSection />
        </section>
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
