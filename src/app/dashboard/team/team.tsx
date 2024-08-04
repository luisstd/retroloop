'use client'

import { User } from '@prisma/client'

import { Loader } from '@/app/components/loader/loader'
import { InviteDialog } from '@/app/dashboard/team/components/invite-dialog'
import { TeamFallback } from '@/app/dashboard/team/components/team-fallback'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui/card/card'
import { api } from '@/trpc/react'

export function Team() {
  const { data: users, isLoading } = api.user.getAll.useQuery()

  const content = users?.length ? (
    users.map((user: User) => (
      <Card
        key={user.id}
        className='h-full w-full shadow-sm transition ease-in-out hover:scale-105'
      >
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription className='mt-2 text-lg'>
            {user.role}
          </CardDescription>
        </CardHeader>
        <div className='pattern-cross h-28 pattern-bg-transparent pattern-foreground pattern-opacity-5 pattern-size-4' />
      </Card>
    ))
  ) : (
    <TeamFallback />
  )

  return (
    <Card className='w-full bg-background p-10 shadow-sm'>
      <div className='flex flex-row items-baseline justify-between'>
        <CardTitle className='p-5 text-center'>TEAM</CardTitle>
        <div className='flex w-full justify-end'>
          <InviteDialog
            ctaCopy='Invite'
            ctaVariant='default'
            dialogTitle='Invite to team'
            dialogDescription='Invite someone by sending them a login link'
            iconVariant='plus'
          />
        </div>
      </div>
      {isLoading ? (
        <Loader isLoading />
      ) : (
        <section className='mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {content}
        </section>
      )}
    </Card>
  )
}
