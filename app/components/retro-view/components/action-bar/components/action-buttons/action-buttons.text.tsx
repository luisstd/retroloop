import { Retrospective } from '@prisma/client'
import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import { afterEach, beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'

import { ActionButtons } from '@/app/components/retro-view/components/action-bar/components/action-buttons/action-buttons'

vi.mock('react', () => ({
  useState: vi.fn(),
}))

test('ActionButtons', () => {
  describe('ActionButtons', () => {
    let useStateMock
    let setOpenMock: () => void
    let handleUpdateRetroMock: () => void

    const retrospective: Retrospective = {
      id: '1',
      phase: 'WRITING',
      name: 'Test Retro',
      createdAt: new Date(),
      date: new Date(),
      timerExpiration: new Date(),
      workspaceId: '1',
    }

    let ActionButtonsMounted: RenderResult

    beforeEach(() => {
      ActionButtonsMounted = render(
        <ActionButtons retrospective={retrospective} handleUpdateRetro={handleUpdateRetroMock} />
      )
    })

    afterEach(() => {
      ActionButtonsMounted.unmount()
    })

    beforeAll(() => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      useStateMock = vi.spyOn(require('react'), 'useState')
      setOpenMock = vi.fn()
      handleUpdateRetroMock = vi.fn()

      useStateMock.mockImplementation((initialState) => [initialState, setOpenMock])

      render(
        <ActionButtons retrospective={retrospective} handleUpdateRetro={handleUpdateRetroMock} />
      )
    })

    test('renders copy retro link button', () => {
      const copyRetroLinkButton = screen.getByRole('button', { name: 'Copy Retro link' })
      expect(copyRetroLinkButton).toBeDefined()
    })

    test('copies retro link on button click', () => {
      const copyRetroLinkButton = screen.getByRole('button', { name: 'Copy Retro link' })
      fireEvent.click(copyRetroLinkButton)
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(window.location.href)
      expect(setOpenMock).toHaveBeenCalledWith(true)
    })

    test('renders toast notification when retro link is copied', () => {
      const toastNotification = screen.getByText(/Copied retrospective link to clipboard!/i)
      expect(toastNotification).toBeDefined()
    })

    test('renders next phase button', () => {
      const nextPhaseButton = screen.getByRole('button', { name: 'Next Phase' })
      expect(nextPhaseButton).toBeDefined()
    })

    test('calls handleUpdateRetro with correct phase on next phase button click', () => {
      const nextPhaseButton = screen.getByRole('button', { name: 'Next Phase' })
      fireEvent.click(nextPhaseButton)

      expect(handleUpdateRetroMock).toHaveBeenCalledWith({
        ...retrospective,
        id: retrospective.id,
        phase: 'VOTING',
      })
    })
  })
})
