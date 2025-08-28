'use client'

import { FeedbackFish } from '@feedback-fish/react'

import { Button } from '@/app/ui/button/button'

type FeedbackButtonProps = {
  userEmail: string
}

export function Feedback({ userEmail }: FeedbackButtonProps) {
  const PROJECT_ID = 'df9d9d25bb42d1'

  return (
    <FeedbackFish projectId={PROJECT_ID} userId={userEmail}>
      <Button
        variant='secondary'
        className='fixed right-28 bottom-5 z-40'
        aria-label='Send feedback'
      >
        Send feedback
      </Button>
    </FeedbackFish>
  )
}
