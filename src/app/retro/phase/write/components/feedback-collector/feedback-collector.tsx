'use client'

import { Feedback, Retrospective } from '@prisma/client'
import { toast } from 'sonner'

import { DeleteDialog } from '@/app/components/dialog/delete-dialog/delete-dialog'
import { EditDialog } from '@/app/components/dialog/edit-dialog/edit-dialog'
import { FeedbackDialog } from '@/app/retro/phase/write/components/feedback-collector/components/feedback-dialog'
import { Card } from '@/app/ui/card'
import { Skeleton } from '@/app/ui/skeleton'
import { useSession } from '@/lib/auth-client'
import { api } from '@/trpc/react'
import { FeedbackCreateInput } from '@/types/feedback'

type FeedbackCollectorProps = {
  title: string
  retrospective: Retrospective
  itemType: string
}

export function FeedbackCollector({
  title,
  retrospective,
  itemType,
}: FeedbackCollectorProps) {
  const { data: session, isPending } = useSession()
  const isAuthenticated = !!session?.user
  const userId = session?.user?.id

  const {
    data: feedback,
    isLoading,
    refetch,
  } = api.feedback.getAllByRetroIdFiltered.useQuery(retrospective.id, {
    enabled: isAuthenticated && !isPending,
  })

  const { mutate: addFeedback } = api.feedback.add.useMutation({
    onSuccess: () => {
      refetch()
    },
  })
  const { mutate: updateFeedback } = api.feedback.edit.useMutation({
    onSuccess: () => {
      refetch()
    },
  })

  const { mutate: deleteFeedback } = api.feedback.delete.useMutation({
    onSuccess: () => {
      refetch()
    },
  })

  function handleAddFeedback(input: FeedbackCreateInput): void {
    addFeedback(input)
    toast('Feedback added', {
      description: 'Your feedback was successfully added.',
    })
  }

  function handleEditFeedback(input: Feedback): void {
    updateFeedback(input)
    toast('Feedback updated', {
      description: 'Your feedback was successfully updated.',
    })
  }

  function handleDeleteFeedback(input: Feedback['id']): void {
    deleteFeedback(input)
    toast('Feedback deleted', {
      description: 'Your feedback was successfully deleted.',
    })
  }

  return (
    <>
      <div className='mb-6 flex flex-row items-center'>
        <h2 className='mr-auto text-2xl font-bold'>{title}</h2>
        {userId && (
          <FeedbackDialog
            retrospective={retrospective}
            itemType={itemType}
            userId={userId}
            handleAddFeedback={handleAddFeedback}
          />
        )}
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

                    <div className='flex flex-row items-center'>
                      <EditDialog
                        itemToEdit={item}
                        editHandler={(input) =>
                          handleEditFeedback(input as Feedback)
                        }
                      />
                      <DeleteDialog
                        itemToDelete={item}
                        deleteHandler={handleDeleteFeedback}
                      />
                    </div>
                  </Card>
                </li>
              ),
          )}
      </ul>
    </>
  )
}
