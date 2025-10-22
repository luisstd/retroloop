import { Feedback, Retrospective } from '@prisma/client'
import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { FeedbackVoter } from '@/app/retro/phase/vote/components/feedback-voter'
import { api } from '@/trpc/react'

vi.mock('@/lib/auth-client', () => ({
  useSession: vi.fn(),
}))

vi.mock('@/trpc/react', () => ({
  api: {
    feedback: {
      getAllByRetroId: {
        useQuery: vi.fn(),
      },
      edit: {
        useMutation: vi.fn(),
      },
    },
  },
}))

test('Feedback Voter', () => {
  describe('FeedbackVoter', () => {
    let title: string
    let retrospective: Retrospective
    let itemType: string
    let feedbackQuery: {
      data: Feedback[]
      refetch: () => void
    }
    let session: {
      user: {
        id: string
      }
    }

    beforeEach(() => {
      title = 'Test Title'
      retrospective = {
        id: '1',
        phase: 'WRITING',
        name: 'Test Retro',
        createdAt: new Date(),
        date: new Date(),
        timerExpiration: new Date(),
      }
      itemType = 'testType'
      feedbackQuery = {
        data: [
          {
            id: '1',
            createdAt: new Date(),
            content: 'Item 1',
            type: '',
            retrospectiveId: '',
            votes: 5,
            voters: [],
            userId: '',
          },
          {
            id: '2',
            createdAt: new Date(),
            content: 'Item 2',
            type: '',
            retrospectiveId: '',
            votes: 3,
            voters: [],
            userId: '',
          },
          {
            id: '3',
            createdAt: new Date(),
            content: 'Item 3',
            type: '',
            retrospectiveId: '',
            votes: 0,
            voters: [],
            userId: '',
          },
          {
            id: '4',
            createdAt: new Date(),
            content: 'Item 4',
            type: '',
            retrospectiveId: '',
            votes: 7,
            voters: [],
            userId: '',
          },
        ],
        refetch: vi.fn(),
      }
      session = { user: { id: '1' } }
      render(
        <FeedbackVoter
          title={title}
          retrospective={retrospective}
          itemType={itemType}
        />,
      )
    })

    afterEach(() => {
      vi.clearAllMocks()
    })

    test('renders title', () => {
      const titleElement = screen.getByRole('heading', { name: /test title/i })
      expect(titleElement).toBeDefined()
    })

    test('renders retro items', () => {
      const itemElements = screen.getAllByRole('listitem')
      expect(itemElements.length).toBe(2)
    })

    test('increments votes when thumbs up button is clicked', () => {
      const thumbsUpButton = screen.getAllByRole('button', {
        name: /thumbs up/i,
      })[0]
      const feedback = feedbackQuery.data[0]

      expect(feedback.votes).toBe(5)

      fireEvent.click(thumbsUpButton)

      expect(feedbackQuery.refetch).toHaveBeenCalled()
      expect(api.feedback.edit.useMutation).toHaveBeenCalledWith(
        expect.objectContaining({
          votes: feedback.votes + 1,
          voters: [session.user.id],
        }),
      )
    })

    test('does not render retro items if session user is not defined', () => {
      render(
        <FeedbackVoter
          title={title}
          retrospective={retrospective}
          itemType={itemType}
        />,
      )

      const itemElements = screen.queryAllByRole('listitem')
      expect(itemElements.length).toBe(0)
    })
  })
})
