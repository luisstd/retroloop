'use client'

import { Retrospective } from '@prisma/client'
import * as Toast from '@radix-ui/react-toast'
import { IconArrowRight, IconCopy } from '@tabler/icons-react'
import { useState } from 'react'

type ActionButtonsProps = {
  retrospective: Retrospective
  handleUpdateRetro: (input: Retrospective) => void
}

export function ActionButtons({ retrospective, handleUpdateRetro }: ActionButtonsProps) {
  const [open, setOpen] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href)
    setOpen(true)
  }

  function handleNextPhase() {
    retrospective.phase === 'WRITING'
      ? handleUpdateRetro({
          ...retrospective,
          id: retrospective.id,
          phase: 'VOTING',
        })
      : null

    // Disabled for now
    // retrospective.phase === 'GROUPING'
    //   ? handleUpdateRetro({
    //       ...retrospective,
    //       id: retrospective.id,
    //       phase: 'VOTING',
    //     })
    //   : null

    retrospective.phase === 'VOTING'
      ? handleUpdateRetro({
          ...retrospective,
          id: retrospective.id,
          phase: 'DISCUSSING',
        })
      : null

    retrospective.phase === 'DISCUSSING'
      ? handleUpdateRetro({
          ...retrospective,
          id: retrospective.id,
          phase: 'DISCUSSING',
        })
      : null
  }

  return (
    <div className='mt-2 flex'>
      <Toast.Provider swipeDirection='right'>
        <button className='btn' type='submit' aria-label='Start Retro' onClick={handleCopy}>
          <div className='flex flex-row items-center gap-2 p-5 text-lg shadow-md'>
            Copy Retro link
            <IconCopy />
          </div>
        </button>

        <Toast.Root open={open} onOpenChange={setOpen}>
          <Toast.Title className='text-md flex items-center gap-2'>
            <span>Copied retrospective link to clipboard!</span>
            <IconCopy />
          </Toast.Title>
        </Toast.Root>

        {open ? (
          <Toast.Viewport className='fixed bottom-0 right-0 z-50 m-5 w-fit gap-2 rounded-md border-2 border-base-dark bg-base-light p-5 text-base-dark dark:border-base-light dark:bg-base-dark dark:text-base-light ' />
        ) : null}
      </Toast.Provider>

      <button type='submit' aria-label='Start Retro' className='btn mx-2' onClick={handleNextPhase}>
        <div className='flex flex-row items-center gap-2 p-5 text-lg shadow-md'>
          Next Phase
          <IconArrowRight />
        </div>
      </button>
    </div>
  )
}
