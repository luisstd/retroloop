import { RetroItem } from '@prisma/client'
import { render, screen } from '@testing-library/react'
import { ItemSwitcher } from 'components/retro-view/views/discussing-phase/components/item-switcher/item-switcher'
import { beforeEach, describe, expect, test, vi } from 'vitest'

test('ItemSwitcher', () => {
  describe('ItemSwitcher', () => {
    let handleNextItem: () => void
    let handlePreviousItem: () => void
    let retroItems: RetroItem[]
    let currentIndex: number

    beforeEach(() => {
      handleNextItem = vi.fn()
      handlePreviousItem = vi.fn()
      retroItems = [
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
      ]
      currentIndex = 1
      render(
        <ItemSwitcher
          handleNextItem={handleNextItem}
          handlePreviousItem={handlePreviousItem}
          retroItems={retroItems}
          currentIndex={currentIndex}
        />
      )
    })

    test('renders previous button when current index is greater than 0', () => {
      const previousButton = screen.getByRole('button', { name: /previous/i })
      expect(previousButton).toBeDefined()

      expect(handlePreviousItem).not.toHaveBeenCalled()
      previousButton.click()
      expect(handlePreviousItem).toHaveBeenCalled()
    })

    test('does not render previous button when current index is 0', () => {
      currentIndex = 0
      render(
        <ItemSwitcher
          handleNextItem={handleNextItem}
          handlePreviousItem={handlePreviousItem}
          retroItems={retroItems}
          currentIndex={currentIndex}
        />
      )

      const previousButton = screen.queryByRole('button', { name: /previous/i })
      expect(previousButton).not.toBeDefined()
    })

    test('renders next button when current index is less than the last index', () => {
      const nextButton = screen.getByRole('button', { name: /next/i })
      expect(nextButton).toBeDefined()

      expect(handleNextItem).not.toHaveBeenCalled()
      nextButton.click()
      expect(handleNextItem).toHaveBeenCalled()
    })

    test('does not render next button when current index is the last index', () => {
      currentIndex = retroItems.length - 1
      render(
        <ItemSwitcher
          handleNextItem={handleNextItem}
          handlePreviousItem={handlePreviousItem}
          retroItems={retroItems}
          currentIndex={currentIndex}
        />
      )

      const nextButton = screen.queryByRole('button', { name: /next/i })
      expect(nextButton).not.toBeDefined()
    })

    test('renders finish retro button', () => {
      const finishButton = screen.getByRole('link', { name: /finish retro/i })
      expect(finishButton).toBeDefined()
      expect(finishButton).toHaveProperty('href', '/dashboard')
    })
  })
})
