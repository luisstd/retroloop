'use client'
import { useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

import { Feedback } from '@/app/components/feedback/feedback'
import { Loader } from '@/app/components/loader/loader'
import { RetroActionBar } from '@/app/retro/action-bar/retro-action-bar'
import { DiscussPhase } from '@/app/retro/phase/discuss/discuss-phase'
import { VotePhase } from '@/app/retro/phase/vote/vote-phase'
import { WritePhase } from '@/app/retro/phase/write/write-phase'
import { api } from '@/trpc/react'

export default function Retro() {
  const { data: session } = useSession()
  const searchParams = useSearchParams()

  const userId = session?.user?.id
  const retroId = searchParams.get('id')

  const {
    data: selectedRetro,
    isLoading: isRetroLoading,
    refetch: refetchRetro,
  } = api.retrospective.getById.useQuery(retroId as string, {
    refetchInterval: 3000,
    refetchIntervalInBackground: true,
  })

  const { mutate: addParticipant } = api.retrospective.addParticipant.useMutation()

  useEffect(() => {
    if (retroId && userId) {
      addParticipant({ retroId, userId })
    }
  }, [userId, retroId, addParticipant])

  return selectedRetro ? (
    <>
      <RetroActionBar selectedRetro={selectedRetro} refetchRetro={refetchRetro} />
      {selectedRetro.phase === 'WRITING' && <WritePhase selectedRetro={selectedRetro} />}
      {selectedRetro.phase === 'VOTING' && <VotePhase selectedRetro={selectedRetro} />}
      {selectedRetro.phase === 'DISCUSSING' && <DiscussPhase selectedRetro={selectedRetro} />}
      {session?.user?.email && <Feedback userEmail={session.user.email} />}
    </>
  ) : (
    <div className='col-span-full'>
      <Loader isLoading={isRetroLoading} fullHeight />
    </div>
  )
}
