import { render, RenderResult } from '@testing-library/react'
import { afterAll, beforeAll, describe, test } from 'vitest'

import SignUpForm from '@/components/SignUp/SignUpForm'

test('SignUpForm', () => {
  describe('SignUpForm', () => {
    let FormMounted: RenderResult

    beforeAll(() => {
      FormMounted = render(<SignUpForm />)
    })

    afterAll(() => {
      FormMounted.unmount()
    })
  })
})
