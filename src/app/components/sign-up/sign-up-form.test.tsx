import { render, RenderResult } from '@testing-library/react'
import { afterAll, beforeAll, describe, test } from 'vitest'

import { SignUpForm } from '@/app/components/sign-up/sign-up-form'

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
