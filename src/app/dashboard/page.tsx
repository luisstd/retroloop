'use client'
import { useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { GridLoader } from 'react-spinners'

import { Feedback } from '@/app/components/feedback/feedback'
import { SignUpForm } from '@/app/components/sign-up/sign-up-form'
import { Retros } from '@/app/dashboard/retros/retros'
import { Team } from '@/app/dashboard/team/team'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const { resolvedTheme } = useTheme()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <>
      {session?.user?.email ? <Feedback userEmail={session.user.email} /> : null}

      {isSignedUp && session?.user ? (
        <section className='flex w-full flex-col items-center gap-10'>
          <Retros userId={session.user.id} />
          <Team />
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
