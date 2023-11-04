'use client'
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
import Image from 'next/image'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'

import { Footer } from '@/components/footer/footer'
import { Button } from '@/ui/button/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card/card'

const Landingpage: NextPage = () => {
  const { data: session, status } = useSession()
  const { resolvedTheme, theme } = useTheme()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <div className='flex w-full flex-col items-center'>
      <Head>
        <link rel='icon' href='/favicon.ico' />

        <title>Retroloop - Agile retrospectives made easy</title>

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

      <section className='row-start-1 m-5 flex flex-col items-center gap-5 px-2'>
        <div className='flex items-center gap-3'>
          <IconInfinity size={64} />
          <h1 className='scroll-m-20 text-4xl font-extrabold italic tracking-tight lg:text-5xl'>
            retroloop
          </h1>
        </div>
        <span className='scroll-m-20 pb-2 text-center text-4xl font-semibold tracking-tight first:mt-0'>
          Agile retrospectives made easy
        </span>
        <p className='pb-2 text-center text-xl text-muted-foreground'>
          Create an effective feedback loop for continuous team improvement
        </p>
        <div className='flex gap-4'>
          <Link href={'/dashboard'} className='max-w-max'>
            <Button onClick={!isSignedUp ? () => signIn() : undefined}>Get started</Button>
          </Link>

          <Link href={'https://github.com/luisstd/retroloop'}>
            <Button variant='secondary'>
              <IconBrandGithub size={24} className='mr-2' />
              Github
            </Button>
          </Link>
        </div>
        <Image
          className='hidden sm:block sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'
          src={
            resolvedTheme === 'light' || theme === 'light'
              ? '/preview-light.png'
              : '/preview-dark.png'
          }
          alt='Retroloop preview'
          width={1920}
          height={1080}
          priority
        />
      </section>

      <Card className='grid-rows-auto m-5 grid grid-cols-1 md:w-9/12 md:grid-cols-2'>
        <CardHeader className='col-start-1 row-start-1 flex w-full flex-col gap-3 p-10'>
          <CardDescription className='mb-5 font-semibold text-primary'>
            A platform for effective retrospectives
          </CardDescription>
          <CardTitle className='flex items-center justify-start gap-6'>
            <span className='scroll-m-20 text-4xl font-semibold tracking-tight'>
              Simplify your retrospectives
            </span>
          </CardTitle>
          <p className='prose text-foreground'>
            For teams of any size and projects in any domain, this retrospective tool makes it easy
            to gather feedback, identify areas for improvement, and boost your team&apos;s
            performance.
          </p>

          <Link href={'/dashboard'} className='max-w-max'>
            <Button onClick={!isSignedUp ? () => signIn() : undefined}>Start retrospective</Button>
          </Link>
        </CardHeader>

        <CardContent className='flex w-full flex-col items-center gap-6 p-10 md:col-start-2 md:row-start-1'>
          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconLogin size={32} className='text-primary ' />
              <h3 className='scroll-m-20 text-lg font-semibold tracking-tight'>Seamless login</h3>
            </div>
            <p className='prose text-foreground'>
              Get started quickly via e-mail login or an OAuth provider of your choice. Jump right
              into conducting simple retrospectives.
            </p>
          </div>

          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconBrandOpenSource size={32} className='text-primary' />
              <h3 className='scroll-m-20 text-lg font-semibold tracking-tight'>
                Open-source & self-hostable
              </h3>
            </div>
            <p className='prose text-foreground'>
              Host the tool on your own infrastructure and benefit from the open-source nature that
              allows for customization and contribution.
            </p>
          </div>

          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconRepeat size={32} className='text-primary ' />
              <h3 className='scroll-m-20 text-lg font-semibold tracking-tight'>
                Straightforward retrospectives
              </h3>
            </div>
            <p className='prose text-foreground '>
              A user-friendly interface makes it effortless to gather and organize feedback,
              ensuring your retrospectives are focused and productive.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className='grid-rows-auto m-5 grid grid-cols-1 md:w-9/12 md:grid-cols-2'>
        <CardHeader className='col-start-2 row-start-1 flex w-full flex-col gap-3 p-10'>
          <CardDescription className='mb-5 font-semibold text-primary'>
            A resource for continuous improvement
          </CardDescription>
          <CardTitle className='flex items-center justify-start gap-6'>
            <span className='scroll-m-20 text-4xl font-semibold tracking-tight'>
              Improve collaboration
            </span>
          </CardTitle>
          <p className='prose text-foreground '>
            Leverage Retroloop to identify opportunities for growth, streamline processes, and
            foster a culture of continuous improvement.
          </p>

          <Link href={'/dashboard'} className='max-w-max'>
            <Button onClick={!isSignedUp ? () => signIn() : undefined}>Invite team member</Button>
          </Link>
        </CardHeader>

        <CardContent className='col-start-2 row-start-2 flex flex-col items-center gap-6 p-10 md:col-start-1 md:row-start-1'>
          <div className=' m text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconBulb size={32} className='text-primary ' />
              <h3 className='scroll-m-20 text-lg font-semibold tracking-tight'>
                Actionable insights
              </h3>
            </div>
            <p className='prose text-foreground '>
              Transform feedback into concrete action items that drive meaningful change and help
              your team reach its full potential.
            </p>
          </div>

          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconUsers size={32} className='text-primary ' />
              <h3 className='scroll-m-20 text-lg font-semibold tracking-tight'>
                Built for modern teams
              </h3>
            </div>
            <p className='prose text-foreground '>
              This retrospective tool is designed to support the diverse needs of today&apos;s agile
              teams, with a focus on simplicity, effectiveness, and collaboration.
            </p>
          </div>

          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconAffiliate size={32} className='text-primary ' />
              <h3 className='scroll-m-20 text-lg font-semibold tracking-tight'>
                Transparent & collaborative
              </h3>
            </div>
            <p className='prose text-foreground '>
              Encourage open communication and collaboration by making your retrospectives
              transparent and inclusive for every team member.
            </p>
          </div>
        </CardContent>
      </Card>

      <Footer />
    </div>
  )
}

export default Landingpage
