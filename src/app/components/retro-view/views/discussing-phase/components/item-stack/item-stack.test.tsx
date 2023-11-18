import { RetroItem } from '@prisma/client'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'

import { ItemStack } from '@/app/components/retro-view/views/discussing-phase/components/item-stack/item-stack'

test('ItemStack', () => {
  describe('ItemStack', () => {
    let retroItems: RetroItem[]
    let currentIndex: number

    beforeEach(() => {
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
      currentIndex = 0
      render(<ItemStack retroItems={retroItems} currentIndex={currentIndex} />)
    })

    test('renders items in the correct order', () => {
      const itemElements = screen.getAllByRole('listitem')

      expect(itemElements[0]).toContain('Item 4')
      expect(itemElements[1]).toContain('Item 1')
      expect(itemElements[2]).toContain('Item 2')
      expect(itemElements[3]).toContain('Item 3')
    })

    test('renders current item with correct votes', () => {
      const currentItemElement = screen.getByText('Item 4')
      expect(currentItemElement).toBeDefined()

      const votesElement = screen.getByText('+7')
      expect(votesElement).toBeDefined()
    })
  })
})
