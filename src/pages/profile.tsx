import { NextPage } from 'next'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { GridLoader } from 'react-spinners'
import { Feedback } from 'src/app/components/feedback/feedback'
import { ProfileSection } from 'src/app/components/profile-section/profile-section'
import { SignUpForm } from 'src/app/components/sign-up/sign-up-form'

const Profile: NextPage = () => {
  const { data: session, status } = useSession()
  const { resolvedTheme } = useTheme()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />

        <title>Retroloop - Profile</title>

        <meta name='title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          name='description'
          content='Retroloop is a simple, open-source tool for facilitating agile retrospectives'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://retroloop.io/' />
        <meta property='og:title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          property='og:description'
          content='Retroloop is a simple, open-source tool for facilitating agile retrospectives'
        />
        <meta property='og:image' content='https://retroloop.io/og.webp' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          property='twitter:description'
          content='Retroloop is a simple, open-source tool for facilitating agile retrospectives'
        />
        <meta property='twitter:image' content='https://retroloop.io/og.webp' />
      </Head>

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

export default Profile
