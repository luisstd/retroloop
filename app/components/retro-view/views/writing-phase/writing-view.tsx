'use client'

import { Retrospective } from '@prisma/client'

import { RetroActionBar } from '@/components/retro-view/components/retro-action-bar'
import { ItemCollector } from '@/components/retro-view/views/writing-phase/components/item-collector/item-collector'
import { Card } from '@/ui/card/card'

type WritingViewProps = {
  selectedRetro: Retrospective
}

export function WritingView({ selectedRetro }: WritingViewProps) {
  return (
    <Card className='m-5 w-full p-5'>
      <div className='grid-rows-auto flex h-5/6 w-full grid-cols-3 flex-col place-items-center gap-5 lg:grid'>
        <RetroActionBar selectedRetro={selectedRetro} />

        {selectedRetro ? (
          <>
            <Card className='col-start-1 row-span-6 row-start-2 h-full w-full lg:min-h-screen'>
              <ItemCollector
                retrospective={selectedRetro}
                itemType='success'
                title={'things that went well'}
              />
            </Card>

            <Card className='col-start-2 row-span-6 row-start-2 h-full w-full lg:min-h-screen'>
              <ItemCollector
                retrospective={selectedRetro}
                itemType='improvement'
                title={'things that can be improved'}
              />
            </Card>

            <Card className='col-start-3 row-span-6 row-start-2 h-full w-full lg:min-h-screen'>
              <ItemCollector
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
