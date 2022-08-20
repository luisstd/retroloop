import React from 'react'

import { IconChevronRight, IconPlus } from '@tabler/icons'

export default function RetroSection() {
  return (
    <>
      <section className='grid grid-rows-1 gap-6 p-10 border-2 border-black rounded-md auto-cols-auto'>
        <div className='flex items-center justify-center row-start-1 row-span-full'>
          <div className='grid w-full gap-4 pb-5 border-2 border-black rounded-md auto-rows-min grid-col-1'>
            <h2 className='block h-1 row-start-1 p-5 mb-5 text-2xl font-bold text-left justify-self-start'>
              Add Retro
            </h2>

            <IconPlus
              size={124}
              className='p-5 mb-5 transition ease-in-out border-2 border-black rounded-md justify-self-center hover:scale-105 hover:cursor-pointer'
            />
          </div>
        </div>

        <div className='flex items-center justify-center row-start-1 row-span-full '>
          <div className='grid w-full gap-4 p-5 pb-0 transition ease-in-out border-2 border-black rounded-md auto-rows-min grid-col-1 hover:cursor-pointer hover:scale-105'>
            <div className='grid auto-rows-auto place-items-start'>
              <h2 className='text-2xl font-bold text-left '>Untitled Retro</h2>
              <p className='mt-2 text-lg '>12.03.2022</p>
            </div>
            <div className='h-24 row-start-3 retro-pattern'></div>
          </div>
        </div>

        <div className='flex items-center justify-center row-start-1row-span-full '>
          <div className='grid w-full gap-4 p-5 pb-0 transition ease-in-out border-2 border-black rounded-md auto-rows-min grid-col-1 hover:cursor-pointer hover:scale-105 '>
            <div className='grid auto-rows-auto place-items-start'>
              <h2 className='text-2xl font-bold text-left '>Untitled Retro</h2>
              <p className='mt-2 text-lg '>06.04.2022</p>
            </div>
            <div className='h-24 row-start-3 retro-pattern'></div>
          </div>
        </div>

        <IconChevronRight
          size={56}
          className='col-start-4 p-2 transition ease-in-out rounded-md place-self-center hover:bg-slate-50 hover:cursor-pointer hover:scale-105'
        />
      </section>
    </>
  )
}
