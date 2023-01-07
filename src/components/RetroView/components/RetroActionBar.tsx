import { Retrospective } from '@prisma/client'
import React from 'react'

import ActionButtons from '@/components/RetroView/components/ActionBar/components/ActionButtons'
import PhaseIndicator from '@/components/RetroView/components/ActionBar/components/PhaseIndicator'
import RetroTimer from '@/components/RetroView/components/ActionBar/components/RetroTimer'

type RetroActionBarProps = {
  selectedRetro: Retrospective
  handleUpdateRetro: (input: Retrospective) => void
  expiryTimestamp: Date
  handleUpdateTimer: (minutes: number) => void
  minutes: number
  handleMinutes: (minutes: number) => void
}

function RetroActionBar({
  selectedRetro,
  handleUpdateRetro,
  expiryTimestamp,
  handleUpdateTimer,
  minutes,
  handleMinutes,
}: RetroActionBarProps) {
  return (
    <>
      <div className='flex flex-row flex-wrap w-full p-5 mt-2 border-2 border-black rounded-md lg:mt-0 dark:border-neutral-200'>
        <PhaseIndicator retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
      </div>
      {expiryTimestamp && selectedRetro.phase === 'WRITING' ? (
        <div className='col-start-2 row-start-1 p-5 px-2 border-2 border-black rounded-md dark:border-neutral-200'>
          <RetroTimer
            expiryTimestamp={expiryTimestamp}
            handleTimer={handleUpdateTimer}
            handleMinutes={handleMinutes}
            minutes={minutes}
          />
        </div>
      ) : (
        <div className='col-start-2 row-start-1 p-5 rounded-md dark:border-neutral-200'></div>
      )}
      <ActionButtons retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
    </>
  )
}

export default RetroActionBar
