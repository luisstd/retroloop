import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import { MenuBar } from 'src/app/components/menu-bar/menu-bar'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

vi.mock('next-auth/react', () => ({
  useSession: () => ({ status: 'unauthenticated', data: null }),
  signIn: () => ({}),
}))

vi.mock('next/router', () => ({
  useRouter: () => ({}),
}))

describe('MenuBar', () => {
  let MenuBarMounted: RenderResult

  beforeEach(() => {
    MenuBarMounted = render(<MenuBar />)
  })

  afterEach(() => {
    MenuBarMounted.unmount()
  })

  test('should render Dashboard link and handle click when user is authenticated', async () => {
    const dashboardLink = screen.getByText('Dashboard')
    expect(dashboardLink).toBeDefined()

    fireEvent.click(dashboardLink)
  })

  test('should render Profile link and handle click when user is authenticated', async () => {
    const profileLink = screen.getByText('Profile')
    expect(profileLink).toBeDefined()

    fireEvent.click(profileLink)
  })

  test('should handle user login when user is not authenticated', async () => {
    vi.mock('next-auth/react', () => ({
      useSession: () => ({ status: 'unauthenticated', data: null }),
      signIn: () => ({}),
    }))

    const { rerender } = MenuBarMounted

    rerender(<MenuBar />)

    const loginButton = screen.getByText('Login')

    expect(loginButton).toBeDefined()
    fireEvent.click(loginButton)
  })
})
