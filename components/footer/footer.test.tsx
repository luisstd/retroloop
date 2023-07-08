import { render, RenderResult } from '@testing-library/react'
import { Footer } from 'components/footer/footer'
import { afterAll, beforeAll, describe, test } from 'vitest'

test('Footer', () => {
  describe('Footer', () => {
    let FooterMounted: RenderResult

    beforeAll(() => {
      FooterMounted = render(<Footer />)
    })

    afterAll(() => {
      FooterMounted.unmount()
    })
  })
})
