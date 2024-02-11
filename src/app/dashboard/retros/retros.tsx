'use client'

import { Retrospective, User } from '@prisma/client'
import { sub } from 'date-fns'
import { useCallback, useEffect, useState } from 'react'

import { Loader } from '@/app/components/loader/loader'
import { AddRetro } from '@/app/dashboard/retros/components/add-retro'
import { RetroCard } from '@/app/dashboard/retros/components/retro-card'
import { RetroFallback } from '@/app/dashboard/retros/components/retro-fallback'
import { Card, CardTitle } from '@/app/ui/card/card'
import { useToast } from '@/app/ui/toast/use-toast'
import { api } from '@/trpc/react'
import { RetrospectiveCreateInput, RetrospectiveUpdateInput } from '@/types/retrospective'
import { AccountType, getAccountType } from '@/utils/utils'

type RetrosProps = {
  userId: User['id']
}

export function Retros({ userId }: RetrosProps) {
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

      {isLoading && <Loader isLoading={isLoading} />}

      <section className='mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {sortedRetros?.length ? (
          sortedRetros.map((retrospective: Retrospective) => (
            <RetroCard
              key={retrospective.id}
              retrospective={retrospective}
              handleUpdateRetro={handleUpdateRetro}
            />
          ))
        ) : !isLoading ? (
          <RetroFallback />
        ) : null}
      </section>
    </Card>
  )
}
