'use client'

import { User } from '@prisma/client'

import { Loader } from '@/app/components/loader/loader'
import { InviteDialog } from '@/app/dashboard/team/components/invite-dialog'
import { TeamFallback } from '@/app/dashboard/team/components/team-fallback'
import { Card } from '@/app/ui/card'
import { useSession } from '@/lib/auth-client'
import { api } from '@/trpc/react'

export function Team() {
  const { data: session, isPending } = useSession()
  const isAuthenticated = !!session?.user

  const { data: users, isLoading } = api.user.getAll.useQuery(undefined, {
    enabled: isAuthenticated && !isPending,
  })

  const content = users?.length ? (
    users.map((user: User) => (
      <Card
        key={user.id}
        className='h-full w-full cursor-default shadow-xs transition hover:shadow-sm'
      >
        <Card.Header>
          <Card.Title>{user.name}</Card.Title>
          <Card.Description className='mt-2 text-lg'>
            {user.role}
          </Card.Description>
        </Card.Header>
      </Card>
    ))
  ) : (
    <TeamFallback />
  )

  return (
    <Card className='bg-background min-h-[400px] w-full p-10 shadow-xs'>
      <div className='flex flex-row items-baseline justify-between'>
        <Card.Title className='p-5 text-center'>TEAM</Card.Title>
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
