import {
  IconAffiliate,
  IconBrandGithub,
  IconBrandOpenSource,
  IconBulb,
  IconInfinity,
  IconLogin,
  IconRepeat,
  IconUsers,
} from '@tabler/icons-react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'

import { Footer } from '@/components/footer/footer'
import { MenuBar } from '@/components/menu-bar/menu-bar'

const Landingpage: NextPage = () => {
  const theme = useTheme()
  const { data: session, status } = useSession()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <div
      className={`${
        theme.resolvedTheme === 'dark'
          ? 'landing-pattern-dark grid justify-center'
          : 'landing-pattern-light grid justify-center'
      }`}
    >
      <Head>
        <link rel='icon' href='/favicon.ico' />

        <title>Retroloop - Agile retrospectives made easy</title>

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

      <main className='flex h-screen w-screen max-w-screen-2xl flex-col items-center'>
        <section className='row-start-1 my-5 mb-20 flex w-full flex-col items-center gap-5 px-2'>
          <div className='flex items-center gap-2'>
            <IconInfinity size={72} />
            <h1 className='text-5xl font-semibold italic'>retroloop</h1>
          </div>
          <span className='text-center text-4xl font-medium'>Agile retrospectives made easy</span>
          <p className='text-center text-2xl'>
            Create an effective feedback loop for continuous team improvement
          </p>
          <div className='flex gap-4'>
            <Link href={'/dashboard'}>
              {isSignedUp ? (
                <button className='btn bg-base-light dark:bg-base-dark p-2 text-xl font-bold'>
                  Get started
                </button>
              ) : (
                <button
                  onClick={() => signIn()}
                  className='btn bg-base-light dark:bg-base-dark p-2 text-xl font-bold'
                >
                  Get started
                </button>
              )}
            </Link>

            <Link href={'https://github.com/luisstd/retroloop'}>
              <button className='btn bg-base-light dark:bg-base-dark flex items-center gap-2 p-2 text-xl font-bold'>
                <IconBrandGithub size={24} />
                Github
              </button>
            </Link>
          </div>
        </section>

        <section className='w grid-rows-auto border-base-dark bg-base-light dark:border-base-light dark:bg-base-dark my-2 grid max-h-max min-h-min w-5/6 grid-cols-1 rounded-md border-2 shadow-md md:w-11/12 md:grid-cols-2'>
          <div className='col-start-1 row-start-1 flex w-full flex-col gap-3 p-10'>
            <h2 className='text-accent-light dark:text-accent-dark mb-5 font-bold'>
              A platform for effective retrospectives
            </h2>
            <div className='flex items-center gap-6 md:justify-start'>
              <IconInfinity size={72} className='block md:hidden' />
              <h2 className='text-2xl font-bold md:text-4xl'>Simplify your retrospectives</h2>
            </div>
            <p className='my-5 text-lg'>
              For teams of any size and projects in any domain, this retrospective tool makes it
              easy to gather feedback, identify areas for improvement, and boost your team&apos;s
              performance.
            </p>

            <Link href={'/dashboard'} className='max-w-max'>
              {isSignedUp ? (
                <button className='btn w-full self-start p-2 font-bold'>Start retrospective</button>
              ) : (
                <button onClick={() => signIn()} className='btn w-full self-start p-2 font-bold'>
                  Start retrospective
                </button>
              )}
            </Link>
          </div>

          <div className='flex w-full flex-col items-center gap-6 p-10 md:col-start-2 md:row-start-1'>
            <div className='text-start'>
              <div className='mb-1 flex items-center gap-2'>
                <IconLogin size={32} className='text-accent-light dark:text-accent-dark' />
                <h3 className='font-bold'>Seamless login</h3>
              </div>
              <p>
                Get started quickly via e-mail login or an OAuth provider of your choice. Jump right
                into conducting simple retrospectives.
              </p>
            </div>

            <div className='text-start'>
              <div className='mb-1 flex items-center gap-2'>
                <IconBrandOpenSource
                  size={32}
                  className='text-accent-light dark:text-accent-dark'
                />
                <h3 className='font-bold'>Open-source & self-hostable</h3>
              </div>
              <p>
                Host the tool on your own infrastructure and benefit from the open-source nature
                that allows for customization and contribution.
              </p>
            </div>

            <div className='text-start'>
              <div className='mb-1 flex items-center gap-2'>
                <IconRepeat size={32} className='text-accent-light dark:text-accent-dark' />
                <h3 className='font-bold'>Straightforward retrospectives</h3>
              </div>
              <p>
                A user-friendly interface makes it effortless to gather and organize feedback,
                ensuring your retrospectives are focused and productive.
              </p>
            </div>
          </div>
        </section>

        <section className='border-base-dark bg-base-light dark:border-base-light dark:bg-base-dark my-2 grid max-h-max min-h-min w-5/6 rounded-md border-2 shadow-md md:w-11/12 md:grid-cols-2'>
          <div className='row-start-1 flex flex-col gap-3 p-10 md:col-start-2'>
            <h2 className='text-accent-light dark:text-accent-dark mb-5 font-bold'>
              A resource for continuous improvement
            </h2>
            <div className='flex items-center justify-center gap-6 md:justify-start'>
              <IconInfinity size={72} className='block md:hidden' />
              <h2 className='text-2xl font-bold md:text-4xl'>Improve collaboration</h2>
            </div>
            <p className='my-5 text-lg'>
              Leverage Retroloop to identify opportunities for growth, streamline processes, and
              foster a culture of continuous improvement.
            </p>

            <Link href={'/dashboard'} className='max-w-max'>
              {isSignedUp ? (
                <button className='btn self-start p-2 font-bold'>Invite team member</button>
              ) : (
                <button onClick={() => signIn()} className='btn self-start p-2 font-bold'>
                  Invite team member
                </button>
              )}
            </Link>
          </div>

          <div className='col-start-1 row-start-2 flex flex-col items-center gap-6 p-10 md:row-start-1'>
            <div className=' m text-start'>
              <div className='mb-1 flex items-center gap-2'>
                <IconBulb size={32} className='text-accent-light dark:text-accent-dark' />
                <h3 className='font-bold'>Actionable insights</h3>
              </div>
              <p>
                Transform feedback into concrete action items that drive meaningful change and help
                your team reach its full potential.
              </p>
            </div>

            <div className='text-start'>
              <div className='mb-1 flex items-center gap-2'>
                <IconUsers size={32} className='text-accent-light dark:text-accent-dark' />
                <h3 className='font-bold'>Built for modern teams</h3>
              </div>
              <p>
                This retrospective tool is designed to support the diverse needs of today&apos;s
                agile teams, with a focus on simplicity, effectiveness, and collaboration.
              </p>
            </div>

            <div className='text-start'>
              <div className='mb-1 flex items-center gap-2'>
                <IconAffiliate size={32} className='text-accent-light dark:text-accent-dark' />
                <h3 className='font-bold'>Transparent & collaborative</h3>
              </div>
              <p>
                Encourage open communication and collaboration by making your retrospectives
                transparent and inclusive for every team member.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default Landingpage
