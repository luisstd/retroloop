'use client'

import { FeedbackFish } from '@feedback-fish/react'

type FeedbackButtonProps = {
  userEmail: string
}

export function Feedback({ userEmail }: FeedbackButtonProps) {
  const PROJECT_ID = 'df9d9d25bb42d1'

  return (
    <FeedbackFish projectId={PROJECT_ID} userId={userEmail}>
      <button
        className='fixed bottom-5 right-10 z-40 cursor-pointer rounded border-none bg-base-dark px-4 py-2 font-bold text-base-light dark:bg-base-light dark:text-base-dark'
        aria-label='Send feedback'
      >
        Send feedback
      </button>
    </FeedbackFish>
  )
}
