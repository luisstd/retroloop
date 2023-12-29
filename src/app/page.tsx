'use client'
import {
  IconAffiliate,
  IconBrandGithub,
  IconBrandOpenSource,
  IconBulb,
  IconLogin,
  IconRepeat,
  IconUsers,
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'

import { Footer } from '@/app/components/footer/footer'
import { Button } from '@/app/ui/button/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/ui/card/card'

export default function Landingpage() {
  const { data: session, status } = useSession()
  const { resolvedTheme, theme } = useTheme()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <div className='flex w-full flex-col items-center'>
      <section className='row-start-1 m-5 flex flex-col items-center gap-5 px-2'>
        <div className='flex items-center'>
          <Image src='/logo.svg' alt='Retroloop logo' width={132} height={132} />
          <h1 className='scroll-m-20 text-4xl font-extrabold italic tracking-tight lg:text-5xl'>
            retroloop
          </h1>
        </div>
        <h1 className='scroll-m-20 pb-2 text-center text-4xl font-semibold tracking-tight first:mt-0'>
          Agile retrospectives made easy
        </h1>
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

      <h2 className='my-5 scroll-m-20 text-4xl font-semibold tracking-tight'>Features</h2>

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

      <h2 className='my-5 scroll-m-20 text-4xl font-semibold tracking-tight'>Pricing</h2>

      <div className='flex w-full flex-col items-center justify-center md:w-10/12 md:flex-row'>
        <Card className='m-5'>
          <CardHeader className='flex  flex-col gap-3 p-10'>
            <CardTitle className='flex items-center justify-start gap-6'>
              <span className='scroll-m-20 text-4xl font-semibold tracking-tight'>Standard</span>
            </CardTitle>
            <CardDescription className='prose flex items-center gap-1 text-foreground'>
              <span className='scroll-m-20 text-3xl font-semibold tracking-tight'>0€</span>
              <span>/month</span>
            </CardDescription>
            <Button>Get started for free</Button>
            <div className='prose text-lg text-foreground'>
              <ul>
                <li>Create up to 3 retrospectives</li>
                <li>3 month access to retrospectives</li>
              </ul>
            </div>
          </CardHeader>
        </Card>
        <Card className='m-5 '>
          <CardHeader className='flex flex-col gap-3 p-10'>
            <CardTitle className='flex items-center justify-start gap-6'>
              <span className='scroll-m-20 text-4xl font-semibold tracking-tight'>Unlimited</span>
            </CardTitle>
            <CardDescription className='prose flex items-center gap-1 text-foreground'>
              <span className='scroll-m-20 text-3xl font-semibold tracking-tight'>4.99€</span>
              <span>/month</span>
            </CardDescription>
            <Button>Get Retroloop Unlimited</Button>
            <div className='prose text-lg text-foreground'>
              <ul>
                <li>Create unlimited retrospectives</li>
                <li>Unlimited access to retrospectives</li>
              </ul>
            </div>
          </CardHeader>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
