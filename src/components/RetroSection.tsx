import React from 'react'

import { IconChevronRight, IconPlus } from '@tabler/icons'

import { trpc } from '@/utils/trpc'

export default function RetroSection() {
  const retrospectives = trpc.useQuery(['retrospective.getAll'])

  return (
    <div className='flex items-center w-screen h-full max-w-screen-2xl'>
      <section className='grid w-full h-full grid-rows-1 gap-6 p-10 mx-5 border-2 border-black rounded-md dark:border-neutral-200 auto-cols-auto'>
        <div className='flex items-center justify-center row-start-1 row-span-full'>
          <div className='grid w-full gap-4 pb-5 border-2 border-black rounded-md dark:border-neutral-200 auto-rows-min grid-col-1'>
            <h2 className='block h-1 row-start-1 p-5 mb-5 text-2xl font-bold text-left justify-self-start'>
              Add Retro
            </h2>

            <IconPlus
              size={124}
              className='p-5 mb-5 transition ease-in-out border-2 border-black rounded-md dark:border-neutral-200 justify-self-center hover:scale-105 hover:cursor-pointer'
            />
          </div>
        </div>

        <div className='flex items-center justify-center row-start-1 overflow-x-scroll row-span-full '>
          {retrospectives.data &&
            retrospectives.data.map((retrospective) => (
              <div
                key={retrospective.id}
                className='grid w-full gap-4 p-5 pb-0 mx-4 transition ease-in-out border-2 border-black rounded-md dark:border-neutral-200 auto-rows-min grid-col-1 hover:cursor-pointer hover:scale-105'
              >
                <div className='grid auto-rows-auto place-items-start'>
                  <h2 className='text-2xl font-bold text-left'>{retrospective.name}</h2>
                  <p className='mt-2 text-lg '>{retrospective.date.toLocaleDateString()}</p>
                </div>
                <div className='row-start-3 h-28 retro-pattern'></div>
              </div>
            ))}
        </div>

        <IconChevronRight
          size={56}
          className='col-start-4 p-2 transition ease-in-out rounded-md place-self-center dark:hover:text-black hover:bg-neutral-100 hover:cursor-pointer hover:scale-105'
        />
      </section>
    </div>
  )
}
