'use client'

import { Retrospective } from '@prisma/client'

import { RetroActionBar } from '@/app/components/retro-view/components/retro-action-bar'
import { ItemVoter } from '@/app/components/retro-view/views/voting-phase/components/item-voter'
import { Card } from '@/app/ui/card/card'

type VotingViewProps = {
  selectedRetro: Retrospective
}

export function VotingView({ selectedRetro }: VotingViewProps) {
  return (
    <Card className='m-5 p-5'>
      <div className='grid-rows-auto flex h-5/6 w-full grid-cols-3 flex-col place-items-center gap-5 lg:grid'>
        <RetroActionBar selectedRetro={selectedRetro} />

        {selectedRetro ? (
          <>
            <Card className='col-start-1 row-span-6 row-start-2 h-full w-[100rem] min-w-full max-w-full px-2 lg:min-h-screen'>
              <ItemVoter
                retrospective={selectedRetro}
                itemType='success'
                title={'things that went well'}
              />
            </Card>

            <Card className='col-start-2 row-span-6 row-start-2 h-full w-[100rem] min-w-full max-w-full px-2 lg:min-h-screen'>
              <ItemVoter
                retrospective={selectedRetro}
                itemType='improvement'
                title={'things that can be improved'}
              />
            </Card>

            <Card className='col-start-3 row-span-6 row-start-2 h-full w-[100rem] min-w-full max-w-full px-2 lg:min-h-screen'>
              <ItemVoter
                retrospective={selectedRetro}
                itemType='action'
                title={'things to start doing'}
              />
            </Card>
          </>
        ) : null}
      </div>
    </Card>
  )
}
