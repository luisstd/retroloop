import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { Menu } from '@/app/components/menu/menu'

vi.mock('next-auth/react', () => ({
  useSession: () => ({ status: 'unauthenticated', data: null }),
  signIn: () => ({}),
}))

vi.mock('next/router', () => ({
  useRouter: () => ({}),
}))

describe('Menu', () => {
  let MenuBarMounted: RenderResult

  beforeEach(() => {
    MenuBarMounted = render(<Menu />)
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

    rerender(<Menu />)

    const loginButton = screen.getByText('Login')

    expect(loginButton).toBeDefined()
    fireEvent.click(loginButton)
  })
})
