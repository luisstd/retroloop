import { render, RenderResult } from '@testing-library/react'
import { InviteUserDialog } from 'components/team-section/components/invite-user-dialog'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

// Mock next-auth/react signIn function
vi.mock('next-auth/react', () => ({
  signIn: vi.fn(),
}))

describe('InviteUserDialog', () => {
  let InviteUserDialogMounted: RenderResult

  beforeEach(() => {
    InviteUserDialogMounted = render(<InviteUserDialog handleToastOpen={() => ({})} />)
  })

  afterEach(() => {
    InviteUserDialogMounted.unmount()
  })

  test('should render without crashing', () => {
    expect(InviteUserDialogMounted).toBeTruthy()
  })
})
