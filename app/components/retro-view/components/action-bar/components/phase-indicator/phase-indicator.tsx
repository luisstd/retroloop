'use client'

import { Retrospective } from '@prisma/client'

import { Button } from '@/ui/button/button'
import { Card } from '@/ui/card/card'

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
  const isWritingPhase = retrospective.phase === RetroPhase.WRITING
  const isVotingPhase = retrospective.phase === RetroPhase.VOTING
  const isDiscussingPhase = retrospective.phase === RetroPhase.DISCUSSING

  return (
    <Card className='flex w-full flex-row justify-around p-5'>
      <Button
        variant={isWritingPhase ? null : 'ghost'}
        className={`text-lg ${isWritingPhase ? 'cursor-default' : 'text-muted-foreground'}`}
        onClick={() =>
          !isWritingPhase && handleUpdateRetro({ ...retrospective, phase: RetroPhase.WRITING })
        }
      >
        [01] Write
      </Button>

      <Button
        variant={isWritingPhase || isVotingPhase ? null : 'ghost'}
        className={`text-lg ${isVotingPhase ? 'cursor-default' : 'text-muted-foreground'}`}
        onClick={() =>
          !(isWritingPhase || isVotingPhase) &&
          handleUpdateRetro({ ...retrospective, phase: RetroPhase.VOTING })
        }
      >
        [02] Vote
      </Button>

      <Button
        variant={isWritingPhase || isVotingPhase || isDiscussingPhase ? null : 'ghost'}
        className={`text-lg ${isDiscussingPhase ? 'cursor-default' : 'text-muted-foreground'}`}
      >
        [03] Discuss
      </Button>
    </Card>
  )
}
