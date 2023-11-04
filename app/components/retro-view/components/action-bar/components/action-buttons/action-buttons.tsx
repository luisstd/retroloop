'use client'

import { Retrospective } from '@prisma/client'
import { IconArrowRight, IconCopy } from '@tabler/icons-react'

import { Button } from '@/ui/button/button'
import { toast } from '@/ui/toast/use-toast'

type ActionButtonsProps = {
  retrospective: Retrospective
  handleUpdateRetro: (input: Retrospective) => void
}

export function ActionButtons({ retrospective, handleUpdateRetro }: ActionButtonsProps) {
  function handleCopy() {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: 'Copied retrospective link to clipboard',
      description: 'Anyone with this link can join your retrospective',
    })
  }

  function handleNextPhase() {
    retrospective.phase === 'WRITING'
      ? handleUpdateRetro({
          ...retrospective,
          id: retrospective.id,
          phase: 'VOTING',
        })
      : null

    retrospective.phase === 'VOTING'
      ? handleUpdateRetro({
          ...retrospective,
          id: retrospective.id,
          phase: 'DISCUSSING',
        })
      : null

    retrospective.phase === 'DISCUSSING'
      ? handleUpdateRetro({
          ...retrospective,
          id: retrospective.id,
          phase: 'DISCUSSING',
        })
      : null
  }

  return (
    <div className='flex gap-4'>
      <Button aria-label='Start Retro' onClick={handleCopy}>
        Copy Retro link
        <IconCopy />
      </Button>

      <Button aria-label='Start Retro' onClick={handleNextPhase}>
        Next Phase
        <IconArrowRight />
      </Button>
    </div>
  )
}
