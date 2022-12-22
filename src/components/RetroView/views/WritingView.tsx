import { Retrospective } from '@prisma/client'
import React from 'react'

import ActionButtons from '@/components/RetroView/components/ActionButtons'
import ItemCollector from '@/components/RetroView/components/ItemCollector/ItemCollector'
import PhaseIndicator from '@/components/RetroView/components/PhaseIndicator'
import RetroTimer from '@/components/RetroView/components/RetroTimer'

type WritingViewProps = {
  selectedRetro: Retrospective
  handleUpdateRetro: (input: Retrospective) => void
  expiryTimestamp: Date
  handleUpdateTimer: (minutes: number) => void
  minutes: number
  handleMinutes: (minutes: number) => void
}

function WritingView({
  selectedRetro,
  handleUpdateRetro,
  expiryTimestamp,
  handleUpdateTimer,
  minutes,
  handleMinutes,
}: WritingViewProps) {
  return (
    <section className='w-full h-screen p-5 mx-5 border-2 border-black rounded-md dark:border-neutral-200'>
      <h2 className='p-5'>{selectedRetro.name}</h2>

      <div className='grid w-full grid-cols-3 gap-5 grid-rows-auto h-5/6 place-items-center'>
        <div className='w-full col-start-1 row-start-1 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
          <PhaseIndicator retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
        </div>
        <div className='col-start-2 row-start-1 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
          {expiryTimestamp ? (
            <RetroTimer
              expiryTimestamp={expiryTimestamp}
              handleTimer={handleUpdateTimer}
              handleMinutes={handleMinutes}
              minutes={minutes}
            />
          ) : null}
        </div>
        <ActionButtons retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />

        {selectedRetro ? (
          <>
            <div className='w-full h-full col-start-1 row-span-6 row-start-2 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemCollector
                retrospective={selectedRetro}
                itemType='success'
                title={'things that went well'}
              />
            </div>
            <div className='w-full h-full col-start-2 row-span-6 row-start-2 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemCollector
                retrospective={selectedRetro}
                itemType='improvement'
                title={'things that can be improved'}
              />
            </div>
            <div className='w-full h-full col-start-3 row-span-6 row-start-2 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemCollector
                retrospective={selectedRetro}
                itemType='action'
                title={'things to start doing'}
              />
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}

export default WritingView
