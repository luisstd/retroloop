import { Retrospective } from '@prisma/client'
import * as Toast from '@radix-ui/react-toast'
import { IconArrowRight, IconCopy } from '@tabler/icons'
import { useState } from 'react'

import { trpc } from '@/utils/trpc'

type ActionButtonsProps = {
  retrospective: any
}

function ActionButtons(props: ActionButtonsProps) {
  const [open, setOpen] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href)
    setOpen(true)
  }

  const mutation = trpc.retrospective.edit.useMutation({
    onSuccess: async () => {
      props.retrospective.refetch()
    },
  })

  const handleUpdateRetro = (input: Retrospective) => {
    mutation.mutate(input)
  }

  function handleNextPhase() {
    props.retrospective.data.phase === 'WRITING'
      ? handleUpdateRetro({
          ...props.retrospective.data,
          id: props.retrospective.data.id,
          phase: 'VOTING',
        })
      : null

    props.retrospective.data.phase === 'VOTING'
      ? handleUpdateRetro({
          ...props.retrospective.data,
          id: props.retrospective.data.id,
          phase: 'DISCUSSING',
        })
      : null

    props.retrospective.data.phase === 'DISCUSSING'
      ? handleUpdateRetro({
          ...props.retrospective.data,
          id: props.retrospective.data.id,
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
