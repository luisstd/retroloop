'use client'
import {
  IconAffiliate,
  IconArrowRight,
  IconBulb,
  IconHourglass,
  IconLogin,
  IconRepeat,
  IconUsers,
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'

import { Footer } from '@/app/components/footer/footer'
import { InviteDialog } from '@/app/dashboard/team/components/invite-dialog'
import { Badge } from '@/app/ui/badge'
import { Button } from '@/app/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui/card'
import { Separator } from '@/app/ui/separator'
import { api } from '@/trpc/react'
import { StripeBillingInterval } from '@/types/stripe-plan'

export default function Landingpage() {
  const { data: session, status } = useSession()
  const { resolvedTheme, theme } = useTheme()
  const router = useRouter()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  const { mutateAsync: createCheckoutSession } =
    api.stripe.createCheckoutSession.useMutation()

  return (
    <div className='flex w-full flex-col items-center'>
      <section className='row-start-1 m-5 flex flex-col items-center gap-7 px-2 sm:mt-12'>
        <h1 className='scroll-m-20 pb-2 text-center text-4xl font-semibold tracking-tight first:mt-0 md:text-5xl'>
          Agile retrospectives made easy
        </h1>
        <p className='text-muted-foreground pb-2 text-center text-xl md:text-2xl'>
          Enable effective feedback across remote & hybrid teams
        </p>
        <div className='flex flex-col items-center gap-4 sm:flex-row'>
          <InviteDialog
            ctaCopy='Invite a team member'
            ctaVariant='secondary'
            dialogTitle='Send an invite link'
            dialogDescription='Invite someone by sending them a login link'
            iconVariant='send'
          />
          <Link href={'/dashboard'} className='w-full'>
            <Button className='flex w-full items-center'>
              Start a feedback session
              <IconArrowRight size={18} className='ml-2' />
            </Button>
          </Link>
        </div>
        <Image
          className='hidden sm:block sm:max-w-(--breakpoint-sm) md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg) xl:max-w-(--breakpoint-xl)'
          src={
            resolvedTheme === 'light' || theme === 'light'
              ? '/preview-light.webp'
              : '/preview-dark.webp'
          }
          alt='Retroloop preview'
          title='Retroloop preview'
          width={1920}
          height={1080}
          priority
        />
      </section>

      <h2
        className='my-2 mt-8 scroll-m-20 text-3xl font-semibold tracking-tight'
        id='features'
      >
        Features
      </h2>

      <Card className='grid-rows-auto m-5 grid grid-cols-1 md:w-9/12 md:grid-cols-2'>
        <CardHeader className='col-start-1 row-start-1 flex w-full flex-col gap-3 p-10'>
          <CardDescription className='text-primary mb-2 font-semibold'>
            A space for effective feedback
          </CardDescription>
          <CardTitle className='flex items-center justify-start gap-6'>
            <span className='scroll-m-20 text-3xl font-semibold tracking-tight'>
              Simplify your retrospectives
            </span>
          </CardTitle>
          <p className='prose text-foreground'>
            Retroloop makes it easy for any team, in any field, to streamline
            their feedback process. Get set up in just a few minutes, quickly
            identify what needs improvement and start seeing real results from
            the start.
          </p>

          <Link href={'/dashboard'} className='w-full sm:w-auto sm:self-center'>
            <Button variant='outline' className='m-5 mx-auto w-full sm:w-auto'>
              Start retrospective
            </Button>
          </Link>
        </CardHeader>

        <CardContent className='flex w-full flex-col items-center gap-6 p-10 md:col-start-2 md:row-start-1'>
          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconLogin size={32} className='text-primary' />
              <h3 className='scroll-m-20 text-lg font-semibold tracking-tight'>
                Seamless login
              </h3>
            </div>
            <p className='prose text-foreground'>
              Get started quickly via e-mail login or an OAuth provider of your
              choice. Access Retroloop quickly and start your feedback sessions
              without any hassle.
            </p>
          </div>

          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconHourglass size={32} className='text-primary' />
              <h3 className='scroll-m-20 text-lg font-semibold tracking-tight'>
                Real-time functionality
              </h3>
            </div>
            <p className='prose text-foreground'>
              Keep your retrospectives on track with a timer synchronized
              between all participants, perfect for timeboxing discussions.
            </p>
          </div>

          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconRepeat size={32} className='text-primary' />
              <h3 className='scroll-m-20 text-lg font-semibold tracking-tight'>
                Intuitive user interface
              </h3>
            </div>
            <p className='prose text-foreground'>
              Navigate with ease using a clean, simple interface that&apos;s
              intuitive for everyone. Gather feedback easily and make every
              retrospective straightforward and productive.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className='grid-rows-auto m-5 grid grid-cols-1 md:w-9/12 md:grid-cols-2'>
        <CardHeader className='col-start-2 row-start-1 flex w-full flex-col gap-3 p-10'>
          <CardDescription className='text-primary mb-2 font-semibold'>
            A resource for continuous improvement
          </CardDescription>
          <CardTitle className='flex items-center justify-start gap-6'>
            <span className='scroll-m-20 text-3xl font-semibold tracking-tight'>
              Get actionable feedback
            </span>
          </CardTitle>
          <p className='prose text-foreground'>
            Leverage Retroloop to identify opportunities for growth, streamline
            processes, and foster a culture of continuous improvement.
          </p>

          <div className='w-full p-5 sm:w-auto sm:self-center'>
            <InviteDialog
              ctaCopy='Invite a team member'
              ctaVariant='outline'
              dialogTitle='Send an invite link'
              dialogDescription='Invite someone by sending them a login link'
              iconVariant='none'
            />
          </div>
        </CardHeader>

        <CardContent className='col-start-2 row-start-2 flex flex-col items-center gap-6 p-10 md:col-start-1 md:row-start-1'>
          <div className='m text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconBulb size={32} className='text-primary' />
              <h3 className='scroll-m-20 text-lg font-semibold tracking-tight'>
                Helpful insights
              </h3>
            </div>
            <p className='prose text-foreground'>
              Transform feedback into concrete action items that drive
              meaningful change and help your team get better.
            </p>
          </div>

          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconUsers size={32} className='text-primary' />
              <h3 className='scroll-m-20 text-lg font-semibold tracking-tight'>
                Built for modern teams
              </h3>
            </div>
            <p className='prose text-foreground'>
              Retroloop is designed to support the diverse needs of today&apos;s
              agile teams, with a focus on simplicity, effectiveness, and
              collaboration.
            </p>
          </div>

          <div className='text-start'>
            <div className='mb-1 flex items-center gap-2'>
              <IconAffiliate size={32} className='text-primary' />
              <h3 className='scroll-m-20 text-lg font-semibold tracking-tight'>
                Transparent & collaborative
              </h3>
            </div>
            <p className='prose text-foreground'>
              Encourage open communication and collaboration by making your
              retrospectives transparent and inclusive for every team member.
            </p>
          </div>
        </CardContent>
      </Card>

      <h2
        className='my-5 hidden scroll-m-20 text-3xl font-semibold tracking-tight'
        id='pricing'
      >
        Pricing
      </h2>

      <div className='mx-auto flex w-full max-w-3xl flex-col items-stretch justify-center gap-6 px-5 md:flex-row'>
        <Card className='flex-1 shadow-xs'>
          <CardHeader className='flex h-full flex-col p-8 text-center'>
            <div>
              <CardTitle className='mb-2'>
                <span className='text-muted-foreground text-2xl font-bold'>
                  Free
                </span>
              </CardTitle>
              <div className='mb-6'>
                <span className='text-primary text-4xl font-bold'>0€</span>
              </div>
              <Button
                variant='outline'
                size='lg'
                className='mb-2 w-full'
                onClick={() => router.push('/dashboard')}
              >
                Get started for free
              </Button>
              <p className='mb-6 text-xs text-muted-foreground'>No credit card required</p>
            </div>
            <ul className='text-muted-foreground mt-auto space-y-2 text-sm'>
              <li>Create 3 retrospectives for free</li>
              <li>3 month access to past retrospectives</li>
            </ul>
          </CardHeader>
        </Card>

        <Card className='relative flex-1 shadow-xs'>
          <div className='absolute -top-2 left-1/2 -translate-x-1/2'>
            <Badge
              variant='outline'
              className='bg-background px-3 py-1 text-xs'
            >
              Support Development
            </Badge>
          </div>
          <CardHeader className='flex h-full flex-col p-8 text-center'>
            <div>
              <CardTitle className='mb-2'>
                <span className='text-2xl font-bold'>Unlimited</span>
              </CardTitle>
              <div className='mb-6'>
                <span className='text-primary text-4xl font-bold'>10€</span>
                <span className='text-muted-foreground ml-1 text-sm'>/year</span>
              </div>
              <Button
                size='lg'
                className='mb-6 w-full'
                onClick={
                  !isSignedUp
                    ? () => signIn()
                    : async () => {
                        const { checkoutUrl } = await createCheckoutSession(
                          StripeBillingInterval.YEARLY,
                        )
                        if (checkoutUrl) {
                          router.push(checkoutUrl)
                        }
                      }
                }
              >
                Get Retroloop Unlimited
              </Button>
            </div>
            <ul className='text-muted-foreground mt-auto space-y-2 text-sm'>
              <li>Create unlimited retrospectives</li>
              <li>Access all past retrospectives</li>
            </ul>
          </CardHeader>
        </Card>
      </div>

      <Separator className='my-10' />

      <Footer />
    </div>
  )
}
