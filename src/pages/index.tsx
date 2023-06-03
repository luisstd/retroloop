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
import { useTheme } from 'next-themes'

import { Footer } from '@/components/footer/footer'
import { MenuBar } from '@/components/menu-bar/menu-bar'

const Landingpage: NextPage = () => {
  const theme = useTheme()

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

      <MenuBar />

      <main className='flex flex-col items-center w-screen h-screen max-w-screen-2xl'>
        <section className='flex flex-col items-center w-full row-start-1 gap-5 px-2 my-5 mb-20'>
          <div className='flex items-center gap-2'>
            <IconInfinity size={72} />
            <h1 className='text-5xl italic font-semibold'>retroloop</h1>
          </div>
          <span className='text-4xl font-medium text-center'>Agile retrospectives made easy</span>
          <p className='text-2xl text-center'>
            Create an effective feedback loop for continuous team improvement
          </p>
          <div className='flex gap-4'>
            <Link href={'/dashboard'}>
              <button className='p-2 text-xl font-bold btn bg-base-light dark:bg-base-dark'>
                Get started
              </button>
            </Link>

            <Link href={'https://github.com/luisstd/retroloop'}>
              <button className='flex items-center gap-2 p-2 text-xl font-bold btn bg-base-light dark:bg-base-dark'>
                <IconBrandGithub size={24} />
                Github
              </button>
            </Link>
          </div>
        </section>

        <section className='grid w-5/6 grid-cols-1 my-2 border-2 rounded-md shadow-md w grid-rows-auto md:grid-cols-2 md:w-11/12 min-h-min max-h-max border-base-dark dark:border-base-light bg-base-light dark:bg-base-dark'>
          <div className='flex flex-col w-full col-start-1 row-start-1 gap-3 p-10'>
            <h2 className='mb-5 font-bold text-accent-light dark:text-accent-dark'>
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
              <button className='self-start w-full p-2 font-bold btn'>Start retrospective</button>
            </Link>
          </div>

          <div className='flex flex-col items-center w-full gap-6 p-10 md:row-start-1 md:col-start-2'>
            <div className='text-start'>
              <div className='flex items-center gap-2 mb-1'>
                <IconLogin size={32} className='text-accent-light dark:text-accent-dark' />
                <h3 className='font-bold'>Seamless login</h3>
              </div>
              <p>
                Get started quickly via e-mail login or an OAuth provider of your choice. Jump right
                into conducting simple retrospectives.
              </p>
            </div>

            <div className='text-start'>
              <div className='flex items-center gap-2 mb-1'>
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
              <div className='flex items-center gap-2 mb-1'>
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

        <section className='grid w-5/6 my-2 border-2 rounded-md shadow-md md:grid-cols-2 md:w-11/12 min-h-min max-h-max border-base-dark dark:border-base-light bg-base-light dark:bg-base-dark'>
          <div className='flex flex-col row-start-1 gap-3 p-10 md:col-start-2'>
            <h2 className='mb-5 font-bold text-accent-light dark:text-accent-dark'>
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
              <button className='self-start p-2 font-bold btn'>Invite team member</button>
            </Link>
          </div>

          <div className='flex flex-col items-center col-start-1 row-start-2 gap-6 p-10 md:row-start-1'>
            <div className=' text-start m'>
              <div className='flex items-center gap-2 mb-1'>
                <IconBulb size={32} className='text-accent-light dark:text-accent-dark' />
                <h3 className='font-bold'>Actionable insights</h3>
              </div>
              <p>
                Transform feedback into concrete action items that drive meaningful change and help
                your team reach its full potential.
              </p>
            </div>

            <div className='text-start'>
              <div className='flex items-center gap-2 mb-1'>
                <IconUsers size={32} className='text-accent-light dark:text-accent-dark' />
                <h3 className='font-bold'>Built for modern teams</h3>
              </div>
              <p>
                This retrospective tool is designed to support the diverse needs of today&apos;s
                agile teams, with a focus on simplicity, effectiveness, and collaboration.
              </p>
            </div>

            <div className='text-start'>
              <div className='flex items-center gap-2 mb-1'>
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
