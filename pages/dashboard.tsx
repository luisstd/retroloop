import { IconFaceIdError } from '@tabler/icons-react'
import { Feedback } from 'components/feedback/feedback'
import { MenuBar } from 'components/menu-bar/menu-bar'
import { RetroSection } from 'components/retro-section/retro-section'
import { SignUpForm } from 'components/sign-up/sign-up-form'
import { TeamSection } from 'components/team-section/team-section'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession } from 'next-auth/react'

const Dashboard: NextPage = () => {
  const { data: session, status } = useSession()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <div className='flex flex-col items-center'>
      <Head>
        <link rel='icon' href='/favicon.ico' />

        <title>Retroloop - Dashboard</title>

        <meta name='title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          name='description'
          content='Retroloop is a simple, open-source tool for creating a feedback loop that drives continuous team improvement'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://retroloop.io/' />
        <meta property='og:title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          property='og:description'
          content='Retroloop is a simple, open-source tool for creating a feedback loop that drives continuous team improvement'
        />
        <meta property='og:image' content='https://retroloop.io/preview.webp' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          property='twitter:description'
          content='Retroloop is a simple, open-source tool for creating a feedback loop that drives continuous team improvement'
        />
        <meta property='twitter:image' content='https://retroloop.io/preview.webp' />
      </Head>

      {session?.user?.email ? <Feedback userEmail={session.user.email} /> : null}

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
