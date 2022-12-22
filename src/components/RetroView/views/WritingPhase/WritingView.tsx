import { Retrospective } from '@prisma/client'
import React from 'react'

import RetroActionBar from '@/components/RetroView/components/RetroActionBar'
import ItemCollector from '@/components/RetroView/views/WritingPhase/components/ItemCollector/ItemCollector'

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
        <RetroActionBar
          selectedRetro={selectedRetro}
          expiryTimestamp={expiryTimestamp}
          minutes={minutes}
          handleMinutes={handleMinutes}
          handleUpdateRetro={handleUpdateRetro}
          handleUpdateTimer={handleUpdateTimer}
        />

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
