import { IconPlus } from '@tabler/icons'
import React from 'react'

type ItemCollectorProps = {
  title: string
}

function ItemCollector({ title }: ItemCollectorProps) {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-row items-center justify-between pb-3 border-b-2 border-black dark:border-neutral-200'>
        <h2 className='p-1 m-2 text-xl italic font-bold'>{title}</h2>
        <div className='transition ease-in-out border-2 border-black rounded-md w-fit dark:border-neutral-200 hover:scale-105 hover:cursor-pointer'>
          <IconPlus size={40} className='p-1 rounded-md justify-self-center' />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ItemCollector
