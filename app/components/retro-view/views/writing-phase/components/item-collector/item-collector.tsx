'use client'

import { RetroItem, Retrospective } from '@prisma/client'
import { useSession } from 'next-auth/react'

import { DeleteDialog } from '@/components/dialog/delete-dialog/delete-dialog'
import { EditDialog } from '@/components/dialog/edit-dialog/edit-dialog'
import { RetroItemDialog } from '@/components/retro-view/views/writing-phase/components/item-collector/components/retro-item-dialog'
import { RetroItemCreateInput } from '@/types/retro-item'
import { Card } from '@/ui/card/card'
import { toast } from '@/ui/toast/use-toast'
import { trpc } from '@/utils/trpc'

type ItemCollectorProps = {
  title: string
  retrospective: Retrospective
  itemType: string
}

export function ItemCollector({ title, retrospective, itemType }: ItemCollectorProps) {
  const retroItems = trpc.retroItem.getAllByRetroId.useQuery(retrospective.id)
  const { data: session } = useSession()

  const userId = session?.user?.id

  const mutationAdd = trpc.retroItem.add.useMutation({
    onSuccess: () => {
      retroItems.refetch()
    },
  })

  const mutationEdit = trpc.retroItem.edit.useMutation({
    onSuccess: () => {
      retroItems.refetch()
    },
  })

  const mutationDelete = trpc.retroItem.delete.useMutation({
    onSuccess: () => {
      retroItems.refetch()
    },
  })

  function handleAddRetroItem(input: RetroItemCreateInput): void {
    mutationAdd.mutate(input)
  }

  function handleEditRetroItem(input: RetroItem): void {
    mutationEdit.mutate(input)
  }

  function handleDeleteRetroItem(input: RetroItem['id']): void {
    mutationDelete.mutate(input)
    toast({
      title: 'Feedback deleted',
      description: 'Your feedback was successfully deleted.',
    })
  }

  return (
    <>
      <div className='flex flex-row items-center pb-3'>
        <h2 className='m-2 mr-auto p-2 text-xl font-bold'>{title}</h2>
        {userId ? (
          <RetroItemDialog
            retrospective={retrospective}
            itemType={itemType}
            userId={userId}
            handleAddRetroItem={handleAddRetroItem}
          />
        ) : null}
      </div>

      <ul>
        {retroItems.data &&
          retroItems.data
            .filter((item) => item.type === itemType && item.userId === userId)
            .map((item: RetroItem, index: number) =>
              item.type === itemType ? (
                <li key={index}>
                  <Card className='m-2 flex max-w-full items-center justify-between break-words p-4'>
                    <p>{item.content}</p>

                    <div className='flex flex-row items-center'>
                      <EditDialog
                        itemToEdit={item}
                        editHandler={(input) => handleEditRetroItem(input as RetroItem)}
                      />
                      <DeleteDialog itemToDelete={item} deleteHandler={handleDeleteRetroItem} />
                    </div>
                  </Card>
                </li>
              ) : null
            )}
      </ul>
    </>
  )
}
