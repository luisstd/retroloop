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
        className='fixed z-40 px-4 py-2 font-bold border-none rounded cursor-pointer text-base-light bg-base-dark dark:text-base-dark dark:bg-base-light right-10 bottom-5'
        aria-label='Send feedback'
      >
        Send feedback
      </button>
    </FeedbackFish>
  )
}
