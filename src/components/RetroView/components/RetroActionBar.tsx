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
    </>
  )
}

export default RetroActionBar
