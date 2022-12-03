import { Retrospective, User } from '@prisma/client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import React from 'react'
import GridLoader from 'react-spinners/GridLoader'

import RetroDialog from '@/components/RetroSection/components/RetroDialog'
import { trpc } from '@/utils/trpc'

type RetroSectionProps = {
  userId: User['id']
}

export default function RetroSection(props: RetroSectionProps) {
  const { resolvedTheme } = useTheme()

  const retrospectives = trpc.retrospective.getAll.useQuery(props.userId)

  const mutation = trpc.retrospective.add.useMutation({
    onSuccess: async () => {
      retrospectives.refetch()
    },
  })

  const handleAddRetro = (input: Retrospective) => {
    mutation.mutate(input)
  }

  return (
    <div className='flex items-center w-screen h-full max-w-screen-2xl'>
      <section className='w-full h-full p-10 mx-5 border-2 border-black rounded-md dark:border-neutral-200'>
        <div className='flex'>
          <h2 className='p-5'>RETROS</h2>
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

        <div className='flex flex-row flex-wrap items-start gap-4'>
          {retrospectives.data &&
            retrospectives.data.map((retrospective: Retrospective) => (
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
                <div className='grid row-start-2 gap-4 p-5 pb-0 mx-4 transition ease-in-out border-2 border-black rounded-md h-72 w-52 dark:border-neutral-200 auto-rows-min grid-col-1 hover:cursor-pointer hover:scale-105 min-w-min min-h-min'>
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
