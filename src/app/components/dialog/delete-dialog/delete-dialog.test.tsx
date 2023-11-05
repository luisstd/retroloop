import { render, RenderResult } from '@testing-library/react'
import { DeleteDialog } from 'src/app/components/dialog/delete-dialog/delete-dialog'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'

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
        />
      )
    })

    afterAll(() => {
      DialogMounted.unmount()
    })
  })
})
