'use client'

import { RetroItem } from '@prisma/client'
import { IconArrowLeft, IconArrowRight, IconChecks } from '@tabler/icons-react'
import Link from 'next/link'

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
          <button
            onClick={handlePreviousItem}
            className='btn flex flex-row items-center gap-2 px-5 py-2 text-lg'
          >
            <IconArrowLeft />
            Previous
          </button>
        ) : (
          <button className='btn flex flex-row items-center gap-2 px-5 py-2 text-lg'>
            <IconArrowLeft className='opacity-0' />
            Previous
          </button>
        )}
        {currentIndex < retroItems.length - 1 ? (
          <button
            onClick={handleNextItem}
            className='btn flex flex-row items-center gap-2 px-5 py-2 text-lg'
          >
            Next
            <IconArrowRight />
          </button>
        ) : (
          <button className='btn flex flex-row items-center gap-2 px-5 py-2 text-lg'>
            Next
            <IconArrowRight className='opacity-0' />
          </button>
        )}
      </div>
      <div>
        <Link href={{ pathname: '/dashboard' }}>
          <button className='btn flex flex-row items-center gap-2 px-5 py-2 text-lg'>
            Finish Retro
            <IconChecks />
          </button>
        </Link>
      </div>
    </div>
  )
}
