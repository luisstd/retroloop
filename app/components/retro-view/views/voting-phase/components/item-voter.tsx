'use client'

import { RetroItem, Retrospective } from '@prisma/client'
import { IconThumbUp } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

import { UserSession } from '@/types/user'
import { trpc } from '@/utils/trpc'

type ItemVoterProps = {
  title: string
  retrospective: Retrospective
  itemType: string
}

export function ItemVoter({ title, retrospective, itemType }: ItemVoterProps) {
  const { data: session } = useSession()

  const retroItems = trpc.retroItem.getAllByRetroId.useQuery(retrospective.id)

  const [sortedItems, setSortedItems] = useState(retroItems.data)

  const user_id = session?.user?.id

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

  function hasVoted(item: RetroItem, user_id: UserSession['id']): boolean {
    return item.voters.includes(user_id)
  }

  const mutationEdit = trpc.retroItem.edit.useMutation({
    onSuccess: () => {
      retroItems.refetch()
    },
  })

  function handleEditRetroItem(input: RetroItem): void {
    console.log(input)
    mutationEdit.mutate(input)
  }

  return user_id ? (
    <>
      <div className='h-full w-full'>
        <div className='flex flex-row items-center border-b-2 border-base-dark pb-3 dark:border-base-light'>
          <h2 className='m-2 mr-auto p-1 text-xl font-bold'>{title}</h2>
        </div>
        <ul>
          {sortedItems &&
            sortedItems.map((item, index) =>
              item.type === itemType ? (
                <li
                  className='my-3 flex justify-between rounded-md border-2 border-base-dark p-2 dark:border-base-light'
                  key={index}
                >
                  <p className='p-1'>{item.content}</p>

                  <div className='flex items-center gap-2 text-lg font-bold'>
                    {item.votes ? <span>+{item.votes}</span> : null}

                    {!hasVoted(item, user_id) ? (
                      <button className='btn mx-1'>
                        <IconThumbUp
                          size={26}
                          className='justify-self-center rounded-md p-1'
                          onClick={() => {
                            handleEditRetroItem({
                              ...item,
                              votes: item.votes + 1,
                              voters: [...item.voters, user_id],
                            })
                          }}
                        />
                      </button>
                    ) : null}
                  </div>
                </li>
              ) : null
            )}
        </ul>
      </div>
    </>
  ) : null
}
