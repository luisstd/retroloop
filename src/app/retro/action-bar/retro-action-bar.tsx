'use client'

import { Retrospective } from '@prisma/client'
import { useChannel } from 'ably/react'
import { isFuture } from 'date-fns'
import { useState } from 'react'

import { ActionButtons } from '@/app/retro/action-bar/components/action-buttons/action-buttons'
import { AvatarStack } from '@/app/retro/action-bar/components/avatar-stack'
import { PhaseIndicator } from '@/app/retro/action-bar/components/phase-indicator/phase-indicator'
import { RetroTimer } from '@/app/retro/action-bar/components/retro-timer/retro-timer'
import { api } from '@/trpc/react'

type RetroActionBarProps = {
  selectedRetro: Retrospective
  refetchRetro: () => void
  userPhaseView: string
  setUserPhaseView: (phase: string) => void
}

export function RetroActionBar({
  selectedRetro,
  refetchRetro,
  userPhaseView,
  setUserPhaseView,
}: RetroActionBarProps) {
  const [timerDisplay, setTimerDisplay] = useState('00:00')
  const { channel } = useChannel(
    selectedRetro.id,
    'timerDisplay',
    (message) => {
      setTimerDisplay(message.data)
    },
  )

  const { mutate: updateRetro } = api.retrospective.edit.useMutation({
    onSuccess: () => {
      refetchRetro()
    },
  })

  function handleUpdateRetro(input: Retrospective) {
    updateRetro(input)
  }

  const isTimerRunning =
    selectedRetro.timerExpiration && isFuture(selectedRetro.timerExpiration)

  return (
    <>
      {selectedRetro && (
        <>
          <PhaseIndicator
            retrospective={selectedRetro}
            userPhaseView={userPhaseView}
            setUserPhaseView={setUserPhaseView}
          />
          <RetroTimer
            selectedRetro={selectedRetro}
            handleUpdateRetro={handleUpdateRetro}
            timerDisplay={timerDisplay}
            channel={channel}
          />

          <div className='flex w-full justify-between'>
            <AvatarStack />
            <ActionButtons
              retrospective={selectedRetro}
              handleUpdateRetro={handleUpdateRetro}
              isTimerRunning={!!isTimerRunning}
            />
          </div>
        </>
      )}
    </>
  )
}
