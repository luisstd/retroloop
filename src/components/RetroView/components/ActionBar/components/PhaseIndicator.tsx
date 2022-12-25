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

function PhaseIndicator(props: PhaseIndicatorProps) {
  return (
    <div className='flex justify-between gap-2'>
      {props.retrospective.phase === RetroPhase.WRITING ? (
        <div className='px-2 text-lg '>01)Write</div>
      ) : props.retrospective.phase === RetroPhase.GROUPING ||
        RetroPhase.VOTING ||
        RetroPhase.DISCUSSING ? (
        <div
          className='px-2 text-lg text-gray-500 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'
          onClick={() =>
            props.handleUpdateRetro({ ...props.retrospective, phase: RetroPhase.WRITING })
          }
        >
          01)Write
        </div>
      ) : (
        <div className='px-2 text-lg text-gray-500'>01)Write</div>
      )}

      {/* Disabled for now */}
      {/* {props.retrospective.phase === RetroPhase.GROUPING ? (
        <div className='px-2 text-lg '>02)Group</div>
      ) : props.retrospective.phase !== RetroPhase.WRITING &&
        (RetroPhase.VOTING || RetroPhase.DISCUSSING) ? (
        <div
          className='px-2 text-lg text-gray-500 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'
          onClick={() =>
            props.handleUpdateRetro({ ...props.retrospective, phase: RetroPhase.GROUPING })
          }
        >
          02)Group
        </div>
      ) : (
        <div className='px-2 text-lg text-gray-500'>02)Group</div>
      )} */}

      {props.retrospective.phase === RetroPhase.VOTING ? (
        <div className='px-2 text-lg'>02)Vote</div>
      ) : props.retrospective.phase === RetroPhase.DISCUSSING ? (
        <div
          className='px-2 text-lg text-gray-500 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'
          onClick={() =>
            props.handleUpdateRetro({ ...props.retrospective, phase: RetroPhase.VOTING })
          }
        >
          02)Vote
        </div>
      ) : (
        <div className='px-2 text-lg text-gray-500'>02)Vote</div>
      )}
      {props.retrospective.phase === RetroPhase.DISCUSSING ? (
        <div className='px-2 text-lg'>03)Discuss</div>
      ) : (
        <div className='px-2 text-lg text-gray-500'>03)Discuss</div>
      )}
    </div>
  )
}

export default PhaseIndicator
