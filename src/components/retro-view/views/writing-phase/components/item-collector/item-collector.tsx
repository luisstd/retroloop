import { RetroItem, Retrospective } from '@prisma/client'
import { useSession } from 'next-auth/react'

import { DeleteDialog } from '@/components/dialog/delete-dialog/delete-dialog'
import { EditDialog } from '@/components/dialog/edit-dialog/edit-dialog'
import { RetroItemDialog } from '@/components/retro-view/views/writing-phase/components/item-collector/components/retro-item-dialog'
import { RetroItemCreateInput } from '@/types/retro-item'
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
  }

  return (
    <div className='w-full h-full'>
      <div className='flex flex-row items-center pb-3 border-b-2 border-base-dark dark:border-base-light'>
        <h2 className='p-1 m-2 mr-auto text-xl font-bold'>{title}</h2>
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
                <li
                  className='flex justify-between p-2 my-3 border-2 rounded-md border-base-dark dark:border-base-light'
                  key={index}
                >
                  <p className='p-1'>{item.content}</p>

                  <div className='flex flex-row items-center'>
                    <EditDialog
                      itemToEdit={item}
                      editHandler={(input) => handleEditRetroItem(input as RetroItem)}
                    />
                    <DeleteDialog itemToDelete={item} deleteHandler={handleDeleteRetroItem} />
                  </div>
                </li>
              ) : null
            )}
      </ul>
    </div>
  )
}
