'use client'

import { IconArrowRight } from '@tabler/icons-react'
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
  phaseSwitchHandler: () => void
}

export function PhaseSwitchDialog({ phaseSwitchHandler }: PhaseSwitchDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button aria-label='Switch phase'>
          Next Phase
          <IconArrowRight />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This will move the retrospective to the next phase for everyone
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => phaseSwitchHandler()}>
            Yes, go to next phase
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
