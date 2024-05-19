'use client'

import { Retrospective } from '@prisma/client'
import { useChannel } from 'ably/react'
import { useState } from 'react'

import { ActionButtons } from '@/app/retro/action-bar/components/action-buttons/action-buttons'
import { PhaseIndicator } from '@/app/retro/action-bar/components/phase-indicator/phase-indicator'
import { RetroTimer } from '@/app/retro/action-bar/components/retro-timer/retro-timer'
import { api } from '@/trpc/react'

type RetroActionBarProps = {
  selectedRetro: Retrospective
  refetchRetro: () => void
}

export function RetroActionBar({
  selectedRetro,
  refetchRetro,
}: RetroActionBarProps) {
  const [timerDisplay, setTimerDisplay] = useState('00:00')
  const { channel } = useChannel('retrospective', 'timerDisplay', (message) => {
    setTimerDisplay(message.data)
  })

  const { mutate: updateRetro } = api.retrospective.edit.useMutation({
    onSuccess: () => {
      refetchRetro()
    },
  })

  function handleUpdateRetro(input: Retrospective) {
    updateRetro(input)
  }

  return (
    <>
      {selectedRetro && (
        <>
          <PhaseIndicator
            retrospective={selectedRetro}
            handleUpdateRetro={handleUpdateRetro}
          />
          <RetroTimer
            selectedRetro={selectedRetro}
            handleUpdateRetro={handleUpdateRetro}
            timerDisplay={timerDisplay}
            channel={channel}
          />
          <ActionButtons
            retrospective={selectedRetro}
            handleUpdateRetro={handleUpdateRetro}
          />
        </>
      )}
    </>
  )
}
