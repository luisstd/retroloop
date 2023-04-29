import { render, RenderResult } from '@testing-library/react'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import CommonEditDialog from '@/components/dialog/edit-dialog/edit-dialog'

test('CommonEditDialog', () => {
  describe('CommonEditDialog', () => {
    let DialogMounted: RenderResult

    beforeAll(() => {
      DialogMounted = render(
        <CommonEditDialog
          itemToEdit={{ id: '' }}
          editHandler={(input) => {
            expect(input)
          }}
        />
      )
    })

    afterAll(() => {
      DialogMounted.unmount()
    })
  })
})
