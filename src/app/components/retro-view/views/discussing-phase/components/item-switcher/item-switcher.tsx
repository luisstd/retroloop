'use client'

import { RetroItem } from '@prisma/client'
import { IconArrowLeft, IconArrowRight, IconChecks } from '@tabler/icons-react'
import Link from 'next/link'
import { Button } from 'src/app/ui/button/button'

type ItemSwitcherProps = {
  handleNextItem: () => void
  handlePreviousItem: () => void
  retroItems: RetroItem[]
  currentIndex: number
}

export function ItemSwitcher({
  handleNextItem,
  handlePreviousItem,
  currentIndex,
  retroItems,
}: ItemSwitcherProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <div className='mx-2 flex items-center gap-2'>
        {currentIndex > 0 ? (
          <Button onClick={handlePreviousItem}>
            <IconArrowLeft />
            Previous
          </Button>
        ) : (
          <Button>
            <IconArrowLeft className='opacity-0' />
            Previous
          </Button>
        )}
        {currentIndex < retroItems.length - 1 ? (
          <Button onClick={handleNextItem}>
            Next
            <IconArrowRight />
          </Button>
        ) : (
          <Button>
            Next
            <IconArrowRight className='opacity-0' />
          </Button>
        )}
      </div>
      <div>
        <Link href={{ pathname: '/dashboard' }}>
          <Button>
            Finish Retro
            <IconChecks />
          </Button>
        </Link>
      </div>
    </div>
  )
}
