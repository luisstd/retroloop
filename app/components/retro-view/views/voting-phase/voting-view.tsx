'use client'

import { Retrospective } from '@prisma/client'

import { RetroActionBar } from '@/components/retro-view/components/retro-action-bar'
import { ItemVoter } from '@/components/retro-view/views/voting-phase/components/item-voter'

type VotingViewProps = {
  selectedRetro: Retrospective
}

export function VotingView({ selectedRetro }: VotingViewProps) {
  return (
    <section className='mx-5 min-h-min w-full rounded-md border-2 border-black px-5 pb-2 dark:border-neutral-200 lg:h-full'>
      <div className='grid-rows-auto flex h-5/6 w-full grid-cols-3 flex-col place-items-center gap-5 lg:grid'>
        <RetroActionBar selectedRetro={selectedRetro} />

        {selectedRetro ? (
          <>
            <div className='col-start-1 row-span-6 row-start-2 h-full w-full rounded-md border-2 border-black p-5 dark:border-neutral-200 lg:min-h-screen'>
              <ItemVoter
                retrospective={selectedRetro}
                itemType='success'
                title={'things that went well'}
              />
            </div>
            <div className='col-start-2 row-span-6 row-start-2 h-full w-full rounded-md border-2 border-black p-5 dark:border-neutral-200'>
              <ItemVoter
                retrospective={selectedRetro}
                itemType='improvement'
                title={'things that can be improved'}
              />
            </div>
            <div className='col-start-3 row-span-6 row-start-2 h-full w-full rounded-md border-2 border-black p-5 dark:border-neutral-200'>
              <ItemVoter
                retrospective={selectedRetro}
                itemType='action'
                title={'things to start doing'}
              />
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}
