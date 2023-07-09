import { render, RenderResult } from '@testing-library/react'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import { EditDialog } from '@/components/dialog/edit-dialog/edit-dialog'

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
