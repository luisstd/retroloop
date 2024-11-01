'use client'

import { Retrospective } from '@prisma/client'
import { IconCopy } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

import { PhaseSwitchDialog } from '@/app/retro/action-bar/components/action-buttons/phase-switch-dialog'
import { Button } from '@/app/ui/button/button'
import { toast } from '@/app/ui/toast/use-toast'
import { useFullUrl } from '@/utils/utils'

type ActionButtonsProps = {
  retrospective: Retrospective
  handleUpdateRetro: (input: Retrospective) => void
}

export function ActionButtons({
  retrospective,
  handleUpdateRetro,
}: ActionButtonsProps) {
  const router = useRouter()
  const fullUrl = useFullUrl()

  function handleCopy() {
    navigator.clipboard.writeText(fullUrl)
    toast({
      title: 'Copied retrospective link to clipboard',
      description: 'Anyone with this link can join your retrospective',
    })
  }

  function handleNextPhase() {
    retrospective.phase === 'WRITING' &&
      handleUpdateRetro({
        ...retrospective,
        id: retrospective.id,
        phase: 'VOTING',
      })

    retrospective.phase === 'VOTING' &&
      handleUpdateRetro({
        ...retrospective,
        id: retrospective.id,
        phase: 'DISCUSSING',
      })

    retrospective.phase === 'DISCUSSING' && router.push(`/dashboard`)
  }

  return (
    <div className='flex gap-2'>
      <Button
        aria-label='Start Retro'
        className='flex gap-1'
        onClick={handleCopy}
        size={'sm'}
      >
        Copy link
        <IconCopy />
      </Button>

      <PhaseSwitchDialog
        phaseSwitchHandler={handleNextPhase}
        phase={retrospective.phase}
      />
    </div>
  )
}
