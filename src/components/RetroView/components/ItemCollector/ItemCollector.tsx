import { RetroItem, Retrospective } from '@prisma/client'
import { useSession } from 'next-auth/react'

import CommonDeleteDialog from '@/components/common/CommonDeleteDialog'
import CommonEditDialog from '@/components/common/CommonEditDialog'
import RetroItemDialog from '@/components/RetroView/components/ItemCollector/components/RetroItemDialog'
import { trpc } from '@/utils/trpc'

type ItemCollectorProps = {
  title: string
  retrospective: Retrospective
  itemType: string
}

function ItemCollector({ title, retrospective, itemType }: ItemCollectorProps) {
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

  function handleAddRetroItem(input: RetroItem): void {
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
      <div className='flex flex-row items-center pb-3 border-b-2 border-black dark:border-neutral-200'>
        <h2 className='p-1 m-2 mr-auto text-xl italic font-bold'>{title}</h2>
        {userId ? (
          <RetroItemDialog
            retrospective={retrospective}
            itemType={itemType}
            userId={userId}
            addHandler={handleAddRetroItem}
          />
        ) : null}
      </div>
      <ul>
        {retroItems.data &&
          retroItems.data.map((item, index) =>
            item.type === itemType ? (
              <li
                className='flex justify-between p-2 my-3 border-2 border-black rounded-md dark:border-neutral-200'
                key={index}
              >
                <p className='p-1'>{item.content}</p>

                <div className='flex items-start'>
                  <CommonEditDialog itemToEdit={item} editHandler={handleEditRetroItem} />
                  <CommonDeleteDialog itemToDelete={item} deleteHandler={handleDeleteRetroItem} />
                </div>
              </li>
            ) : null
          )}
      </ul>
    </div>
  )
}

export default ItemCollector
