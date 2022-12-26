import { Retrospective } from '@prisma/client'
import React from 'react'

import RetroActionBar from '@/components/RetroView/components/RetroActionBar'
import ItemVoter from '@/components/RetroView/views/VotingPhase/components/ItemVoter.tsx'

type VotingViewProps = {
  selectedRetro: Retrospective
  expiryTimestamp: Date
  minutes: number
  handleMinutes: (minutes: number) => void
  handleUpdateRetro: (input: Retrospective) => void
  handleUpdateTimer: (minutes: number) => void
}

function VotingView({
  selectedRetro,
  expiryTimestamp,
  minutes,
  handleMinutes,
  handleUpdateRetro,
  handleUpdateTimer,
}: VotingViewProps) {
  return (
    <section className='w-full h-screen px-5 mx-5 border-2 border-black rounded-md dark:border-neutral-200'>
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
              <ItemVoter
                retrospective={selectedRetro}
                itemType='success'
                title={'things that went well'}
              />
            </div>
            <div className='w-full h-full col-start-2 row-span-6 row-start-2 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemVoter
                retrospective={selectedRetro}
                itemType='improvement'
                title={'things that can be improved'}
              />
            </div>
            <div className='w-full h-full col-start-3 row-span-6 row-start-2 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemVoter
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

export default VotingView
