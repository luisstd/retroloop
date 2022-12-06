import { Transition } from '@headlessui/react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { IconTrash } from '@tabler/icons'
import { useState } from 'react'

type ItemToDelete = Record<string | number | symbol, unknown>

type DeleteDialogProps = {
  itemToDelete: ItemToDelete
  deleteHandler: (input: any) => void
}

export default function CommonDeleteDialog(props: DeleteDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AlertDialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialog.Trigger asChild>
        <div className='transition ease-in-out border-2 border-black rounded-md w-fit dark:border-neutral-200 hover:scale-105 hover:cursor-pointer'>
          <IconTrash size={26} className='p-1 rounded-md justify-self-center' />
        </div>
      </AlertDialog.Trigger>
      <Transition.Root show={isOpen}>
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        ></Transition.Child>
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        ></Transition.Child>
      </Transition.Root>

      <AlertDialog.Overlay className='fixed inset-0 z-20 bg-black/5' />

      <AlertDialog.Content className='fixed z-50 w-screen max-w-md p-5 bg-white border-2 border-black rounded-lg dark:border-neutral-200 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:w-full focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:bg-black dark:text-neutral-200'>
        <AlertDialog.Title className='py-5 text-3xl italic font-bold'>
          Are you absolutely sure?
        </AlertDialog.Title>
        <AlertDialog.Description className=''>
          This action cannot be undone. This will permanently delete this item.
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <button className='p-1 m-2 mt-10 italic font-bold border-2 border-black rounded-md dark:border-neutral-200'>
              Cancel
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button
              onClick={() => props.deleteHandler(props.itemToDelete.id)}
              className='p-1 m-2 mt-10 italic font-bold bg-red-600 border-2 border-black rounded-md dark:border-neutral-200'
            >
              Yes, delete item
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}
