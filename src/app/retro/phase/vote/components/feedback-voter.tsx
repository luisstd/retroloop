'use client'

import { Feedback, Retrospective } from '@prisma/client'
import { IconThumbUp } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'

import { Loader } from '@/app/components/loader/loader'
import { Badge } from '@/app/ui/badge'
import { Button } from '@/app/ui/button'
import { Card } from '@/app/ui/card'
import { Skeleton } from '@/app/ui/skeleton'
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
    toast('Vote added', {
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
      <div className='mb-6 flex flex-row items-center'>
        <h2 className='mr-auto text-2xl font-bold'>{title}</h2>
      </div>

      {isLoading && (
        <div className='space-y-2'>
          <Skeleton className='flex h-16 w-full items-center justify-between p-5' />
          <Skeleton className='flex h-16 w-full items-center justify-between p-5' />
          <Skeleton className='flex h-16 w-full items-center justify-between p-5' />
        </div>
      )}

      <ul className='space-y-2'>
        {feedback &&
          feedback.map(
            (item: Feedback) =>
              item.type === itemType && (
                <li key={item.id}>
                  <Card className='flex w-full items-center justify-between p-5 break-words'>
                    <p className='text-card-foreground text-base'>
                      {item.content}
                    </p>

                    <div className='flex flex-row items-center gap-2'>
                      {item.votes ? (
                        <Badge className='text-base font-semibold'>
                          +{item.votes}
                        </Badge>
                      ) : null}

                      {!hasVoted(item, userId) && (
                        <Button
                          size='icon'
                          variant='outline'
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
