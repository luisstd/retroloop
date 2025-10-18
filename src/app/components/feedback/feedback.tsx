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
        className='fixed bottom-5 right-5 z-40 hidden md:flex'
        aria-label='Send feedback'
      >
        Feedback
      </Button>
    </FeedbackFish>
  )
}
