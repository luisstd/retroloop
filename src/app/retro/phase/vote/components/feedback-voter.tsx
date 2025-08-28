'use client'

import { Feedback, Retrospective } from '@prisma/client'
import { IconThumbUp } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'

import { Loader } from '@/app/components/loader/loader'
import { Badge } from '@/app/ui/badge/badge'
import { Button } from '@/app/ui/button/button'
import { Card } from '@/app/ui/card/card'
import { Skeleton } from '@/app/ui/skeleton/skeleton'
import { useToast } from '@/app/ui/toast/use-toast'
import { api } from '@/trpc/react'
import { UserSession } from '@/types/user'

type FeedbackVoterProps = {
  title: string
  retrospective: Retrospective
  itemType: string
}

export function FeedbackVoter({
  title,
  retrospective,
  itemType,
}: FeedbackVoterProps) {
  const { toast } = useToast()
  const { data: session } = useSession()
  const {
    data: feedback,
    isLoading,
    refetch,
  } = api.feedback.getAllByRetroId.useQuery(retrospective.id, {
    refetchInterval: 500,
    refetchIntervalInBackground: true,
    cacheTime: 0,
  })

  const { mutate: updateFeedback } = api.feedback.edit.useMutation({
    onSuccess: () => {
      refetch()
    },
  })

  const userId = session?.user?.id

  const handleEditFeedback = (input: Feedback): void => {
    updateFeedback(input)
    toast({
      title: 'Vote added',
      description: 'Your vote has been added',
    })
  }

  const hasVoted = (item: Feedback, user_id: UserSession['id']): boolean => {
    return item.voters.includes(user_id)
  }

  if (!userId) {
    return <Loader isLoading fullHeight />
  }

  return (
    <>
      <div className='flex flex-row items-center pb-3'>
        <h2 className='m-2 mr-auto p-2 text-xl font-bold'>{title}</h2>
      </div>

      {isLoading && (
        <>
          <Skeleton className='m-2 mx-auto flex h-16 w-400 max-w-full min-w-full items-center justify-between p-4' />
          <Skeleton className='m-2 mx-auto flex h-16 w-400 max-w-full min-w-full items-center justify-between p-4' />
          <Skeleton className='m-2 mx-auto flex h-16 w-400 max-w-full min-w-full items-center justify-between p-4' />
        </>
      )}

      <ul>
        {feedback &&
          feedback.map(
            (item: Feedback) =>
              item.type === itemType && (
                <li key={item.id}>
                  <Card className='m-2 mx-auto flex w-400 max-w-full min-w-full items-center justify-between p-4 break-words'>
                    <p>{item.content}</p>

                    <div className='flex flex-row items-center'>
                      {item.votes ? (
                        <Badge className='my-2.25'>+{item.votes}</Badge>
                      ) : null}

                      {!hasVoted(item, userId) && (
                        <Button
                          size='icon'
                          variant='ghost'
                          onClick={() => {
                            handleEditFeedback({
                              ...item,
                              votes: item.votes + 1,
                              voters: [...item.voters, userId],
                            })
                          }}
                          aria-label='Upvote feedback item'
                        >
                          <IconThumbUp size={16} />
                        </Button>
                      )}
                    </div>
                  </Card>
                </li>
              ),
          )}
      </ul>
    </>
  )
}
