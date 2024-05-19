'use client'

import { Retrospective } from '@prisma/client'
import { IconArrowRight, IconChecks } from '@tabler/icons-react'
import { useState } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/app/ui/alert-dialog/alert-dialog'
import { Button } from '@/app/ui/button/button'

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
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button aria-label='Switch phase' className='flex gap-1'>
          {isLastPhase ? 'Finish Retro' : 'Next Phase'}
          {isLastPhase ? <IconChecks /> : <IconArrowRight />}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogTitle>
          {isLastPhase ? 'Finish retro?' : 'Are you sure?'}
        </AlertDialogTitle>
        <AlertDialogDescription>
          {isLastPhase
            ? 'Leaving the retro view will take you back to the dashboard'
            : 'This will move the retrospective to the next phase for everyone'}
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => phaseSwitchHandler()}>
            {isLastPhase ? 'Yes, finish retro' : 'Yes, go to next phase'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
