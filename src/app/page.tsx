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
import { useTheme } from 'next-themes'

import { InviteDialog } from '@/app/dashboard/team/components/invite-dialog'
import { Button } from '@/app/ui/button'

export default function Landingpage() {
  const { resolvedTheme, theme } = useTheme()

  return (
    <div className='flex w-full flex-col items-center'>
      <section className='flex flex-col items-center gap-8 px-6 py-16 md:py-24'>
        <div className='max-w-4xl text-center'>
          <h1 className='mb-6 text-4xl font-bold tracking-tight md:text-6xl'>
            Agile retrospectives made easy
          </h1>
          <p className='text-muted-foreground mb-8 text-xl md:text-2xl'>
            Enable effective feedback across remote & hybrid teams
          </p>
          <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
            <div className='w-full sm:w-52'>
              <Button
                className='flex w-full items-center justify-center gap-2'
                asChild
              >
                <Link href='/dashboard'>
                  Start Retro
                  <IconArrowRight size={18} />
                </Link>
              </Button>
            </div>
            <div className='w-full sm:w-52'>
              <InviteDialog
                ctaCopy='Invite teammates'
                ctaVariant='outline'
                dialogTitle='Send an invite link'
                dialogDescription='Invite someone by sending them a login link'
                iconVariant='none'
                fullWidth={true}
              />
            </div>
          </div>
        </div>
        <div className='mt-12 w-full max-w-5xl'>
          <div className='overflow-hidden rounded border-2 shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl'>
            <Image
              className='w-full'
              src={
                resolvedTheme === 'light' || theme === 'light'
                  ? '/preview-light.webp'
                  : '/preview-dark.webp'
              }
              alt='Retroloop retrospective interface showing feedback collection and collaboration features'
              title='Retroloop preview'
              width={1920}
              height={1080}
              quality={95}
              priority
            />
          </div>
        </div>
      </section>

      <section className='w-full max-w-7xl px-6 py-16' id='features'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight md:text-4xl'>
            Everything you need for effective retrospectives
          </h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
            Simple, powerful features that help teams reflect, improve, and grow
            together
          </p>
        </div>

        <div className='grid justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex max-w-sm flex-col items-start gap-4'>
            <div className='flex items-center gap-3'>
              <div className='bg-primary/10 rounded border-2 p-3'>
                <IconLogin size={24} className='text-primary' />
              </div>
              <h3 className='text-xl font-semibold'>Seamless login</h3>
            </div>
            <p className='text-muted-foreground leading-relaxed'>
              Get started quickly via email or OAuth. Access Retroloop instantly
              and begin your feedback sessions without hassle.
            </p>
          </div>

          <div className='flex max-w-sm flex-col items-start gap-4'>
            <div className='flex items-center gap-3'>
              <div className='bg-primary/10 rounded border-2 p-3'>
                <IconHourglass size={24} className='text-primary' />
              </div>
              <h3 className='text-xl font-semibold'>Real-time sync</h3>
            </div>
            <p className='text-muted-foreground leading-relaxed'>
              Keep retrospectives on track with synchronized timers between all
              participants, perfect for timeboxing discussions.
            </p>
          </div>

          <div className='flex max-w-sm flex-col items-start gap-4'>
            <div className='flex items-center gap-3'>
              <div className='bg-primary/10 rounded border-2 p-3'>
                <IconRepeat size={24} className='text-primary' />
              </div>
              <h3 className='text-xl font-semibold'>Intuitive interface</h3>
            </div>
            <p className='text-muted-foreground leading-relaxed'>
              Navigate with ease using a clean, simple interface that makes
              every retrospective straightforward and productive.
            </p>
          </div>

          <div className='flex max-w-sm flex-col items-start gap-4'>
            <div className='flex items-center gap-3'>
              <div className='bg-primary/10 rounded border-2 p-3'>
                <IconBulb size={24} className='text-primary' />
              </div>
              <h3 className='text-xl font-semibold'>Actionable insights</h3>
            </div>
            <p className='text-muted-foreground leading-relaxed'>
              Transform feedback into concrete action items that drive
              meaningful change and help your team improve.
            </p>
          </div>

          <div className='flex max-w-sm flex-col items-start gap-4'>
            <div className='flex items-center gap-3'>
              <div className='bg-primary/10 rounded border-2 p-3'>
                <IconUsers size={24} className='text-primary' />
              </div>
              <h3 className='text-xl font-semibold'>Built for teams</h3>
            </div>
            <p className='text-muted-foreground leading-relaxed'>
              Designed for modern agile teams with a focus on simplicity,
              effectiveness, and seamless collaboration.
            </p>
          </div>

          <div className='flex max-w-sm flex-col items-start gap-4'>
            <div className='flex items-center gap-3'>
              <div className='bg-primary/10 rounded border-2 p-3'>
                <IconAffiliate size={24} className='text-primary' />
              </div>
              <h3 className='text-xl font-semibold'>Transparent process</h3>
            </div>
            <p className='text-muted-foreground leading-relaxed'>
              Encourage open communication by making retrospectives transparent
              and inclusive for every team member.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
