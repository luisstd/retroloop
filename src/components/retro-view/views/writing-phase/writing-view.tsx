import { Retrospective } from '@prisma/client'

import { RetroActionBar } from '@/components/retro-view/components/retro-action-bar'
import { ItemCollector } from '@/components/retro-view/views/writing-phase/components/item-collector/item-collector'

type WritingViewProps = {
  selectedRetro: Retrospective
}

export function WritingView({ selectedRetro }: WritingViewProps) {
  return (
    <section className='w-full px-5 pb-2 mx-5 border-2 border-black rounded-md lg:h-full min-h-min dark:border-neutral-200'>
      <div className='flex flex-col w-full grid-cols-3 gap-5 lg:grid grid-rows-auto h-5/6 place-items-center'>
        <RetroActionBar selectedRetro={selectedRetro} />

        {selectedRetro ? (
          <>
            <div className='w-full h-full col-start-1 row-span-6 row-start-2 p-5 border-2 border-black rounded-md lg:min-h-screen dark:border-neutral-200'>
              <ItemCollector
                retrospective={selectedRetro}
                itemType='success'
                title={'things that went well'}
              />
            </div>
            <div className='w-full h-full col-start-2 row-span-6 row-start-2 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemCollector
                retrospective={selectedRetro}
                itemType='improvement'
                title={'things that can be improved'}
              />
            </div>
            <div className='w-full h-full col-start-3 row-span-6 row-start-2 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemCollector
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
