'use client'

import { RetroItem } from '@prisma/client'
import { IconThumbUp } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

type ItemStackProps = {
  retroItems: RetroItem[]
  currentIndex: number
}

export function ItemStack({ retroItems, currentIndex }: ItemStackProps) {
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
        className='relative mx-5 my-32 flex w-full flex-wrap items-center justify-center gap-2 lg:mx-0 lg:my-0'
        style={{ flex: '1 1 auto' }}
      >
        {sortedItems.map((item, index) => (
          <div
            style={{
              zIndex: `${index}`,
              transform: `translate(${index * -5}px,${index * -5}px)`,
            }}
            className='max-w-5/6 absolute h-full w-3/5 rounded-md border-2 border-base-dark bg-base-light p-10 text-center text-lg dark:border-base-light dark:bg-base-dark'
            key={item.id}
          >
            <div className='flex h-full items-center justify-center gap-1 text-center text-2xl '>
              <q className='text-left font-bold'>
                <span className='mx-1 bg-base-light dark:bg-base-dark'>
                  {sortedItems[currentIndex].content}
                </span>
              </q>

              <div className='ml-5 flex max-w-min items-baseline gap-2 text-6xl font-bold'>
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
