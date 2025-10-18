'use client'

import { FeedbackFish } from '@feedback-fish/react'

import { Button } from '@/app/ui/button'

type FeedbackButtonProps = {
  userEmail: string
}

export function Feedback({ userEmail }: FeedbackButtonProps) {
  const PROJECT_ID = 'df9d9d25bb42d1'

  return (
    <FeedbackFish projectId={PROJECT_ID} userId={userEmail}>
      <Button
        variant='outline'
        size='sm'
        className='bg-background fixed right-5 bottom-5 z-50 hidden md:flex'
        aria-label='Send feedback'
      >
        Feedback
      </Button>
    </FeedbackFish>
  )
}
