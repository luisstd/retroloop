'use client'

import { RetroItem, Retrospective } from '@prisma/client'
import { IconThumbUp } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'

import { UserSession } from '@/types/user'
import { Badge } from '@/ui/badge/badge'
import { Button } from '@/ui/button/button'
import { Card } from '@/ui/card/card'
import { trpc } from '@/utils/trpc'

type ItemVoterProps = {
  title: string
  retrospective: Retrospective
  itemType: string
}

export function ItemVoter({ title, retrospective, itemType }: ItemVoterProps) {
  const { data: session } = useSession()

  const retroItems = trpc.retroItem.getAllByRetroId.useQuery(retrospective.id)

  const user_id = session?.user?.id

  function hasVoted(item: RetroItem, user_id: UserSession['id']): boolean {
    return item.voters.includes(user_id)
  }

  const mutationEdit = trpc.retroItem.edit.useMutation({
    onSuccess: () => {
      retroItems.refetch()
    },
  })

  function handleEditRetroItem(input: RetroItem): void {
    mutationEdit.mutate(input)
  }

  return user_id ? (
    <>
      <div className='flex flex-row items-center pb-3'>
        <h2 className='m-2 mr-auto p-2 text-xl font-bold'>{title}</h2>
      </div>

      <ul>
        {retroItems.data &&
          retroItems.data.map((item, index) =>
            item.type === itemType ? (
              <li key={index}>
                <Card className='m-2 flex justify-between p-4'>
                  <p>{item.content}</p>

                  <div className='flex flex-row items-center'>
                    {item.votes ? <Badge>+{item.votes}</Badge> : null}

                    {!hasVoted(item, user_id) ? (
                      <Button size='icon' variant='ghost'>
                        <IconThumbUp
                          size={18}
                          onClick={() => {
                            handleEditRetroItem({
                              ...item,
                              votes: item.votes + 1,
                              voters: [...item.voters, user_id],
                            })
                          }}
                        />
                      </Button>
                    ) : null}
                  </div>
                </Card>
              </li>
            ) : null
          )}
      </ul>
    </>
  ) : null
}
