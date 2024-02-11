'use client'

import { Retrospective, User } from '@prisma/client'
import { IconLayoutDashboard } from '@tabler/icons-react'
import { sub } from 'date-fns'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'
import GridLoader from 'react-spinners/GridLoader'

import { AddRetro } from '@/app/dashboard/retros/components/add-retro/add-retro'
import { EditRetro } from '@/app/dashboard/retros/components/edit-retro/edit-retro'
import { Card, CardDescription, CardHeader, CardTitle } from '@/app/ui/card/card'
import { useToast } from '@/app/ui/toast/use-toast'
import { api } from '@/trpc/react'
import { RetrospectiveCreateInput, RetrospectiveUpdateInput } from '@/types/retrospective'
import { AccountType, formatDate, getAccountType } from '@/utils/utils'

type RetroSectionProps = {
  userId: User['id']
}

function RetrospectivesFallback() {
  return (
    <div className='col-span-full grid place-items-center gap-4 p-5 sm:p-16'>
      <IconLayoutDashboard size={100} />

      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        Your retrospectives will show up here
      </h3>

      <p className='text-lg text-muted-foreground'>
        Any retro you join or create will be added to your dashboard
      </p>
    </div>
  )
}

export function Retros({ userId }: RetroSectionProps) {
  const { data: retrospectives, refetch, isLoading } = api.retrospective.getAll.useQuery(userId)
  const { data: user } = api.user.getLoggedIn.useQuery()
  const { mutate: addRetro } = api.retrospective.add.useMutation({
    onSuccess: async () => {
      refetch()
    },
  })
  const { mutate: updateRetro } = api.retrospective.edit.useMutation({
    onSuccess: async () => {
      refetch()
    },
  })
  const { resolvedTheme } = useTheme()
  const [sortedRetros, setSortedRetros] = useState(retrospectives || [])
  const { toast } = useToast()

  const userAccountType =
    getAccountType(user?.stripeSubscriptionStatus || null) || AccountType.Standard

  const sortItems = useCallback(
    (accountType: AccountType) => {
      if (!retrospectives) return

      let filteredRetros = retrospectives

      if (accountType === AccountType.Standard) {
        const threeMonthsAgo = sub(new Date(), { days: 90 })
        filteredRetros = filteredRetros.filter(
          (retro: Retrospective) => retro.date && retro.date > threeMonthsAgo
        )
      }

      const sortedRetros = filteredRetros.sort(
        (a: Retrospective, b: Retrospective) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0)
      )

      setSortedRetros(sortedRetros)
    },
    [retrospectives, setSortedRetros]
  )

  const handleAddRetro = (input: RetrospectiveCreateInput) => {
    addRetro(input)
    toast({
      title: 'Retrospective created',
      description: 'Your retro was successfully created',
    })
  }

  const handleUpdateRetro = (input: RetrospectiveUpdateInput) => {
    updateRetro(input)
    toast({
      title: 'Retrospective updated',
      description: 'Your retro was successfully updated',
    })
  }

  useEffect(() => {
    sortItems(userAccountType)
  }, [retrospectives, userAccountType, sortItems])

  const isRetroLimitReached = userAccountType === AccountType.Standard && sortedRetros?.length > 3

  return (
    <Card className='w-[calc(100%-2.5rem)] bg-background p-10 shadow-sm'>
      <div className='flex flex-row items-baseline justify-between'>
        <CardTitle className='p-5 text-center'>RETROS</CardTitle>

        <div className='flex w-full justify-end'>
          <AddRetro handleAddRetro={handleAddRetro} isLimitReached={isRetroLimitReached} />
        </div>
      </div>

      {isLoading && (
        <div className='grid place-items-center'>
          <GridLoader
            color={resolvedTheme === 'light' ? 'black' : 'white'}
            loading={isLoading}
            size={15}
            aria-label='Loading Spinner'
          />
        </div>
      )}

      <section className='mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {sortedRetros?.length ? (
          sortedRetros.map((retrospective: Retrospective) => (
            <Card
              key={retrospective.id}
              className='h-full w-full shadow-sm transition ease-in-out hover:scale-105'
            >
              <CardHeader>
                <CardTitle className='flex items-baseline justify-between'>
                  {retrospective.name}
                  <EditRetro handleEditRetro={handleUpdateRetro} retrospective={retrospective} />
                </CardTitle>
                <CardDescription>{formatDate(retrospective.date)}</CardDescription>
              </CardHeader>
              <Link
                className='hover:cursor-pointer'
                href={{
                  pathname: '/retro',
                  query: {
                    id: retrospective.id,
                    name: retrospective.name,
                  },
                }}
              >
                <div className='pattern-cross h-28 pattern-bg-transparent pattern-foreground pattern-opacity-5 pattern-size-4' />
              </Link>
            </Card>
          ))
        ) : !isLoading ? (
          <RetrospectivesFallback />
        ) : null}
      </section>
    </Card>
  )
}
