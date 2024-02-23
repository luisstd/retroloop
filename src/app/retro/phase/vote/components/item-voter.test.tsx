import { RetroItem, Retrospective } from '@prisma/client'
import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { ItemVoter } from '@/app/retro/phase/vote/components/item-voter'
import { api } from '@/trpc/react'

vi.mock('next-auth/react', () => ({
  useSession: vi.fn(),
}))

vi.mock('@/trpc/react', () => ({
  api: {
    retroItem: {
      getAllByRetroId: {
        useQuery: vi.fn(),
      },
      edit: {
        useMutation: vi.fn(),
      },
    },
  },
}))

test('ItemVoter', () => {
  describe('ItemVoter', () => {
    let title: string
    let retrospective: Retrospective
    let itemType: string
    let retroItemsQuery: {
      data: RetroItem[]
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
      retroItemsQuery = {
        data: [
          {
            id: '1',
            createdAt: new Date(),
            content: 'Item 1',
            type: '',
            itemCollectionId: '',
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
            itemCollectionId: '',
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
            itemCollectionId: '',
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
            itemCollectionId: '',
            retrospectiveId: '',
            votes: 7,
            voters: [],
            userId: '',
          },
        ],
        refetch: vi.fn(),
      }
      session = { user: { id: '1' } }
      render(<ItemVoter title={title} retrospective={retrospective} itemType={itemType} />)
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
      const thumbsUpButton = screen.getAllByRole('button', { name: /thumbs up/i })[0]
      const retroItem = retroItemsQuery.data[0]

      expect(retroItem.votes).toBe(5)

      fireEvent.click(thumbsUpButton)

      expect(retroItemsQuery.refetch).toHaveBeenCalled()
      expect(api.retroItem.edit.useMutation).toHaveBeenCalledWith(
        expect.objectContaining({
          votes: retroItem.votes + 1,
          voters: [session.user.id],
        })
      )
    })

    test('does not render retro items if session user is not defined', () => {
      render(<ItemVoter title={title} retrospective={retrospective} itemType={itemType} />)

      const itemElements = screen.queryAllByRole('listitem')
      expect(itemElements.length).toBe(0)
    })
  })
})
