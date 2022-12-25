import { Retrospective } from '@prisma/client'
import * as Toast from '@radix-ui/react-toast'
import { IconArrowRight, IconCopy } from '@tabler/icons'
import { useState } from 'react'

type ActionButtonsProps = {
  retrospective: Retrospective
  handleUpdateRetro: (input: Retrospective) => void
}

function ActionButtons(props: ActionButtonsProps) {
  const [open, setOpen] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href)
    setOpen(true)
  }

  function handleNextPhase() {
    props.retrospective.phase === 'WRITING'
      ? props.handleUpdateRetro({
          ...props.retrospective,
          id: props.retrospective.id,
          phase: 'VOTING',
        })
      : null

    // Disabled for now
    // props.retrospective.phase === 'GROUPING'
    //   ? props.handleUpdateRetro({
    //       ...props.retrospective,
    //       id: props.retrospective.id,
    //       phase: 'VOTING',
    //     })
    //   : null

    props.retrospective.phase === 'VOTING'
      ? props.handleUpdateRetro({
          ...props.retrospective,
          id: props.retrospective.id,
          phase: 'DISCUSSING',
        })
      : null

    props.retrospective.phase === 'DISCUSSING'
      ? props.handleUpdateRetro({
          ...props.retrospective,
          id: props.retrospective.id,
          phase: 'DISCUSSING',
        })
      : null
  }

  return (
    <>
      <div className='flex'>
        <Toast.Provider swipeDirection='right'>
          <button type='submit' aria-label='Start Retro' onClick={handleCopy}>
            <div className='flex flex-row items-center gap-2 p-5 text-lg transition ease-in-out border-2 border-black rounded-md w-fit dark:border-neutral-200 hover:scale-105 hover:cursor-pointer'>
              Copy Retro link
              <IconCopy />
            </div>
          </button>

          <Toast.Root open={open} onOpenChange={setOpen}>
            <Toast.Title className='flex items-center gap-2 text-md'>
              <span>Copied retrospective link to clipboard!</span>
              <IconCopy />
            </Toast.Title>
          </Toast.Root>

          {open ? (
            <Toast.Viewport className='fixed bottom-0 right-0 gap-2 p-5 m-5 text-black bg-white border-2 border-black rounded-md dark:text-white dark:bg-black w-fit dark:border-neutral-200' />
          ) : null}
        </Toast.Provider>

        <button type='submit' aria-label='Start Retro' className='mx-2' onClick={handleNextPhase}>
          <div className='flex flex-row items-center gap-2 p-5 text-lg transition ease-in-out border-2 border-black rounded-md w-fit dark:border-neutral-200 hover:scale-105 hover:cursor-pointer'>
            Next Phase
            <IconArrowRight />
          </div>
        </button>
      </div>
    </>
  )
}

export default ActionButtons
