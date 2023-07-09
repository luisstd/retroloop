import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { MenuBar } from '@/app/components/menu-bar/menu-bar'

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

  test('should render Settings link and handle click when user is authenticated', async () => {
    const settingsLink = screen.getByText('Settings')
    expect(settingsLink).toBeDefined()

    fireEvent.click(settingsLink)
  })

  test('should handle user login when user is not authenticated', async () => {
    vi.mock('next-auth/react', () => ({
      useSession: () => ({ status: 'unauthenticated', data: null }),
    }))

    const { rerender } = MenuBarMounted

    rerender(<MenuBar />)

    const loginButton = screen.getByText('Login')

    expect(loginButton).toBeDefined()
    fireEvent.click(loginButton)
  })
})
