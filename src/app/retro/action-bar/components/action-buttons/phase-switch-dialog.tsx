'use client'

import { Retrospective } from '@prisma/client'
import { IconArrowRight, IconChecks } from '@tabler/icons-react'
import { useState } from 'react'

import { Button } from '@/app/ui/button'
import { Dialog } from '@/app/ui/dialog'

type PhaseSwitchDialogProps = {
  phase: Retrospective['phase']
  phaseSwitchHandler: () => void
}

export function PhaseSwitchDialog({
  phase,
  phaseSwitchHandler,
}: PhaseSwitchDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isLastPhase = phase === 'DISCUSSING'

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button aria-label='Switch phase'>
          {isLastPhase ? 'Finish Retro' : 'Next Phase'}
          {isLastPhase ? <IconChecks /> : <IconArrowRight />}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content size='md'>
        <Dialog.Header>
          <span>{isLastPhase ? 'Finish retro?' : 'Are you sure?'}</span>
        </Dialog.Header>
        <Dialog.Description>
          {isLastPhase
            ? 'Leaving the retro view will take you back to the dashboard'
            : 'This will move the retrospective to the next phase for everyone'}
        </Dialog.Description>
        <Dialog.Footer>
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
            {isLastPhase ? 'Yes, finish retro' : 'Yes, go to next phase'}
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  )
}
