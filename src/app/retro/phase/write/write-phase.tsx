'use client'

import { Retrospective } from '@prisma/client'

import { ItemCollector } from '@/app/retro/phase/write/components/item-collector/item-collector'
import { Card } from '@/app/ui/card/card'

type WritePhaseProps = {
  selectedRetro: Retrospective
}

export function WritePhase({ selectedRetro }: WritePhaseProps) {
  return (
    <>
      {selectedRetro && (
        <>
          <Card className='col-start-1 row-span-6 row-start-2 h-full min-w-full max-w-full px-2 lg:min-h-screen'>
            <ItemCollector retrospective={selectedRetro} itemType='success' title={'Went well'} />
          </Card>

          <Card className='col-start-2 row-span-6 row-start-2 h-full min-w-full max-w-full px-2 lg:min-h-screen'>
            <ItemCollector
              retrospective={selectedRetro}
              itemType='improvement'
              title={'Can be improved'}
            />
          </Card>

          <Card className='col-start-3 row-span-6 row-start-2 h-full min-w-full max-w-full px-2 lg:min-h-screen'>
            <ItemCollector retrospective={selectedRetro} itemType='action' title={'Start doing'} />
          </Card>
        </>
      )}
    </>
  )
}
