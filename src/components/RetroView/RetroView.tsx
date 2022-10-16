import React from 'react'

import PhaseIndicator from '@/components/RetroView/components/PhaseIndicator'
import RetroTimer from '@/components/RetroView/components/RetroTimer'
import ActionButtons from '@/components/RetroView/components/ActionButtons'
import ItemCollector from '@/components/RetroView/components/ItemCollector'

const RetroView = (props: any) => {
  return (
    <>
      <div className='flex items-center w-screen h-full max-w-screen-2xl'>
        <section className='w-full h-screen p-10 mx-5 border-2 border-black rounded-md dark:border-neutral-200'>
          <h2 className='p-5'>{props.retroName}</h2>

          <div className='grid w-full h-full grid-cols-3 grid-rows-2 gap-5 place-items-center'>
            <div className='col-start-1 row-start-1 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <PhaseIndicator />
            </div>
            <div className='col-start-2 row-start-1 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <RetroTimer />
            </div>
            <div className='col-start-3 row-start-1 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <ActionButtons />
            </div>

            <div className='col-start-1 row-start-2 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemCollector />
            </div>
            <div className='col-start-2 row-start-2 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemCollector />
            </div>
            <div className='col-start-3 row-start-2 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemCollector />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default RetroView
