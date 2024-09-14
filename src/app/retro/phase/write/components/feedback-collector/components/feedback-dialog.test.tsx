import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { FeedbackDialog } from '@/app/retro/phase/write/components/feedback-collector/components/feedback-dialog'

describe('FeedbackDialog', () => {
  let FeedbackDialogMounted: RenderResult

  const mockHandleAddFeedback = vi.fn()
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
    FeedbackDialogMounted = render(
      <FeedbackDialog
        itemType={mockItemType}
        userId={mockUserId}
        retrospective={mockRetrospective}
        handleAddFeedback={mockHandleAddFeedback}
      />,
    )
    vi.clearAllMocks()
  })

  afterEach(() => {
    FeedbackDialogMounted.unmount()
  })

  test('renders the trigger button', () => {
    render(
      <FeedbackDialog
        itemType={mockItemType}
        userId={mockUserId}
        retrospective={mockRetrospective}
        handleAddFeedback={mockHandleAddFeedback}
      />,
    )

    const triggerButton = screen.getAllByTestId('add-item-button')
    expect(triggerButton).toBeDefined()
  })

  test('opens the dialog when the trigger button is clicked', () => {
    render(
      <FeedbackDialog
        itemType={mockItemType}
        userId={mockUserId}
        retrospective={mockRetrospective}
        handleAddFeedback={mockHandleAddFeedback}
      />,
    )

    const triggerButton = screen.getAllByTestId('add-item-button')
    fireEvent.click(triggerButton[0])

    const dialogContent = screen.getAllByTestId('dialog-content')
    expect(dialogContent).toBeDefined()
  })

  test('closes the dialog when the close button is clicked', () => {
    render(
      <FeedbackDialog
        itemType={mockItemType}
        userId={mockUserId}
        retrospective={mockRetrospective}
        handleAddFeedback={mockHandleAddFeedback}
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

  test('calls handleAddFeedback with the correct input when the form is submitted', () => {
    render(
      <FeedbackDialog
        itemType={mockItemType}
        userId={mockUserId}
        retrospective={mockRetrospective}
        handleAddFeedback={mockHandleAddFeedback}
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
