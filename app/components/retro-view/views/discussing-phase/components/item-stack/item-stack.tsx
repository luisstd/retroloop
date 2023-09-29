'use client'

import { RetroItem } from '@prisma/client'
import { IconThumbUp } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

import { Badge } from '@/ui/badge/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/ui/card/card'

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
        className='relative flex w-full flex-wrap items-center justify-center gap-2 lg:mx-0 lg:my-0'
        style={{ flex: '1 1 auto' }}
      >
        {sortedItems.map((item, index) => (
          <div
            style={{
              zIndex: `${index}`,
              transform: `translate(${index * -5}px,${index * -5}px)`,
            }}
            className='absolute h-full w-full p-10 text-center text-lg'
            key={item.id}
          >
            <Card className='mx-auto flex h-64 w-2/3 break-words p-5'>
              <CardHeader className='flex w-full flex-row items-center justify-between gap-2'>
                <CardTitle>{sortedItems[currentIndex].content}</CardTitle>

                <CardDescription className='flex flex-col gap-2'>
                  <Badge className='flex items-center gap-2'>
                    <span className='text-xl'>+{sortedItems[currentIndex].votes}</span>
                    <IconThumbUp size={2} />
                  </Badge>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </>
  )
}
