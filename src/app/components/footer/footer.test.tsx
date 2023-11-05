import { render, RenderResult } from '@testing-library/react'
import { afterAll, beforeAll, describe, test } from 'vitest'

import { Footer } from '@/app/components/footer/footer'

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
