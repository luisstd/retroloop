'use client'

import { User } from '@prisma/client'
import { useEffect, useState } from 'react'

import { Loader } from '@/app/components/loader/loader'
import { AddRetro } from '@/app/dashboard/retros/components/add-retro'
import { RetroCard } from '@/app/dashboard/retros/components/retro-card'
import { RetroFallback } from '@/app/dashboard/retros/components/retro-fallback'
import { Card } from '@/app/ui/card'
import { useToast } from '@/app/ui/use-toast'
import { api } from '@/trpc/react'
import {
  RetrospectiveCreateInput,
  RetrospectiveUpdateInput,
  RetrospectiveWithRelations,
} from '@/types/retrospective'
import { AccountType, getAccountType } from '@/utils/utils'

type RetrosProps = {
  userId: User['id']
}

export function Retros({ userId }: RetrosProps) {
  const { toast } = useToast()
  const [isLimitReached, setIsLimitReached] = useState(false)
  const { data: user } = api.user.getLoggedIn.useQuery()
  const accountType = getAccountType(user?.stripeSubscriptionStatus || null)

  const {
    data: retrospectives,
    refetch,
    isLoading,
  } = api.retrospective.getAll.useQuery(
    { userId, accountType },
    { enabled: !!accountType },
  )

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
    if (!retrospectives) return
    if (!accountType) return

    if (retrospectives.length >= 3 && accountType === AccountType.Standard) {
      setIsLimitReached(true)
    }
  }, [retrospectives, accountType])

  return (
    <Card className='bg-background w-full p-10 shadow-xs'>
      <div className='flex flex-row items-baseline justify-between'>
        <Card.Title className='p-5 text-center'>RETROS</Card.Title>

        {!isLoading && (
          <div className='flex w-full justify-end'>
            <AddRetro
              handleAddRetro={handleAddRetro}
              isLimitReached={isLimitReached}
            />
          </div>
        )}
      </div>

      {isLoading && <Loader isLoading={isLoading} />}

      <section className='mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {retrospectives?.length ? (
          retrospectives.map((retrospective: RetrospectiveWithRelations) => (
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
