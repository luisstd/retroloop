import { render, RenderResult } from '@testing-library/react'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import CommonDeleteDialog from '@/components/Dialog/DeleteDialog/DeleteDialog'

test('CommonDeleteDialog', () => {
  describe('CommonDeleteDialog', () => {
    let DialogMounted: RenderResult

    beforeAll(() => {
      DialogMounted = render(
        <CommonDeleteDialog
          itemToDelete={{ id: '' }}
          deleteHandler={(input) => {
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
