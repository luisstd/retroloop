'use client'

import { Retrospective, User } from '@prisma/client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import GridLoader from 'react-spinners/GridLoader'

import { RetroDialog } from '@/components/retro-section/components/retro-dialog'
import { RetrospectiveCreateInput } from '@/types/retrospective'
import { trpc } from '@/utils/trpc'

type RetroSectionProps = {
  userId: User['id']
}

export function RetroSection({ userId }: RetroSectionProps) {
  const { resolvedTheme } = useTheme()

  const retrospectives = trpc.retrospective.getAll.useQuery(userId)

  const [sortedRetros, setSortedRetros] = useState(retrospectives.data)

  useEffect(() => {
    sortItems()
  }, [retrospectives.data])

  function sortItems(): void {
    retrospectives.data
      ? setSortedRetros(
          [...retrospectives.data].sort((a, b) => {
            if (b.date === null) {
              return 1
            }
            if (a.date === null) {
              return -1
            }
            return b.date.getTime() - a.date.getTime()
          })
        )
      : null
  }

  const mutation = trpc.retrospective.add.useMutation({
    onSuccess: async () => {
      retrospectives.refetch()
    },
  })

  const handleAddRetro = (input: RetrospectiveCreateInput) => {
    mutation.mutate(input)
  }

  return (
    <div className='flex h-full w-screen max-w-screen-2xl items-center'>
      <section className='relative mx-5 h-full w-full rounded-md border-2 border-base-dark bg-base-light p-10 shadow-md dark:border-base-light dark:bg-base-dark'>
        <div className='flex flex-row items-baseline'>
          <h2 className='p-5 text-center'>RETROS</h2>
          <div className='mb-10 flex w-full justify-end'>
            <RetroDialog handleAddRetro={handleAddRetro} />
          </div>
        </div>

        {retrospectives.isLoading && (
          <div className='grid place-items-center'>
            <GridLoader
              color={resolvedTheme === 'light' ? 'black' : 'white'}
              loading={retrospectives.isLoading}
              size={15}
              aria-label='Loading Spinner'
            />
          </div>
        )}

        <div className='flex flex-grow flex-row flex-wrap items-start justify-center gap-4 sm:justify-start'>
          {sortedRetros &&
            sortedRetros.map((retrospective: Retrospective) => (
              <Link
                key={retrospective.id}
                href={{
                  pathname: '/retro',
                  query: {
                    id: retrospective.id,
                    name: retrospective.name,
                  },
                }}
              >
                <div className='grid-col-1 row-start-2 mx-4 my-1 grid h-72 min-h-min w-52 min-w-min auto-rows-min gap-4 rounded-md border-2 border-black p-5 transition ease-in-out hover:scale-105 hover:cursor-pointer dark:border-neutral-200'>
                  <div className='grid auto-rows-auto place-items-start'>
                    <h2 className='text-left text-2xl font-bold'>{retrospective.name}</h2>
                    <p className='mt-2 text-lg '>{retrospective.date.toLocaleDateString()}</p>
                  </div>
                  <div className='retro-pattern row-start-3 h-28'></div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}
