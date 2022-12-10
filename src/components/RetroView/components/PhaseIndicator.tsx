enum RetroPhase {
  WRITING = 'WRITING',
  VOTING = 'VOTING',
  DISCUSSING = 'DISCUSSING',
}

type PhaseIndicatorProps = {
  phase: string
}

function PhaseIndicator(props: PhaseIndicatorProps) {
  return (
    <div className='flex justify-between gap-2'>
      {props.phase === RetroPhase.WRITING ? (
        <div className='mx-2 text-xl dark:text-white '>01)Write</div>
      ) : (
        <div className='mx-2 text-xl text-gray-500'>01)Write</div>
      )}

      {props.phase === RetroPhase.VOTING ? (
        <div className='mx-2 text-xl dark:text-white'>02)Vote</div>
      ) : (
        <div className='mx-2 text-xl text-gray-500'>02)Vote</div>
      )}

      {props.phase === RetroPhase.DISCUSSING ? (
        <div className='mx-2 text-xl dark:text-white'>03)Discuss</div>
      ) : (
        <div className='mx-2 text-xl text-gray-500'>03)Discuss</div>
      )}
    </div>
  )
}

export default PhaseIndicator
