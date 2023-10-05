'use client'

import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import GridLoader from 'react-spinners/GridLoader'

import { DiscussingView } from '@/components/retro-view/views/discussing-phase/discussing-view'
import { VotingView } from '@/components/retro-view/views/voting-phase/voting-view'
import { WritingView } from '@/components/retro-view/views/writing-phase/writing-view'
import { trpc } from '@/utils/trpc'

export function RetroView() {
  const { resolvedTheme } = useTheme()
  const router = useRouter()

  const retroId = String(router.query.id)
  const { data: selectedRetro, isLoading: isRetroLoading } = trpc.retrospective.getById.useQuery(
    retroId,
    {
      refetchInterval: 5000,
      refetchIntervalInBackground: true,
    }
  )

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
