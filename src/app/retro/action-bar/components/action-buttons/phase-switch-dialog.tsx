'use client'

import { Retrospective } from '@prisma/client'
import { IconArrowRight, IconChecks, IconUsers } from '@tabler/icons-react'
import { useState } from 'react'

import { Button } from '@/app/ui/button'
import { Dialog } from '@/app/ui/dialog'
import { Tooltip } from '@/app/ui/tooltip'
import { NEXT_PHASE_MAP, PHASE_NAMES, RetroPhase } from '@/types/retrospective'

type PhaseSwitchDialogProps = {
  phase: Retrospective['phase']
  phaseSwitchHandler: () => void
  participantCount?: number
  isTimerRunning: boolean
}

export function PhaseSwitchDialog({
  phase,
  phaseSwitchHandler,
  participantCount,
  isTimerRunning,
}: PhaseSwitchDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isLastPhase = phase === RetroPhase.DISCUSSING
  const nextPhase = NEXT_PHASE_MAP[phase as RetroPhase]
  const nextPhaseName = nextPhase ? PHASE_NAMES[nextPhase] : null

  return (
    <Tooltip.Provider>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {isTimerRunning ? (
          <Tooltip>
            <Tooltip.Trigger asChild>
              <span className='inline-block'>
                <Button aria-label='Switch phase' disabled={true}>
                  {isLastPhase ? 'Finish Retro' : 'Next Phase'}
                  {isLastPhase ? <IconChecks /> : <IconArrowRight />}
                </Button>
              </span>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Stop the timer before switching phases</p>
            </Tooltip.Content>
          </Tooltip>
        ) : (
          <Dialog.Trigger asChild>
            <Button aria-label='Switch phase'>
              {isLastPhase ? 'Finish Retro' : 'Next Phase'}
              {isLastPhase ? <IconChecks /> : <IconArrowRight />}
            </Button>
          </Dialog.Trigger>
        )}

        <Dialog.Content size='lg'>
          <Dialog.Header>
            <span className='text-xl font-semibold'>
              {isLastPhase
                ? 'Finish retro?'
                : `Move everyone to ${nextPhaseName}?`}
            </span>
          </Dialog.Header>
          <div className='space-y-3 px-4 pt-2'>
            {isLastPhase ? (
              <p className='text-muted-foreground text-base'>
                Leaving the retro view will take you back to the dashboard
              </p>
            ) : (
              <>
                <p className='text-base'>
                  This will immediately move all participants to the{' '}
                  <strong>{nextPhaseName}</strong> phase.
                </p>
                {participantCount !== undefined && participantCount > 1 && (
                  <div className='text-muted-foreground flex items-center gap-2 text-sm'>
                    <IconUsers size={16} />
                    <span>
                      {participantCount}{' '}
                      {participantCount === 1 ? 'participant' : 'participants'}{' '}
                      will be affected
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
          <Dialog.Footer className='mt-4'>
            <Button
              variant='outline'
              onClick={() => setIsOpen(false)}
              aria-label='Cancel'
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                phaseSwitchHandler()
                setIsOpen(false)
              }}
              aria-label='Confirm phase switch'
            >
              {isLastPhase
                ? 'Yes, finish retro'
                : `Yes, move everyone to ${nextPhaseName}`}
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </Tooltip.Provider>
  )
}
