import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import { DeleteUserDialog } from 'src/app/components/profile-section/components/delete-user-dialog'
import { afterEach, beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'

test('DeleteUserDialog', () => {
  describe('DeleteUserDialog', () => {
    let useStateMock
    let setIsOpenMock: () => void
    let deleteHandlerMock: () => void

    let DeleteUserDialogMounted: RenderResult

    beforeEach(() => {
      DeleteUserDialogMounted = render(
        <DeleteUserDialog
          itemToDelete={{
            id: '1',
            name: 'John Doe',
            email: 'user@mail.com',
            image: 'https://example.com/image.png',
            createdAt: new Date(),
            emailVerified: new Date(),
            role: '',
          }}
          deleteHandler={deleteHandlerMock}
        />
      )
    })

    afterEach(() => {
      DeleteUserDialogMounted.unmount()
    })

    beforeAll(() => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      useStateMock = vi.spyOn(require('react'), 'useState')
      setIsOpenMock = vi.fn()
      deleteHandlerMock = vi.fn()

      useStateMock.mockImplementation((initialState) => [initialState, setIsOpenMock])

      render(
        <DeleteUserDialog
          itemToDelete={{
            id: '1',
            name: 'John Doe',
            email: 'user@mail.com',
            image: 'https://example.com/image.png',
            createdAt: new Date(),
            emailVerified: new Date(),
            role: '',
          }}
          deleteHandler={deleteHandlerMock}
        />
      )
    })

    test('renders delete button', () => {
      const deleteButton = screen.getByRole('button', { name: 'Delete Account' })
      expect(deleteButton).toBeDefined()
    })

    test('opens dialog on delete button click', () => {
      const deleteButton = screen.getByRole('button', { name: 'Delete Account' })
      fireEvent.click(deleteButton)
      expect(setIsOpenMock).toHaveBeenCalledWith(true)
    })

    test('renders dialog content', () => {
      const dialogContent = screen.getByRole('dialog')
      expect(dialogContent).toBeDefined()

      const dialogTitle = screen.getByText(/Are you absolutely sure?/i)
      expect(dialogTitle).toBeDefined()

      const dialogDescription = screen.getByText(/This action cannot be undone./i)
      expect(dialogDescription).toBeDefined()

      const cancelButton = screen.getByRole('button', { name: 'Cancel' })
      expect(cancelButton).toBeDefined()

      const deleteAccountButton = screen.getByRole('button', { name: 'Yes, delete account' })
      expect(deleteAccountButton).toBeDefined()
    })

    test('closes dialog on cancel button click', () => {
      const cancelButton = screen.getByRole('button', { name: 'Cancel' })
      fireEvent.click(cancelButton)
      expect(setIsOpenMock).toHaveBeenCalledWith(false)
    })

    test('calls deleteHandler on delete account button click', () => {
      const deleteAccountButton = screen.getByRole('button', { name: 'Yes, delete account' })
      fireEvent.click(deleteAccountButton)
      expect(deleteHandlerMock).toHaveBeenCalledWith({ id: '1', name: 'John Doe' })
    })
  })
})
