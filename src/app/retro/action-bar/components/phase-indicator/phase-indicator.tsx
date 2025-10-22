'use client'

import { Retrospective } from '@prisma/client'
import { IconUsers } from '@tabler/icons-react'

import { Button } from '@/app/ui/button'
import { Card } from '@/app/ui/card'
import { PHASE_NAMES, RetroPhase } from '@/types/retrospective'

type PhaseIndicatorProps = {
  retrospective: Retrospective
  userPhaseView: string
  setUserPhaseView: (phase: string) => void
}

export function PhaseIndicator({
  retrospective,
  userPhaseView,
  setUserPhaseView,
}: PhaseIndicatorProps) {
  const isWritingPhase = userPhaseView === RetroPhase.WRITING
  const isVotingPhase = userPhaseView === RetroPhase.VOTING
  const isDiscussingPhase = userPhaseView === RetroPhase.DISCUSSING

  const isOutOfSync = userPhaseView !== retrospective.phase
  const groupPhaseName =
    PHASE_NAMES[retrospective.phase as RetroPhase] || retrospective.phase

  return (
    <div className='flex w-full flex-col gap-2'>
      <Card className='flex h-full w-full flex-row justify-around p-3'>
        <Button
          variant={isWritingPhase ? 'default' : 'outline'}
          className={`text-md ${!isWritingPhase && 'text-muted-foreground'}`}
          onClick={() =>
            !isWritingPhase && setUserPhaseView(RetroPhase.WRITING)
          }
          aria-current={isWritingPhase ? 'true' : undefined}
          disabled={isWritingPhase}
        >
          [01] Write
        </Button>

        <Button
          variant={isVotingPhase ? 'default' : 'outline'}
          className={`text-md ${!isVotingPhase && 'text-muted-foreground'}`}
          onClick={() => !isVotingPhase && setUserPhaseView(RetroPhase.VOTING)}
          aria-current={isVotingPhase ? 'true' : undefined}
          disabled={isVotingPhase}
        >
          [02] Vote
        </Button>

        <Button
          variant={isDiscussingPhase ? 'default' : 'outline'}
          className={`text-md ${!isDiscussingPhase && 'text-muted-foreground'}`}
          onClick={() =>
            !isDiscussingPhase && setUserPhaseView(RetroPhase.DISCUSSING)
          }
          aria-current={isDiscussingPhase ? 'true' : undefined}
          disabled={isDiscussingPhase}
        >
          [03] Discuss
        </Button>
      </Card>

      {isOutOfSync && (
        <Card className='flex items-center justify-between gap-2 bg-blue-50 p-3 dark:bg-blue-950'>
          <div className='flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300'>
            <IconUsers size={16} />
            <span>
              Group is in <strong>{groupPhaseName}</strong> phase
            </span>
          </div>
          <Button
            variant='outline'
            size='sm'
            onClick={() => setUserPhaseView(retrospective.phase)}
            className='text-sm'
          >
            Return to Group
          </Button>
        </Card>
      )}
    </div>
  )
}
