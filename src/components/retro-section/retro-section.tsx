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
    <div className='flex items-center w-screen h-full max-w-screen-2xl'>
      <section className='relative w-full h-full p-10 mx-5 border-2 rounded-md shadow-md border-base-dark dark:border-base-light bg-base-light dark:bg-base-dark'>
        <div className='flex flex-row items-baseline'>
          <h2 className='p-5 text-center'>RETROS</h2>
          <div className='flex justify-end w-full mb-10'>
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

        <div className='flex flex-row flex-wrap items-start justify-center flex-grow gap-4 sm:justify-start'>
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
                <div className='grid row-start-2 gap-4 p-5 mx-4 my-1 transition ease-in-out border-2 border-black rounded-md h-72 w-52 dark:border-neutral-200 auto-rows-min grid-col-1 hover:cursor-pointer hover:scale-105 min-w-min min-h-min'>
                  <div className='grid auto-rows-auto place-items-start'>
                    <h2 className='text-2xl font-bold text-left'>{retrospective.name}</h2>
                    <p className='mt-2 text-lg '>{retrospective.date.toLocaleDateString()}</p>
                  </div>
                  <div className='row-start-3 h-28 retro-pattern'></div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}
