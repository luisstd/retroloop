'use client'

import { RetroItem } from '@prisma/client'
import { IconThumbUp } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

import { Badge } from '@/ui/badge/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card/card'

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
            className='absolute h-full min-h-min w-full text-start text-lg'
            key={item.id}
          >
            <Card className='mx-auto flex h-64 w-2/3 flex-col break-words p-5'>
              <CardHeader className='flex flex-row items-center justify-between'>
                <CardTitle className='flex gap-2'>
                  Feedback <Badge variant='secondary'>{sortedItems[currentIndex].type}</Badge>
                </CardTitle>

                <Badge className='align-self-end flex items-center gap-2'>
                  <span className='text-xl'>+{sortedItems[currentIndex].votes}</span>
                  <IconThumbUp size={2} />
                </Badge>
              </CardHeader>

              <CardContent className='text-xl'>{sortedItems[currentIndex].content}</CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  )
}
