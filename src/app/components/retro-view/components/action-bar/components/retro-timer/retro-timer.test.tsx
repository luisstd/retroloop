import { Retrospective } from '@prisma/client'
import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import { afterEach, beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'

import { RetroTimer } from '@/app/components/retro-view/components/action-bar/components/retro-timer/retro-timer'

vi.mock('react-timer-hook', () => ({
  useTimer: vi.fn(),
}))

test('RetroTimer', () => {
  describe('RetroTimer', () => {
    let handleUpdateRetroMock: (input: Retrospective) => void
    let mockMinutes: number

    let RetroTimerMounted: RenderResult

    beforeEach(() => {
      RetroTimerMounted = render(
        <RetroTimer selectedRetro={selectedRetro} handleUpdateRetro={handleUpdateRetroMock} />
      )
    })

    afterEach(() => {
      RetroTimerMounted.unmount()
    })

    const selectedRetro: Retrospective = {
      id: '1',
      phase: 'WRITING',
      name: 'Test Retro',
      createdAt: new Date(),
      date: new Date(),
      timerExpiration: new Date(),
      workspaceId: '1',
    }

    beforeAll(() => {
      handleUpdateRetroMock = vi.fn()
      mockMinutes = 5

      render(<RetroTimer selectedRetro={selectedRetro} handleUpdateRetro={handleUpdateRetroMock} />)
    })

    test('renders timer component with initial state', () => {
      const timerComponent = screen.getByText('Timer')
      expect(timerComponent).toBeDefined()

      const startButton = screen.getByRole('button', { name: 'Play Timer' })
      expect(startButton).toBeDefined()

      const minutesInput = screen.getByPlaceholderText('00')
      expect(minutesInput).toBeDefined()
    })

    test('updates minutes state when input changes', () => {
      const minutesInput = screen.getByPlaceholderText('00')
      fireEvent.change(minutesInput, { target: { value: mockMinutes } })

      expect(minutesInput).toBe(String(mockMinutes))
    })

    test('starts timer on button click', () => {
      const startButton = screen.getByRole('button', { name: 'Play Timer' })
      fireEvent.click(startButton)

      expect(handleUpdateRetroMock).toHaveBeenCalledWith({
        ...selectedRetro,
        timerExpiration: expect.any(Date),
      })
    })

    test('pauses timer on button click', () => {
      const pauseButton = screen.getByRole('button', { name: 'Pause Timer' })
      fireEvent.click(pauseButton)

      expect(handleUpdateRetroMock).not.toHaveBeenCalled()
    })

    test('restarts timer on button click', () => {
      const restartButton = screen.getByRole('button', { name: 'Restart Timer' })
      fireEvent.click(restartButton)

      expect(handleUpdateRetroMock).toHaveBeenCalledWith({
        ...selectedRetro,
        timerExpiration: expect.any(Date),
      })
    })
  })
})
