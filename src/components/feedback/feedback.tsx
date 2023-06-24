import { FeedbackFish } from '@feedback-fish/react'

type FeedbackButtonProps = {
  userEmail: string
}

export function Feedback({ userEmail }: FeedbackButtonProps) {
  const PROJECT_ID = process.env.FEEDBACK_FISH_PROJECT_ID || ''

  return (
    <FeedbackFish projectId={PROJECT_ID} userId={userEmail}>
      <button
        className='fixed z-50 px-4 py-2 font-bold border-none rounded cursor-pointer text-base-light bg-base-dark dark:text-base-dark dark:bg-base-light right-10 bottom-5'
        aria-label='Share feedback'
      >
        Send feedback
      </button>
    </FeedbackFish>
  )
}
