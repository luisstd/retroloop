'use client'

import { Retrospective } from '@prisma/client'
import { useState } from 'react'

import { ItemStack } from '@/app/retro/phase/discuss/components/item-stack/item-stack'
import { ItemSwitcher } from '@/app/retro/phase/discuss/components/item-switcher/item-switcher'
import { api } from '@/trpc/react'

type DiscussPhaseProps = {
  selectedRetro: Retrospective
}

export function DiscussPhase({ selectedRetro }: DiscussPhaseProps) {
  const retroItems = api.retroItem.getAllByRetroId.useQuery(selectedRetro.id)

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextItem = () => {
    if (retroItems.data && currentIndex > currentIndex - retroItems.data.length) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePreviousItem = () => {
    if (retroItems.data && currentIndex > currentIndex - retroItems.data.length) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <>
      {retroItems.data && (
        <>
          <div className='col-span-2 row-start-4 h-full w-[100rem] min-w-full max-w-full px-2 lg:min-h-screen'>
            <ItemStack retroItems={retroItems.data} currentIndex={currentIndex} />
          </div>
          <div className='col-span-2 row-start-4 h-full w-[100rem] min-w-full max-w-full px-2 lg:min-h-screen'>
            <ItemSwitcher
              handleNextItem={handleNextItem}
              handlePreviousItem={handlePreviousItem}
              currentIndex={currentIndex}
              retroItems={retroItems.data}
            />
          </div>
        </>
      )}
    </>
  )
}
