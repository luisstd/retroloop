'use client'

import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import GridLoader from 'react-spinners/GridLoader'

import { DiscussingView } from '@/app/components/retro-view/views/discussing-phase/discussing-view'
import { VotingView } from '@/app/components/retro-view/views/voting-phase/voting-view'
import { WritingView } from '@/app/components/retro-view/views/writing-phase/writing-view'
import { api } from '@/trpc/react'

export function RetroView() {
  const { resolvedTheme } = useTheme()
  const router = useRouter()
  const { data: session } = useSession()

  const userId = session?.user?.id
  const retroId = String(router.query.id)

  const { data: selectedRetro, isLoading: isRetroLoading } = api.retrospective.getById.useQuery(
    retroId,
    {
      refetchInterval: 5000,
      refetchIntervalInBackground: true,
    }
  )

  const { mutate: addParticipant } = api.retrospective.addParticipant.useMutation()

  useEffect(() => {
    if (retroId && userId && selectedRetro) {
      addParticipant({ retroId, userId })
    }
  }, [retroId, selectedRetro])

  return selectedRetro ? (
    <div className='flex flex-col items-center'>
      {selectedRetro.phase === 'WRITING' ? <WritingView selectedRetro={selectedRetro} /> : null}

      {selectedRetro.phase === 'VOTING' ? <VotingView selectedRetro={selectedRetro} /> : null}

      {selectedRetro.phase === 'DISCUSSING' ? (
        <DiscussingView selectedRetro={selectedRetro} />
      ) : null}
    </div>
  ) : (
    <div className='grid h-screen place-items-center'>
      <GridLoader
        color={resolvedTheme === 'light' ? 'black' : 'white'}
        loading={isRetroLoading}
        size={15}
        aria-label='Loading Spinner'
      />
    </div>
  )
}
