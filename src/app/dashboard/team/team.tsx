'use client'

import { User } from '@prisma/client'
import { IconUsersGroup } from '@tabler/icons-react'

import { Loader } from '@/app/components/loader/loader'
import { InviteUserDialog } from '@/app/dashboard/team/components/invite-user-dialog'
import { Card, CardDescription, CardHeader, CardTitle } from '@/app/ui/card/card'
import { api } from '@/trpc/react'

function UsersFallback() {
  return (
    <div className='col-span-full grid place-items-center gap-4 p-5 sm:p-16'>
      <IconUsersGroup size={100} />

      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        Your team members will show up here
      </h3>

      <p className='text-lg text-muted-foreground'>
        Anyone who collaborated in a retrospective with you will be added to your dashboard
      </p>
    </div>
  )
}

export function Team() {
  const { data: users, isLoading } = api.user.getAll.useQuery()

  return (
    <Card className='w-[calc(100%-2.5rem)] bg-background p-10 shadow-sm'>
      <div className='flex flex-row items-baseline justify-between'>
        <CardTitle className='p-5 text-center'>TEAM</CardTitle>
        <div className='flex w-full justify-end'>
          <InviteUserDialog />
        </div>
      </div>

      {isLoading && <Loader isLoading={isLoading} />}

      <section className='mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {users?.length ? (
          users.map((user: User) => (
            <Card
              key={user.id}
              className='h-full w-full shadow-sm transition ease-in-out hover:scale-105'
            >
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription className='mt-2 text-lg '>{user.role}</CardDescription>
              </CardHeader>
              <div className='pattern-cross h-28 pattern-bg-transparent pattern-foreground pattern-opacity-5 pattern-size-4' />
            </Card>
          ))
        ) : !isLoading ? (
          <UsersFallback />
        ) : null}
      </section>
    </Card>
  )
}
