import { Retrospective } from '@prisma/client'
import { useState } from 'react'

import RetroActionBar from '@/components/RetroView/components/RetroActionBar'
import ItemStack from '@/components/RetroView/views/DiscussingPhase/components/ItemStack'
import ItemSwitcher from '@/components/RetroView/views/DiscussingPhase/components/ItemSwitcher'
import { trpc } from '@/utils/trpc'

type DiscussingViewProps = {
  selectedRetro: Retrospective
  expiryTimestamp: Date
  minutes: number
  handleMinutes: (minutes: number) => void
  handleUpdateRetro: (input: Retrospective) => void
  handleUpdateTimer: (minutes: number) => void
}

function DiscussingView({
  selectedRetro,
  handleUpdateRetro,
  expiryTimestamp,
  handleUpdateTimer,
  minutes,
  handleMinutes,
}: DiscussingViewProps) {
  const retroItems = trpc.retroItem.getAllByRetroId.useQuery(selectedRetro.id)

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextItem = () => {
    if (retroItems.data && currentIndex > currentIndex - retroItems.data.length) {
      setCurrentIndex(currentIndex + 1)
      console.log('currentIndex', currentIndex)
    }
  }

  const handlePreviousItem = () => {
    if (retroItems.data && currentIndex > currentIndex - retroItems.data.length) {
      setCurrentIndex(currentIndex - 1)
      console.log('currentIndex', currentIndex)
    }
  }

  return (
    <section className='w-full h-screen px-5 mx-5 border-2 border-black rounded-md dark:border-neutral-200'>
      <div className='grid w-full grid-cols-3 grid-rows-6 gap-5 mt-16 h-5/6 place-items-start'>
        <RetroActionBar
          selectedRetro={selectedRetro}
          expiryTimestamp={expiryTimestamp}
          minutes={minutes}
          handleMinutes={handleMinutes}
          handleUpdateRetro={handleUpdateRetro}
          handleUpdateTimer={handleUpdateTimer}
        />

        {retroItems.data ? (
          <div className='flex w-full h-full col-span-3 col-start-1 row-span-2 row-start-3'>
            <ItemStack retroItems={retroItems.data} currentIndex={currentIndex} />
            <ItemSwitcher
              handleNextItem={handleNextItem}
              handlePreviousItem={handlePreviousItem}
              currentIndex={currentIndex}
              retroItems={retroItems.data}
            />
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default DiscussingView
