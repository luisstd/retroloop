'use client'

import { Feedback, Retrospective } from '@prisma/client'
import { useSession } from 'next-auth/react'

import { DeleteDialog } from '@/app/components/dialog/delete-dialog/delete-dialog'
import { EditDialog } from '@/app/components/dialog/edit-dialog/edit-dialog'
import { FeedbackDialog } from '@/app/retro/phase/write/components/feedback-collector/components/feedback-dialog'
import { Card } from '@/app/ui/card/card'
import { Skeleton } from '@/app/ui/skeleton/skeleton'
import { useToast } from '@/app/ui/toast/use-toast'
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
  const { data: session } = useSession()
  const { toast } = useToast()
  const userId = session?.user?.id

  const {
    data: feedback,
    isLoading,
    refetch,
  } = api.feedback.getAllByRetroIdFiltered.useQuery(retrospective.id)

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
    toast({
      title: 'Feedback added',
      description: 'Your feedback was successfully added.',
    })
  }

  function handleEditFeedback(input: Feedback): void {
    updateFeedback(input)
    toast({
      title: 'Feedback updated',
      description: 'Your feedback was successfully updated.',
    })
  }

  function handleDeleteFeedback(input: Feedback['id']): void {
    deleteFeedback(input)
    toast({
      title: 'Feedback deleted',
      description: 'Your feedback was successfully deleted.',
    })
  }

  return (
    <>
      <div className='flex flex-row items-center pb-3'>
        <h2 className='m-2 mr-auto p-2 text-xl font-bold'>{title}</h2>
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
        <>
          <Skeleton className='m-2 mx-auto flex h-16 w-[100rem] min-w-full max-w-full items-center justify-between p-4' />
          <Skeleton className='m-2 mx-auto flex h-16 w-[100rem] min-w-full max-w-full items-center justify-between p-4' />
          <Skeleton className='m-2 mx-auto flex h-16 w-[100rem] min-w-full max-w-full items-center justify-between p-4' />
        </>
      )}

      <ul>
        {feedback &&
          feedback.map(
            (item: Feedback) =>
              item.type === itemType && (
                <li key={item.id}>
                  <Card className='m-2 mx-auto flex w-[100rem] min-w-full max-w-full items-center justify-between break-words p-4'>
                    <p>{item.content}</p>

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
