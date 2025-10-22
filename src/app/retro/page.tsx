'use client'
import { SpaceProvider } from '@ably/spaces/react'
import { ChannelProvider } from 'ably/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

import { Feedback } from '@/app/components/feedback/feedback'
import { Loader } from '@/app/components/loader/loader'
import { RetroActionBar } from '@/app/retro/action-bar/retro-action-bar'
import { DiscussPhase } from '@/app/retro/phase/discuss/discuss-phase'
import { VotePhase } from '@/app/retro/phase/vote/vote-phase'
import { WritePhase } from '@/app/retro/phase/write/write-phase'
import { useSession } from '@/lib/auth-client'
import { api } from '@/trpc/react'
import { PHASE_NAMES, RetroPhase } from '@/types/retrospective'

export default function Retro() {
  const { data: session, isPending } = useSession()
  const searchParams = useSearchParams()

  const pathname = usePathname()
  const router = useRouter()
  const isAuthenticated = !!session?.user

  const userId = session?.user?.id
  const retroId = searchParams.get('id')

  const {
    data: selectedRetro,
    isLoading: isRetroLoading,
    refetch: refetchRetro,
  } = api.retrospective.getById.useQuery(retroId as string, {
    enabled: isAuthenticated && !isPending,
    refetchInterval: 3000,
    refetchIntervalInBackground: true,
  })

  const { mutate: addParticipant } =
    api.retrospective.addParticipant.useMutation()

  const [userPhaseView, setUserPhaseView] = useState<string>(
    selectedRetro?.phase ?? RetroPhase.WRITING,
  )

  const previousSharedPhaseRef = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (selectedRetro?.phase) {
      const currentSharedPhase = selectedRetro.phase

      if (previousSharedPhaseRef.current === undefined) {
        previousSharedPhaseRef.current = currentSharedPhase
        setUserPhaseView(currentSharedPhase)
        return
      }

      if (previousSharedPhaseRef.current !== currentSharedPhase) {
        if (previousSharedPhaseRef.current === userPhaseView) {
          setUserPhaseView(currentSharedPhase)
        } else {
          const phaseName =
            PHASE_NAMES[currentSharedPhase as RetroPhase] || currentSharedPhase
          toast.info(`Group moved to ${phaseName} phase`, {
            description: 'Click "Return to Group" to sync with everyone',
            duration: 5000,
          })
        }

        previousSharedPhaseRef.current = currentSharedPhase
      }
    }
  }, [selectedRetro?.phase, userPhaseView])

  useEffect(() => {
    if (retroId && userId) {
      addParticipant({ retroId, userId })
    }
  }, [userId, retroId, addParticipant])

  useEffect(() => {
    if (!isPending && !isAuthenticated) {
      const currentUrl = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`
      const callbackURL = encodeURIComponent(currentUrl)
      router.push(`/auth/login?callbackurl=${callbackURL}`)
    }
  }, [isPending, isAuthenticated, router, pathname, searchParams])

  if (isPending || !isAuthenticated) {
    return null
  }

  return selectedRetro ? (
    <ChannelProvider channelName={selectedRetro.id}>
      <SpaceProvider name={selectedRetro.id}>
        <RetroActionBar
          selectedRetro={selectedRetro}
          refetchRetro={refetchRetro}
          userPhaseView={userPhaseView}
          setUserPhaseView={setUserPhaseView}
        />
        {userPhaseView === RetroPhase.WRITING && (
          <WritePhase selectedRetro={selectedRetro} />
        )}
        {userPhaseView === RetroPhase.VOTING && (
          <VotePhase selectedRetro={selectedRetro} />
        )}
        {userPhaseView === RetroPhase.DISCUSSING && (
          <DiscussPhase selectedRetro={selectedRetro} />
        )}
        {session?.user?.email && <Feedback userEmail={session.user.email} />}
      </SpaceProvider>
    </ChannelProvider>
  ) : (
    <div className='col-span-full'>
      <Loader isLoading={isRetroLoading} fullHeight />
    </div>
  )
}
