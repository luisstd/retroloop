'use client'

import { Retrospective } from '@prisma/client'
import { IconCopy } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { PhaseSwitchDialog } from '@/app/retro/action-bar/components/action-buttons/phase-switch-dialog'
import { Button } from '@/app/ui/button'
import { RetroPhase } from '@/types/retrospective'
import { useFullUrl } from '@/utils/utils'

type ActionButtonsProps = {
  retrospective: Retrospective
  handleUpdateRetro: (input: Retrospective) => void
  isTimerRunning: boolean
}

export function ActionButtons({
  retrospective,
  handleUpdateRetro,
  isTimerRunning,
}: ActionButtonsProps) {
  const router = useRouter()
  const fullUrl = useFullUrl()

  function handleCopy() {
    navigator.clipboard.writeText(fullUrl)
    toast('Copied retrospective link to clipboard', {
      description: 'Anyone with this link can join your retrospective',
    })
  }

  function handleNextPhase() {
    retrospective.phase === RetroPhase.WRITING &&
      handleUpdateRetro({
        ...retrospective,
        id: retrospective.id,
        phase: RetroPhase.VOTING,
      })

    retrospective.phase === RetroPhase.VOTING &&
      handleUpdateRetro({
        ...retrospective,
        id: retrospective.id,
        phase: RetroPhase.DISCUSSING,
      })

    retrospective.phase === RetroPhase.DISCUSSING && router.push(`/dashboard`)
  }

  const participantCount =
    'participants' in retrospective
      ? (retrospective as { participants?: unknown[] }).participants?.length
      : undefined

  return (
    <div className='flex gap-2'>
      <Button
        aria-label='Start Retro'
        className='flex gap-1'
        onClick={handleCopy}
      >
        Copy link
        <IconCopy />
      </Button>

      <PhaseSwitchDialog
        phaseSwitchHandler={handleNextPhase}
        phase={retrospective.phase}
        participantCount={participantCount}
        isTimerRunning={isTimerRunning}
      />
    </div>
  )
}
