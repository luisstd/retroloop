'use client'

import { Retrospective } from '@prisma/client'

import { ActionButtons } from '@/app/retro/action-bar/components/action-buttons/action-buttons'
import { PhaseIndicator } from '@/app/retro/action-bar/components/phase-indicator/phase-indicator'
import { RetroTimer } from '@/app/retro/action-bar/components/retro-timer/retro-timer'
import { api } from '@/trpc/react'

type RetroActionBarProps = {
  selectedRetro: Retrospective
  refetchRetro: () => void
}

export function RetroActionBar({ selectedRetro, refetchRetro }: RetroActionBarProps) {
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
          <RetroTimer selectedRetro={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
          <ActionButtons retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
        </>
      )}
    </>
  )
}
