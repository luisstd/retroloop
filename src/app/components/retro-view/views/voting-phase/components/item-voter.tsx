'use client'

import { RetroItem, Retrospective } from '@prisma/client'
import { IconThumbUp } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'
import { Badge } from 'src/app/ui/badge/badge'
import { Button } from 'src/app/ui/button/button'
import { Card } from 'src/app/ui/card/card'
import { useToast } from 'src/app/ui/toast/use-toast'

import { UserSession } from '@/types/user'
import { trpc } from '@/utils/trpc'

type ItemVoterProps = {
  title: string
  retrospective: Retrospective
  itemType: string
}

export function ItemVoter({ title, retrospective, itemType }: ItemVoterProps) {
  const { toast } = useToast()
  const { data: session } = useSession()
  const { data: retroItems, refetch } = trpc.retroItem.getAllByRetroId.useQuery(retrospective.id)
  const { mutate: updateRetroItem } = trpc.retroItem.edit.useMutation({
    onSuccess: () => {
      refetch()
    },
  })

  const userId = session?.user?.id

  const handleEditRetroItem = (input: RetroItem): void => {
    updateRetroItem(input)
    toast({
      title: 'Vote added',
      description: 'Your vote has been added',
    })
  }

  const hasVoted = (item: RetroItem, user_id: UserSession['id']): boolean => {
    return item.voters.includes(user_id)
  }

  return userId ? (
    <>
      <div className='flex flex-row items-center pb-3'>
        <h2 className='m-2 mr-auto p-2 text-xl font-bold'>{title}</h2>
      </div>

      <ul>
        {retroItems &&
          retroItems
            .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
            .map((item) =>
              item.type === itemType ? (
                <li key={item.id}>
                  <Card className='m-2 mx-auto flex w-[100rem] min-w-full max-w-full items-center justify-between break-words p-4'>
                    <p>{item.content}</p>

                    <div className='flex flex-row items-center'>
                      {item.votes ? <Badge className='my-[0.5625rem]'>+{item.votes}</Badge> : null}

                      {!hasVoted(item, userId) ? (
                        <Button size='icon' variant='ghost'>
                          <IconThumbUp
                            size={16}
                            onClick={() => {
                              handleEditRetroItem({
                                ...item,
                                votes: item.votes + 1,
                                voters: [...item.voters, userId],
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
