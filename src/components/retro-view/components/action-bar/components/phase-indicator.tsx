import { Retrospective } from '@prisma/client'

enum RetroPhase {
  WRITING = 'WRITING',
  GROUPING = 'GROUPING',
  VOTING = 'VOTING',
  DISCUSSING = 'DISCUSSING',
}

type PhaseIndicatorProps = {
  retrospective: Retrospective
  handleUpdateRetro: (input: Retrospective) => void
}

export function PhaseIndicator({ retrospective, handleUpdateRetro }: PhaseIndicatorProps) {
  return (
    <div className='flex flex-row justify-around w-full'>
      {retrospective.phase === RetroPhase.WRITING ? (
        <div className='px-2 text-lg '>01) Write</div>
      ) : retrospective.phase === RetroPhase.GROUPING ||
        RetroPhase.VOTING ||
        RetroPhase.DISCUSSING ? (
        <div
          className='px-2 text-lg text-gray-500 transition ease-in-out rounded-md cursor-pointer hover:bg-hover-light dark:hover:text-base-dark dark:hover:bg-hover-dark'
          onClick={() => handleUpdateRetro({ ...retrospective, phase: RetroPhase.WRITING })}
        >
          01) Write
        </div>
      ) : (
        <div className='px-2 text-lg text-gray-500'>01) Write</div>
      )}

      {/* Disabled for now */}
      {/* {retrospective.phase === RetroPhase.GROUPING ? (
        <div className='px-2 text-lg '>02)Group</div>
      ) : retrospective.phase !== RetroPhase.WRITING &&
        (RetroPhase.VOTING || RetroPhase.DISCUSSING) ? (
        <div
          className='px-2 text-lg text-gray-500 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'
          onClick={() =>
            handleUpdateRetro({ ...retrospective, phase: RetroPhase.GROUPING })
          }
        >
          02)Group
        </div>
      ) : (
        <div className='px-2 text-lg text-gray-500'>02)Group</div>
      )} */}

      {retrospective.phase === RetroPhase.VOTING ? (
        <div className='px-2 text-lg'>02) Vote</div>
      ) : retrospective.phase === RetroPhase.DISCUSSING ? (
        <div
          className='px-2 text-lg text-gray-500 transition ease-in-out rounded-md cursor-pointer hover:bg-hover-light dark:hover:text-base-dark dark:hover:bg-hover-dark'
          onClick={() => handleUpdateRetro({ ...retrospective, phase: RetroPhase.VOTING })}
        >
          02) Vote
        </div>
      ) : (
        <div className='px-2 text-lg text-gray-500'>02) Vote</div>
      )}
      {retrospective.phase === RetroPhase.DISCUSSING ? (
        <div className='px-2 text-lg'>03) Discuss</div>
      ) : (
        <div className='px-2 text-lg text-gray-500'>03) Discuss</div>
      )}
    </div>
  )
}
