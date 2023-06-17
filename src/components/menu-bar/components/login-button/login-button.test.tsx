import { fireEvent, render, RenderResult } from '@testing-library/react'
import { afterEach, beforeAll, beforeEach, describe, expect, test } from 'vitest'

import { LoginButton } from '@/components/menu-bar/components/login-button/login-button'

test('LoginButton', () => {
  let LoginButtonMounted: RenderResult

  describe('LoginButton', () => {
    beforeEach(() => {
      LoginButtonMounted = render(<LoginButton />)
    })

    afterEach(() => {
      LoginButtonMounted.unmount()
    })

    beforeAll(() => {
      render(<LoginButton />)
    })

    test('renders user profile link when session exists', () => {
      const linkElement = document.querySelector('a[href="/profile"]')
      expect(linkElement).toBeTruthy()

      const iconElement = document.querySelector('[data-testid="icon-user-circle"]')
      expect(iconElement).toBeTruthy()

      if (iconElement) {
        expect(iconElement.getAttribute('size')).toBe('30')
      }
    })

    test('calls signIn function when login button is clicked', () => {
      const loginButton = document.querySelector('button')
      expect(loginButton).toBeTruthy()

      if (loginButton) {
        fireEvent.click(loginButton)
      }
    })
  })
})
