import { render, RenderResult } from '@testing-library/react'
import { EditDialog } from 'components/dialog/edit-dialog/edit-dialog'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'

test('EditDialog', () => {
  describe('EditDialog', () => {
    let DialogMounted: RenderResult

    beforeAll(() => {
      DialogMounted = render(
        <EditDialog
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
