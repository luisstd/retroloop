import React from 'react'
import { trpc } from '@/utils/trpc'
import { IconPlus } from '@tabler/icons'

type ItemCollectorProps = {
  title: string
  retroId: string
  itemType: string
}

function ItemCollector({ title, retroId, itemType }: ItemCollectorProps) {
  const retroItems = trpc.retroItem.getAllByRetroId.useQuery(retroId)
  console.log(retroItems.data)

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
                className='p-2 my-3 border-2 border-black rounded-md dark:border-neutral-200'
                key={index}
              >
                {item.content}
              </li>
            ) : null
          )}
      </ul>
    </div>
  )
}

export default ItemCollector
