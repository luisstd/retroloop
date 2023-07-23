'use client'

import { Transition } from '@headlessui/react'
import { User } from '@prisma/client'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { useState } from 'react'

type DeleteDialogProps = {
  itemToDelete: User
  deleteHandler: (input: User) => void
}

export function DeleteUserDialog({ itemToDelete, deleteHandler }: DeleteDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AlertDialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialog.Trigger asChild>
        <button className='btn m-2 mt-2 bg-red-500 px-2 py-1 font-bold italic hover:border-red-400 hover:bg-red-400 dark:hover:border-red-400 dark:hover:bg-red-400'>
          Delete Account
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

      <AlertDialog.Content className='fixed left-2/4 top-2/4 z-50 w-screen max-w-md -translate-x-2/4 -translate-y-2/4 rounded-lg border-2 border-base-dark bg-base-light p-5 dark:border-base-light dark:bg-base-dark dark:text-base-light md:w-full'>
        <AlertDialog.Title className='py-5 text-3xl font-bold italic'>
          Are you absolutely sure?
        </AlertDialog.Title>
        <AlertDialog.Description className=''>
          This action cannot be undone. This will permanently delete your user account.
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <button className='btn m-2 mt-10 px-2 py-1 font-bold italic'>Cancel</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button
              onClick={() => deleteHandler(itemToDelete)}
              className='btn m-2 mt-10 bg-red-500 px-2 py-1 font-bold italic hover:border-red-400 hover:bg-red-400 dark:hover:border-red-400 dark:hover:bg-red-400'
            >
              Yes, delete account
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}
