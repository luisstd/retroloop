import { RetroItem, Retrospective } from '@prisma/client'
import { IconThumbUp } from '@tabler/icons'
import { useEffect, useState } from 'react'

import { trpc } from '@/utils/trpc'

type ItemVoterProps = {
  title: string
  retrospective: Retrospective
  itemType: string
}

function ItemVoter({ title, retrospective, itemType }: ItemVoterProps) {
  const retroItems = trpc.retroItem.getAllByRetroId.useQuery(retrospective.id)

  const [sortedItems, setSortedItems] = useState(retroItems.data)

  useEffect(() => {
    sortItems()
  }, [retroItems.data])

  function sortItems(): void {
    retroItems.data
      ? setSortedItems(
          [...retroItems.data].sort((a, b) => {
            if (b.votes === null) {
              return 1
            }
            if (a.votes === null) {
              return -1
            }
            return b.votes - a.votes
          })
        )
      : null
  }

  const mutationEdit = trpc.retroItem.edit.useMutation({
    onSuccess: () => {
      retroItems.refetch()
    },
  })

  function handleEditRetroItem(input: RetroItem): void {
    mutationEdit.mutate(input)
  }

  return (
    <div className='w-full h-full'>
      <div className='flex flex-row items-center pb-3 border-b-2 border-black dark:border-neutral-200'>
        <h2 className='p-1 m-2 mr-auto text-xl font-bold'>{title}</h2>
      </div>
      <ul>
        {sortedItems &&
          sortedItems.map((item, index) =>
            item.type === itemType ? (
              <li
                className='flex justify-between p-2 my-3 border-2 border-black rounded-md dark:border-neutral-200'
                key={index}
              >
                <p className='p-1'>{item.content}</p>

                <div className='flex items-center gap-2 text-lg font-bold'>
                  {item.votes ? <span>+{item.votes}</span> : null}

                  <div className='mx-1 transition ease-in-out border-2 border-black rounded-md w-fit dark:border-neutral-200 hover:scale-105 hover:cursor-pointer'>
                    <IconThumbUp
                      size={26}
                      className='p-1 rounded-md justify-self-center'
                      onClick={() => {
                        if (item && item.votes !== null) {
                          handleEditRetroItem({ ...item, votes: item.votes + 1 })
                        }
                      }}
                    />
                  </div>
                </div>
              </li>
            ) : null
          )}
      </ul>
    </div>
  )
}

export default ItemVoter
