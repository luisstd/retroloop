'use client'

import { RetroItem, Retrospective } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { DeleteDialog } from 'src/app/components/dialog/delete-dialog/delete-dialog'
import { EditDialog } from 'src/app/components/dialog/edit-dialog/edit-dialog'
import { RetroItemDialog } from 'src/app/components/retro-view/views/writing-phase/components/item-collector/components/retro-item-dialog'
import { RetroItemCreateInput } from 'src/app/types/retro-item'
import { Card } from 'src/app/ui/card/card'
import { useToast } from 'src/app/ui/toast/use-toast'
import { trpc } from 'src/app/utils/trpc'

type ItemCollectorProps = {
  title: string
  retrospective: Retrospective
  itemType: string
}

export function ItemCollector({ title, retrospective, itemType }: ItemCollectorProps) {
  const { data: session } = useSession()
  const { toast } = useToast()

  const userId = session?.user?.id

  const { data: retroItems, refetch } = trpc.retroItem.getAllByRetroId.useQuery(retrospective.id)

  const { mutate: addRetroItem } = trpc.retroItem.add.useMutation({
    onSuccess: () => {
      refetch()
    },
  })
  const { mutate: updateRetroItem } = trpc.retroItem.edit.useMutation({
    onSuccess: () => {
      refetch()
    },
  })

  const { mutate: deleteRetroItem } = trpc.retroItem.delete.useMutation({
    onSuccess: () => {
      refetch()
    },
  })

  function handleAddRetroItem(input: RetroItemCreateInput): void {
    addRetroItem(input)
    toast({
      title: 'Feedback added',
      description: 'Your feedback was successfully added.',
    })
  }

  function handleEditRetroItem(input: RetroItem): void {
    updateRetroItem(input)
    toast({
      title: 'Feedback updated',
      description: 'Your feedback was successfully updated.',
    })
  }

  function handleDeleteRetroItem(input: RetroItem['id']): void {
    deleteRetroItem(input)
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
        {retroItems &&
          retroItems
            .filter((item) => item.type === itemType && item.userId === userId)
            .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
            .map((item: RetroItem) =>
              item.type === itemType ? (
                <li key={item.id}>
                  <Card className='m-2 mx-auto flex w-[100rem] min-w-full max-w-full items-center justify-between break-words p-4'>
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
