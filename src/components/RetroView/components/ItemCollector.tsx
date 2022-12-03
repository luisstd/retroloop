import { RetroItem } from '@prisma/client'
import { IconPlus } from '@tabler/icons'
import React from 'react'

import CommonDeleteDialog from '@/components/common/CommonDeleteDialog'
import CommonEditDialog from '@/components/common/CommonEditDialog'
import { trpc } from '@/utils/trpc'

type ItemCollectorProps = {
  title: string
  retroId: string
  itemType: string
}

function ItemCollector({ title, retroId, itemType }: ItemCollectorProps) {
  const retroItems = trpc.retroItem.getAllByRetroId.useQuery(retroId)

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

  function handleEditRetroItem(input: RetroItem): void {
    mutationEdit.mutate(input)
  }

  function handleDeleteRetroItem(input: RetroItem['id']): void {
    mutationDelete.mutate(input)
  }

  return (
    <div className='w-full h-full'>
      <div className='flex flex-row items-center justify-between pb-3 border-b-2 border-black dark:border-neutral-200'>
        <h2 className='p-1 m-2 text-xl italic font-bold'>{title}</h2>
        <div className='transition ease-in-out border-2 border-black rounded-md w-fit dark:border-neutral-200 hover:scale-105 hover:cursor-pointer'>
          <IconPlus size={40} className='p-1 rounded-md justify-self-center' />
        </div>
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
