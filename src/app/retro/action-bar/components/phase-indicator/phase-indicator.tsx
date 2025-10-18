'use client'

import { Retrospective } from '@prisma/client'

import { Button } from '@/app/ui/button'
import { Card } from '@/app/ui/card'

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

export function PhaseIndicator({
  retrospective,
  handleUpdateRetro,
}: PhaseIndicatorProps) {
  const isWritingPhase = retrospective.phase === RetroPhase.WRITING
  const isVotingPhase = retrospective.phase === RetroPhase.VOTING
  const isDiscussingPhase = retrospective.phase === RetroPhase.DISCUSSING

  return (
    <Card className='flex h-full w-full flex-row justify-around p-3'>
      <Button
        variant={isWritingPhase ? 'default' : 'outline'}
        className={`text-md ${!isWritingPhase && 'text-muted-foreground'}`}
        onClick={() =>
          !isWritingPhase &&
          handleUpdateRetro({ ...retrospective, phase: RetroPhase.WRITING })
        }
        aria-current={isWritingPhase ? 'true' : undefined}
        disabled={isWritingPhase}
      >
        [01] Write
      </Button>

      <Button
        variant={isVotingPhase ? 'default' : 'outline'}
        className={`text-md ${!isVotingPhase && 'text-muted-foreground'}`}
        onClick={() =>
          !isVotingPhase &&
          handleUpdateRetro({ ...retrospective, phase: RetroPhase.VOTING })
        }
        aria-current={isVotingPhase ? 'true' : undefined}
        disabled={isVotingPhase}
      >
        [02] Vote
      </Button>

      <Button
        variant={isDiscussingPhase ? 'default' : 'outline'}
        className={`text-md ${!isDiscussingPhase && 'text-muted-foreground'}`}
        onClick={() =>
          !isDiscussingPhase &&
          handleUpdateRetro({ ...retrospective, phase: RetroPhase.DISCUSSING })
        }
        aria-current={isDiscussingPhase ? 'true' : undefined}
        disabled={isDiscussingPhase}
      >
        [03] Discuss
      </Button>
    </Card>
  )
}
