'use client'

import { Retrospective, User } from '@prisma/client'
import { IconLayoutDashboard } from '@tabler/icons-react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import GridLoader from 'react-spinners/GridLoader'

import { AddRetro } from '@/app/components/retro-section/components/add-retro/add-retro'
import { EditRetro } from '@/app/components/retro-section/components/edit-retro/edit-retro'
import { Card, CardDescription, CardHeader, CardTitle } from '@/app/ui/card/card'
import { useToast } from '@/app/ui/toast/use-toast'
import { RetrospectiveCreateInput, RetrospectiveUpdateInput } from '@/types/retrospective'
import { trpc } from '@/utils/trpc'
import { formatDate } from '@/utils/utils'

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

export function RetroSection({ userId }: RetroSectionProps) {
  const { data: retrospectives, refetch, isLoading } = trpc.retrospective.getAll.useQuery(userId)
  const { mutate: addRetro } = trpc.retrospective.add.useMutation({
    onSuccess: async () => {
      refetch()
    },
  })
  const { mutate: updateRetro } = trpc.retrospective.edit.useMutation({
    onSuccess: async () => {
      refetch()
    },
  })
  const { resolvedTheme } = useTheme()
  const [sortedRetros, setSortedRetros] = useState(retrospectives)
  const { toast } = useToast()

  const sortItems = () => {
    if (retrospectives) {
      setSortedRetros(
        [...retrospectives].sort((a, b) => {
          if (b.date === null) {
            return 1
          }
          if (a.date === null) {
            return -1
          }
          return b.date.getTime() - a.date.getTime()
        })
      )
    }
  }

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
    sortItems()
  }, [retrospectives])

  return (
    <Card className='w-[calc(100%-2.5rem)] bg-background p-10 shadow-sm'>
      <div className='flex flex-row items-baseline justify-between'>
        <CardTitle className='p-5 text-center'>RETROS</CardTitle>

        <div className='flex w-full justify-end'>
          <AddRetro handleAddRetro={handleAddRetro} />
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
