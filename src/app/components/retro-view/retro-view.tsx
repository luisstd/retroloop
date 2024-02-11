import { useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

import { Loader } from '@/app/components/loader/loader'
import { DiscussingView } from '@/app/components/retro-view/views/discussing-phase/discussing-view'
import { VotingView } from '@/app/components/retro-view/views/voting-phase/voting-view'
import { WritingView } from '@/app/components/retro-view/views/writing-phase/writing-view'
import { api } from '@/trpc/react'

export function RetroView() {
  const { data: session } = useSession()
  const searchParams = useSearchParams()

  const userId = session?.user?.id
  const retroId = searchParams.get('id')

  const {
    data: selectedRetro,
    isLoading: isRetroLoading,
    refetch: refetchRetro,
  } = api.retrospective.getById.useQuery(retroId as string, {
    refetchInterval: 500,
    refetchIntervalInBackground: true,
    cacheTime: 0,
  })

  const { mutate: addParticipant } = api.retrospective.addParticipant.useMutation()

  useEffect(() => {
    if (retroId && userId) {
      addParticipant({ retroId, userId })
    }
  }, [userId, retroId, addParticipant])

  return selectedRetro ? (
    <div className='flex flex-col items-center'>
      {selectedRetro.phase === 'WRITING' ? (
        <WritingView selectedRetro={selectedRetro} refetchRetro={refetchRetro} />
      ) : null}

      {selectedRetro.phase === 'VOTING' ? (
        <VotingView selectedRetro={selectedRetro} refetchRetro={refetchRetro} />
      ) : null}

      {selectedRetro.phase === 'DISCUSSING' ? (
        <DiscussingView selectedRetro={selectedRetro} refetchRetro={refetchRetro} />
      ) : null}
    </div>
  ) : (
    <Loader isLoading={isRetroLoading} fullHeight />
  )
}
