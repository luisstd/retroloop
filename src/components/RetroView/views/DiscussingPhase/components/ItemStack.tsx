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
    if (retroItems) {
      const sorted = [...retroItems].sort((a, b) => {
        // If both items have non-null votes, sort by votes
        if (a.votes !== null && b.votes !== null) {
          return b.votes - a.votes
        }
        // If only one item has non-null votes, move it to the top
        else if (a.votes !== null) {
          return -1
        } else if (b.votes !== null) {
          return 1
        }
        // If both items have null votes, maintain original order
        else {
          return 0
        }
      })
      setSortedItems(sorted)
    }
  }

  return (
    <>
      <div
        className='relative flex flex-wrap items-center justify-center w-full gap-2 mx-5 my-32 lg:mx-0 lg:my-0'
        style={{ flex: '1 1 auto' }}
      >
        {sortedItems.map((item, index) => (
          <div
            style={{
              zIndex: `${index}`,
              transform: `translate(${index * -5}px,${index * -5}px)`,
            }}
            className='absolute w-3/5 h-full p-10 text-lg text-center border-2 rounded-md border-base-dark bg-base-light max-w-5/6 dark:bg-base-dark dark:border-base-light'
            key={item.id}
          >
            <div className='flex items-center justify-center h-full gap-1 text-2xl text-center '>
              <q className='font-bold text-left'>
                <span className='mx-1 bg-base-light dark:bg-base-dark'>
                  {sortedItems[currentIndex].content}
                </span>
              </q>

              <div className='flex items-baseline gap-2 ml-5 text-6xl font-bold max-w-min'>
                +{sortedItems[currentIndex].votes}
                <IconThumbUp size={50} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItemStack
