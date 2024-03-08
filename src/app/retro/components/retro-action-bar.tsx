'use client'

import { Retrospective } from '@prisma/client'
import { useState } from 'react'

import { ActionButtons } from '@/app/retro/components/action-bar/components/action-buttons/action-buttons'
import { PhaseIndicator } from '@/app/retro/components/action-bar/components/phase-indicator/phase-indicator'
import { RetroTimer } from '@/app/retro/components/action-bar/components/retro-timer/retro-timer'
import { RetroTitle } from '@/app/retro/components/action-bar/retro-title'
import { api } from '@/trpc/react'

type RetroActionBarProps = {
  selectedRetro: Retrospective
  refetchRetro: () => void
}

export function RetroActionBar({ selectedRetro, refetchRetro }: RetroActionBarProps) {
  // disabled temporarily
  const [isTimerEnabled] = useState(false)

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
          <PhaseIndicator retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
          {isTimerEnabled ? (
            <RetroTimer selectedRetro={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
          ) : (
            <RetroTitle title={selectedRetro.name} />
          )}
          <ActionButtons retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
        </>
      )}
    </>
  )
}
