'use client'

import { IconTrash } from '@tabler/icons-react'
import { useState } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/ui/alert-dialog/alert-dialog'
import { Button } from '@/ui/button/button'

type ItemToDelete = { id: string; [key: string]: unknown }

type DeleteDialogProps = {
  itemToDelete: ItemToDelete
  deleteHandler: (input: ItemToDelete['id']) => void
}

export function DeleteDialog({ itemToDelete, deleteHandler }: DeleteDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button size='icon' variant='ghost' className='mx-1'>
          <IconTrash size={16} />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete this item.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => deleteHandler(itemToDelete.id)}>
            Yes, delete item
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
