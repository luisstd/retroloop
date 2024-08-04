import { render, RenderResult } from '@testing-library/react'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import { DeleteDialog } from '@/app/components/dialog/delete-dialog/delete-dialog'

test('DeleteDialog', () => {
  describe('DeleteDialog', () => {
    let DialogMounted: RenderResult

    beforeAll(() => {
      DialogMounted = render(
        <DeleteDialog
          itemToDelete={{ id: '' }}
          deleteHandler={(input) => {
            expect(input)
          }}
        />,
      )
    })

    afterAll(() => {
      DialogMounted.unmount()
    })
  })
})
