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

  // get selected retro
  const retroId = String(router.query.id)
  const selectedRetro = trpc.retrospective.getById.useQuery(retroId)

  return selectedRetro.data ? (
    <>
      <div className='flex h-full w-full max-w-screen-2xl items-center justify-center px-1'>
        {selectedRetro.data.phase === 'WRITING' ? (
          <WritingView selectedRetro={selectedRetro.data} />
        ) : null}

        {selectedRetro.data.phase === 'VOTING' ? (
          <VotingView selectedRetro={selectedRetro.data} />
        ) : null}

        {selectedRetro.data.phase === 'DISCUSSING' ? (
          <DiscussingView selectedRetro={selectedRetro.data} />
        ) : null}
      </div>
    </>
  ) : (
    <div className='grid h-screen place-items-center'>
      <GridLoader
        color={resolvedTheme === 'light' ? 'black' : 'white'}
        loading={selectedRetro.isLoading}
        size={15}
        aria-label='Loading Spinner'
      />
    </div>
  )
}
