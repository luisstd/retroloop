import { render, RenderResult } from '@testing-library/react'
import { SignUpForm } from 'src/app/components/sign-up/sign-up-form'
import { afterAll, beforeAll, describe, test } from 'vitest'

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
