import { IconFaceIdError } from '@tabler/icons-react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession } from 'next-auth/react'

import MenuBar from '@/components/MenuBar/MenuBar'
import RetroSection from '@/components/RetroSection/RetroSection'
import SignUpForm from '@/components/SignUp/SignUpForm'
import TeamSection from '@/components/TeamSection/TeamSection'

const Dashboard: NextPage = () => {
  const { data: session, status } = useSession()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <div className='flex flex-col items-center'>
      <Head>
        <title>Dashboard</title>
        <meta name='description' content='Agile Retrospectives' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MenuBar />

      {isSignedUp && session?.user ? (
        <main className='grid w-screen h-screen mx-5 mb-10 place-items-center max-w-screen-2xl'>
          <RetroSection userId={session.user.id} />

          <TeamSection />
        </main>
      ) : (
        <SignUpForm />
      )}

      {!isSignedUp && !session?.user ? (
        <div className='flex flex-col items-center'>
          <IconFaceIdError size={122} className='m-5' />
          <p className='text-xl'>Not authenticated, please log in first</p>
        </div>
      ) : null}
    </div>
  )
}

export default Dashboard
