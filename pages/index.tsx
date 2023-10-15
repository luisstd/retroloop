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

import { Footer } from '@/components/footer/footer'
import { Button } from '@/ui/button/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card/card'

const Landingpage: NextPage = () => {
  const { data: session, status } = useSession()

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
        <meta property='og:image' content='https://retroloop.io/preview.webp' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          property='twitter:description'
          content='Retroloop is a simple, open-source tool for facilitating agile retrospectives'
        />
        <meta property='twitter:image' content='https://retroloop.io/preview.webp' />
      </Head>

      <section className='row-start-1 m-5 mb-20 flex flex-col items-center gap-5 px-2'>
        <div className='flex items-center gap-2'>
          <IconInfinity size={72} />
          <h1 className='text-5xl font-semibold italic'>retroloop</h1>
        </div>
        <span className='text-center text-4xl font-medium'>Agile retrospectives made easy</span>
        <p className='text-center text-2xl'>
          Create an effective feedback loop for continuous team improvement
        </p>
        <div className='flex gap-4'>
          <Link href={'/dashboard'} className='max-w-max'>
            <Button onClick={!isSignedUp ? () => signIn() : undefined}>Get started</Button>
          </Link>

          <Link href={'https://github.com/luisstd/retroloop'}>
            <Button variant='secondary'>
              <IconBrandGithub size={24} />
              Github
            </Button>
          </Link>
        </div>
      </section>

      <Card className='grid-rows-auto m-5 grid grid-cols-1 md:w-9/12 md:grid-cols-2'>
        <CardHeader className='col-start-1 row-start-1 flex w-full flex-col gap-3 p-10'>
          <CardDescription className='mb-5 font-bold text-primary '>
            A platform for effective retrospectives
          </CardDescription>
          <CardTitle className='flex items-center gap-6 md:justify-start'>
            <span className='text-2xl font-bold md:text-4xl'>Simplify your retrospectives</span>
          </CardTitle>
          <p className='prose text-foreground '>
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
              <h3 className='font-bold'>Seamless login</h3>
            </div>
            <p className='prose text-foreground '>
              Get started quickly via e-mail login or an OAuth provider of your choice. Jump right
              into conducting simple retrospectives.
            </p>
          </div>

          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconBrandOpenSource size={32} className='text-primary ' />
              <h3 className='font-bold'>Open-source & self-hostable</h3>
            </div>
            <p className='prose text-foreground'>
              Host the tool on your own infrastructure and benefit from the open-source nature that
              allows for customization and contribution.
            </p>
          </div>

          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconRepeat size={32} className='text-primary ' />
              <h3 className='font-bold'>Straightforward retrospectives</h3>
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
          <CardDescription className='-light -dark mb-5 font-bold text-primary dark:text-primary'>
            A resource for continuous improvement
          </CardDescription>
          <CardTitle className='flex items-center justify-center gap-6 md:justify-start'>
            <span className='text-2xl font-bold md:text-4xl'>Improve collaboration</span>
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
              <h3 className='font-bold'>Actionable insights</h3>
            </div>
            <p className='prose text-foreground '>
              Transform feedback into concrete action items that drive meaningful change and help
              your team reach its full potential.
            </p>
          </div>

          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconUsers size={32} className='text-primary ' />
              <h3 className='font-bold'>Built for modern teams</h3>
            </div>
            <p className='prose text-foreground '>
              This retrospective tool is designed to support the diverse needs of today&apos;s agile
              teams, with a focus on simplicity, effectiveness, and collaboration.
            </p>
          </div>

          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconAffiliate size={32} className='text-primary ' />
              <h3 className='font-bold'>Transparent & collaborative</h3>
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
