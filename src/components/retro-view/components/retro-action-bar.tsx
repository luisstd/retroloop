import { Retrospective } from '@prisma/client'

import ActionButtons from '@/components/retro-view/components/action-bar/components/action-buttons'
import PhaseIndicator from '@/components/retro-view/components/action-bar/components/phase-indicator'
import RetroTimer from '@/components/retro-view/components/action-bar/components/retro-timer'
import { trpc } from '@/utils/trpc'

type RetroActionBarProps = {
  selectedRetro: Retrospective
}

function RetroActionBar({ selectedRetro }: RetroActionBarProps) {
  const { refetch: refetchRetro } = trpc.retrospective.getById.useQuery(selectedRetro.id)

  const { mutate: updateRetro } = trpc.retrospective.edit.useMutation({
    onSuccess: () => {
      refetchRetro()
    },
  })

  function handleUpdateRetro(input: Retrospective) {
    updateRetro(input)
  }

  return (
    <>
      <div className='flex flex-row flex-wrap w-full p-5 mt-2 border-2 rounded-md shadow-md border-base-dark lg:mt-0 dark:border-base-light'>
        <PhaseIndicator retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
      </div>
      {selectedRetro.phase === 'WRITING' ? (
        <div className='col-start-2 row-start-1 p-5 px-2 border-2 rounded-md shadow-md border-base-dark dark:border-base-light'>
          <RetroTimer selectedRetro={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
        </div>
      ) : (
        <div className='col-start-2 row-start-1 p-5 rounded-md dark:border-neutral-200'></div>
      )}
      <ActionButtons retrospective={selectedRetro} handleUpdateRetro={handleUpdateRetro} />
    </>
  )
}

export default RetroActionBar
