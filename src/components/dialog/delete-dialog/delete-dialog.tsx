import { Transition } from '@headlessui/react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { IconTrash } from '@tabler/icons-react'
import { useState } from 'react'

type ItemToDelete = { id: string; [key: string]: unknown }

type DeleteDialogProps = {
  itemToDelete: ItemToDelete
  deleteHandler: (input: ItemToDelete['id']) => void
}

export function DeleteDialog(props: DeleteDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AlertDialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialog.Trigger asChild>
        <button className='mx-1 btn'>
          <IconTrash size={26} className='p-1 rounded-md justify-self-center' />
        </button>
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

      <AlertDialog.Overlay className='fixed inset-0 z-20 bg-base-dark/50' />

      <AlertDialog.Content className='fixed z-50 w-screen max-w-md p-5 border-2 rounded-lg border-base-dark bg-base-light dark:border-base-light top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:w-full dark:bg-base-dark dark:text-base-light'>
        <AlertDialog.Title className='py-5 text-3xl italic font-bold'>
          Are you absolutely sure?
        </AlertDialog.Title>
        <AlertDialog.Description className=''>
          This action cannot be undone. This will permanently delete this item.
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <button className='px-2 py-1 m-2 mt-10 italic font-bold btn'>Cancel</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button
              onClick={() => props.deleteHandler(props.itemToDelete.id)}
              className='px-2 py-1 m-2 mt-10 italic font-bold bg-red-500 hover:border-red-400 hover:bg-red-400 dark:hover:bg-red-400 dark:hover:border-red-400 btn'
            >
              Yes, delete item
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}
