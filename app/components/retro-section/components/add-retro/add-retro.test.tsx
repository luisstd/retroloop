import { fireEvent, render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, test, vi } from 'vitest'

import { AddRetro } from '@/components/retro-section/components/add-retro/add-retro'

vi.mock('formik', () => ({
  Formik: vi.fn(),
  Field: vi.fn(),
}))

test('AddRetro', () => {
  describe('AddRetro', () => {
    let useStateMock
    let setIsOpenMock: () => void
    let handleAddRetroMock: () => void

    beforeAll(() => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      useStateMock = vi.spyOn(require('react'), 'useState')
      setIsOpenMock = vi.fn()
      handleAddRetroMock = vi.fn()

      useStateMock.mockImplementation((initialState) => [initialState, setIsOpenMock])

      render(<AddRetro handleAddRetro={handleAddRetroMock} />)
    })

    test('renders start retro button', () => {
      const startRetroButton = screen.getByRole('button', { name: 'Start Retro' })
      expect(startRetroButton).toBeDefined()
    })

    test('opens dialog on start retro button click', () => {
      const startRetroButton = screen.getByRole('button', { name: 'Start Retro' })
      fireEvent.click(startRetroButton)
      expect(setIsOpenMock).toHaveBeenCalledWith(true)
    })

    test('renders dialog content', () => {
      const dialogContent = screen.getByRole('dialog')
      expect(dialogContent).toBeDefined()

      const dialogTitle = screen.getByText(/Start a retrospective/i)
      expect(dialogTitle).toBeDefined()

      const dialogCloseButton = screen.getByRole('button', { name: 'Close' })
      expect(dialogCloseButton).toBeDefined()

      const form = screen.getByRole('form')
      expect(form).toBeDefined()

      const retroNameLabel = screen.getByText(/Retro Name:/i)
      expect(retroNameLabel).toBeDefined()

      const retroNameField = screen.getByRole('textbox', { name: 'Untitled Retro' })
      expect(retroNameField).toBeDefined()

      const startRetroSubmitButton = screen.getByRole('button', { name: 'Start Retro' })
      expect(startRetroSubmitButton).toBeDefined()
    })

    test('closes dialog on close button click', () => {
      const dialogCloseButton = screen.getByRole('button', { name: 'Close' })
      fireEvent.click(dialogCloseButton)
      expect(setIsOpenMock).toHaveBeenCalledWith(false)
    })

    test('calls handleAddRetro and closes dialog on form submission', () => {
      const retroNameField = screen.getByRole('textbox', { name: 'Untitled Retro' })
      fireEvent.change(retroNameField, { target: { value: 'New Retro' } })

      const startRetroSubmitButton = screen.getByRole('button', { name: 'Start Retro' })
      fireEvent.click(startRetroSubmitButton)

      expect(handleAddRetroMock).toHaveBeenCalledWith({
        name: 'New Retro',
        date: expect.any(Date),
        timerExpiration: expect.any(Date),
        phase: 'WRITING',
      })

      expect(setIsOpenMock).toHaveBeenCalledWith(false)
    })
  })
})
