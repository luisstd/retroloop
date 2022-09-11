import React, { useState } from 'react'

import { trpc } from '@/utils/trpc'

import AddRetroDialog from '@/components/RetroSection/components/AddRetroDialog'

export default function RetroSection() {
  const retrospectives = trpc.useQuery(['retrospective.getAll'])

  const [isRetroDialogOpen, setRetroDialogOpen] = useState(false)

  function onOpenRetroDialog() {
    setRetroDialogOpen(true)
  }

  return (
    <div className='flex items-center w-screen h-full max-w-screen-2xl'>
      <section className='w-full h-full p-10 mx-5 border-2 border-black rounded-md dark:border-neutral-200'>
        <div className='flex justify-end w-full mb-10'>
          <AddRetroDialog />
        </div>
        <div className='grid items-stretch grid-cols-4 gap-6 place-items-center auto-rows-auto'>
          {retrospectives.data &&
            retrospectives.data.map((retrospective) => (
              <div
                key={retrospective.id}
                className='grid w-full row-start-2 gap-4 p-5 pb-0 mx-4 transition ease-in-out border-2 border-black rounded-md dark:border-neutral-200 auto-rows-min grid-col-1 hover:cursor-pointer hover:scale-105'
              >
                <div className='grid auto-rows-auto place-items-start'>
                  <h2 className='text-2xl font-bold text-left'>{retrospective.name}</h2>
                  <p className='mt-2 text-lg '>{retrospective.date.toLocaleDateString()}</p>
                </div>
                <div className='row-start-3 h-28 retro-pattern'></div>
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}
