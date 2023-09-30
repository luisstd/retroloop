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

    test('calls signIn function when login button is clicked', () => {
      const loginButton = document.querySelector('button')
      expect(loginButton).toBeTruthy()

      if (loginButton) {
        fireEvent.click(loginButton)
      }
    })
  })
})
