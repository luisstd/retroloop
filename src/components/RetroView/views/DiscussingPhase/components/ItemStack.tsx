import { RetroItem } from '@prisma/client'
import { IconThumbUp } from '@tabler/icons'
import { useEffect, useState } from 'react'

type ItemStackProps = {
  retroItems: RetroItem[]
  currentIndex: number
}

function ItemStack({ retroItems, currentIndex }: ItemStackProps) {
  const [sortedItems, setSortedItems] = useState(retroItems)

  useEffect(() => {
    sortItems()
  }, [retroItems])

  function sortItems(): void {
    retroItems
      ? setSortedItems(
          [...retroItems].sort((a, b) => {
            if (b.votes === null) {
              return 1
            }
            if (a.votes === null) {
              return -1
            }
            return b.votes - a.votes
          })
        )
      : null
  }

  return (
    <>
      <div
        className='relative flex flex-wrap items-center justify-center w-full gap-2'
        style={{ flex: '1 1 auto' }}
      >
        {sortedItems.map((item, index) => (
          <div
            style={{
              zIndex: `${index}`,
              transform: `translate(${index * -5}px,${index * -5}px)`,
            }}
            className='absolute w-5/6 p-16 mx-12 text-lg text-center bg-white border-2 border-black rounded-md max-w-5/6 dark:bg-black dark:border-neutral-200'
            key={item.id}
          >
            <div className='flex items-center gap-1'>
              <div>{sortedItems[currentIndex].content}</div>
              <div className='flex items-center gap-2 ml-5 text-4xl font-bold'>
                +{sortedItems[currentIndex].votes}
                <IconThumbUp size={32} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItemStack
