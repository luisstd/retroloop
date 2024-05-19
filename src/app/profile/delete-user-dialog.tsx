'use client'

import { User } from '@prisma/client'
import { useState } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/app/ui/alert-dialog/alert-dialog'
import { Button } from '@/app/ui/button/button'

type DeleteDialogProps = {
  itemToDelete: User
  deleteHandler: (input: User) => void
}

export function DeleteUserDialog({
  itemToDelete,
  deleteHandler,
}: DeleteDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant='destructive'>Delete Account</Button>
      </AlertDialogTrigger>

      <AlertDialogContent className='border-base-dark bg-base-light dark:border-base-light dark:bg-base-dark dark:text-base-light fixed left-2/4 top-2/4 z-50 w-screen max-w-md -translate-x-2/4 -translate-y-2/4 rounded-lg border-2 p-5 md:w-full'>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => deleteHandler(itemToDelete)}>
            Delete account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
