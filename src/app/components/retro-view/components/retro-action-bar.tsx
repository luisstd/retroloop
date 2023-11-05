'use client'

import { Retrospective } from '@prisma/client'
import { useState } from 'react'

import { ActionButtons } from '@/app/components/retro-view/components/action-bar/components/action-buttons/action-buttons'
import { PhaseIndicator } from '@/app/components/retro-view/components/action-bar/components/phase-indicator/phase-indicator'
import { RetroTimer } from '@/app/components/retro-view/components/action-bar/components/retro-timer/retro-timer'
import { trpc } from '@/utils/trpc'

type RetroActionBarProps = {
  selectedRetro: Retrospective
}

export function RetroActionBar({ selectedRetro }: RetroActionBarProps) {
  const [currentRetro, setCurrentRetro] = useState(selectedRetro)

  const { refetch: refetchRetro } = trpc.retrospective.getById.useQuery(selectedRetro.id, {
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  })

  const { mutate: updateRetro } = trpc.retrospective.edit.useMutation({
    onSuccess: () => {
      refetchRetro()
    },
  })

  function handleUpdateRetro(input: Retrospective) {
    setCurrentRetro(input)
    updateRetro(input)
  }

  return (
    <>
      <PhaseIndicator retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
      <RetroTimer selectedRetro={currentRetro} handleUpdateRetro={handleUpdateRetro} />
      <ActionButtons retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
    </>
  )
}
