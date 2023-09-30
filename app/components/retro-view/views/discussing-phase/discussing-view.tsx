'use client'

import { Retrospective } from '@prisma/client'
import { useState } from 'react'

import { RetroActionBar } from '@/components/retro-view/components/retro-action-bar'
import { ItemStack } from '@/components/retro-view/views/discussing-phase/components/item-stack/item-stack'
import { ItemSwitcher } from '@/components/retro-view/views/discussing-phase/components/item-switcher/item-switcher'
import { Card } from '@/ui/card/card'
import { trpc } from '@/utils/trpc'

type DiscussingViewProps = {
  selectedRetro: Retrospective
}

export function DiscussingView({ selectedRetro }: DiscussingViewProps) {
  const retroItems = trpc.retroItem.getAllByRetroId.useQuery(selectedRetro.id)

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
    <Card className='m-5 p-5'>
      <div className='flex h-5/6 w-full grid-cols-3 flex-col place-items-center gap-5 lg:grid'>
        <RetroActionBar selectedRetro={selectedRetro} />
      </div>

      <section className='h-screen w-full'>
        {retroItems.data ? (
          <div className='flex h-2/3 w-full items-center justify-center'>
            <ItemStack retroItems={retroItems.data} currentIndex={currentIndex} />
            <ItemSwitcher
              handleNextItem={handleNextItem}
              handlePreviousItem={handlePreviousItem}
              currentIndex={currentIndex}
              retroItems={retroItems.data}
            />
          </div>
        ) : null}
      </section>
    </Card>
  )
}
