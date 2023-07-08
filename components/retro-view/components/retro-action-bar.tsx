import { Retrospective } from '@prisma/client'
import { ActionButtons } from 'components/retro-view/components/action-bar/components/action-buttons/action-buttons'
import { PhaseIndicator } from 'components/retro-view/components/action-bar/components/phase-indicator/phase-indicator'
import { RetroTimer } from 'components/retro-view/components/action-bar/components/retro-timer/retro-timer'
import { useState } from 'react'

import { trpc } from '@/utils/trpc'

type RetroActionBarProps = {
  selectedRetro: Retrospective
}

export function RetroActionBar({ selectedRetro }: RetroActionBarProps) {
  const [currentRetro, setCurrentRetro] = useState(selectedRetro)

  const { refetch: refetchRetro } = trpc.retrospective.getById.useQuery(selectedRetro.id)

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
      <div className='flex flex-row flex-wrap w-full p-5 mt-2 border-2 rounded-md shadow-md border-base-dark dark:border-base-light'>
        <PhaseIndicator retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
      </div>
      {selectedRetro.phase === 'WRITING' ? (
        <div className='col-start-2 row-start-1 p-5 px-2 mt-2 border-2 rounded-md shadow-md border-base-dark dark:border-base-light'>
          <RetroTimer selectedRetro={currentRetro} handleUpdateRetro={handleUpdateRetro} />
        </div>
      ) : (
        <div className='invisible col-start-2 row-start-1 p-5 px-2 border-2 rounded-md shadow-md border-base-dark dark:border-base-light'>
          <RetroTimer selectedRetro={currentRetro} handleUpdateRetro={handleUpdateRetro} />
        </div>
      )}
      <ActionButtons retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
    </>
  )
}
