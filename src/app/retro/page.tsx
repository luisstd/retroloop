'use client'
import { IconFaceIdError } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'

import { Feedback } from '@/app/components/feedback/feedback'
import { RetroView } from '@/app/components/retro-view/retro-view'
import { SignUpForm } from '@/app/components/sign-up/sign-up-form'

export default function Retro() {
  const { data: session, status } = useSession()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <div className='flex flex-col items-center'>
      {session?.user?.email ? <Feedback userEmail={session.user.email} /> : null}

      {isSignedUp && session?.user ? (
        <RetroView />
      ) : !isSignedUp ? (
        <SignUpForm />
      ) : (
        <div className='flex flex-col items-center'>
          <IconFaceIdError size={122} className='m-5' />
          <p className='text-xl'>Not authenticated, please log in first</p>
        </div>
      )}
    </div>
  )
}
