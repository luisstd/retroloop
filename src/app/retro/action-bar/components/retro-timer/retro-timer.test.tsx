import { Retrospective } from '@prisma/client'
import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from 'vitest'

import { RetroTimer } from '@/app/retro/action-bar/components/retro-timer/retro-timer'

test('RetroTimer', () => {
  describe('RetroTimer', () => {
    let handleUpdateRetroMock: (input: Retrospective) => void
    let mockMinutes: number

    let RetroTimerMounted: RenderResult

    beforeEach(() => {
      RetroTimerMounted = render(
        <RetroTimer
          selectedRetro={selectedRetro}
          handleUpdateRetro={handleUpdateRetroMock}
        />,
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
    }

    beforeAll(() => {
      handleUpdateRetroMock = vi.fn()
      mockMinutes = 5

      render(
        <RetroTimer
          selectedRetro={selectedRetro}
          handleUpdateRetro={handleUpdateRetroMock}
        />,
      )
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
  })
})
