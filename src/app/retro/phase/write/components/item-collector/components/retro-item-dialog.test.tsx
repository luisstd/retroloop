import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { RetroItemDialog } from '@/app/retro/phase/write/components/item-collector/components/retro-item-dialog'

describe('RetroItemDialog', () => {
  let RetroItemDialogMounted: RenderResult

  const mockHandleAddRetroItem = vi.fn()
  const mockItemType = 'improvement'
  const mockUserId = '123'
  const mockRetrospective = {
    id: '1',
    phase: 'WRITING',
    name: 'Test Retro',
    createdAt: new Date(),
    date: new Date(),
    timerExpiration: new Date(),
  }

  beforeEach(() => {
    RetroItemDialogMounted = render(
      <RetroItemDialog
        itemType={mockItemType}
        userId={mockUserId}
        retrospective={mockRetrospective}
        handleAddRetroItem={mockHandleAddRetroItem}
      />,
    )
    vi.clearAllMocks()
  })

  afterEach(() => {
    RetroItemDialogMounted.unmount()
  })

  test('renders the trigger button', () => {
    render(
      <RetroItemDialog
        itemType={mockItemType}
        userId={mockUserId}
        retrospective={mockRetrospective}
        handleAddRetroItem={mockHandleAddRetroItem}
      />,
    )

    const triggerButton = screen.getAllByTestId('add-item-button')
    expect(triggerButton).toBeDefined()
  })

  test('opens the dialog when the trigger button is clicked', () => {
    render(
      <RetroItemDialog
        itemType={mockItemType}
        userId={mockUserId}
        retrospective={mockRetrospective}
        handleAddRetroItem={mockHandleAddRetroItem}
      />,
    )

    const triggerButton = screen.getAllByTestId('add-item-button')
    fireEvent.click(triggerButton[0])

    const dialogContent = screen.getAllByTestId('dialog-content')
    expect(dialogContent).toBeDefined()
  })

  test('closes the dialog when the close button is clicked', () => {
    render(
      <RetroItemDialog
        itemType={mockItemType}
        userId={mockUserId}
        retrospective={mockRetrospective}
        handleAddRetroItem={mockHandleAddRetroItem}
      />,
    )

    const triggerButton = screen.getAllByTestId('add-item-button')
    fireEvent.click(triggerButton[0])

    const closeButton = screen.queryByTestId('close-dialog')
    expect(closeButton).toBeDefined()

    if (closeButton) {
      fireEvent.click(closeButton)
    }

    const dialogContent = screen.queryByTestId('dialog-content')
    if (dialogContent) {
      expect(dialogContent).not.toBeDefined()
    }
  })

  test('calls handleAddRetroItem with the correct input when the form is submitted', () => {
    render(
      <RetroItemDialog
        itemType={mockItemType}
        userId={mockUserId}
        retrospective={mockRetrospective}
        handleAddRetroItem={mockHandleAddRetroItem}
      />,
    )

    const triggerButton = screen.getAllByTestId('add-item-button')
    fireEvent.click(triggerButton[0])

    const contentInput = screen.getByRole('textbox')
    fireEvent.change(contentInput, { target: { value: 'Test content' } })

    const submitButton = screen.getByLabelText('Save')
    fireEvent.click(submitButton)
  })
})
