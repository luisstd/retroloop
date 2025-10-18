'use client'

import { IconPencil } from '@tabler/icons-react'
import { Field, FieldProps, Form, Formik } from 'formik'
import cloneDeep from 'lodash/cloneDeep'
import { useState } from 'react'

import { Button } from '@/app/ui/button'
import { Dialog } from '@/app/ui/dialog'
import { Textarea } from '@/app/ui/textarea'

type EditDialogProps = {
  itemToEdit: Record<string, unknown>
  editHandler: (input: unknown) => void
}

export function EditDialog({ itemToEdit, editHandler }: EditDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button
          size='icon'
          variant='outline'
          className='mx-1'
          aria-label='Edit item'
        >
          <IconPencil size={16} />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content
        size='lg'
        onPointerDownOutside={(event) => event.preventDefault()}
      >
        <Dialog.Header>
          <span>Edit feedback</span>
        </Dialog.Header>
        <Formik
          initialValues={cloneDeep(itemToEdit)}
          onSubmit={(values) => {
            editHandler(values)
            setIsOpen(false)
          }}
        >
          <Form>
            <fieldset className='mb-5 px-4'>
              <Field id='content' name='content' className='h-full w-full'>
                {({ field }: FieldProps) => (
                  <Textarea
                    placeholder='Type your feedback here'
                    {...field}
                    rows={8}
                  />
                )}
              </Field>
            </fieldset>

            <Dialog.Footer>
              <Button type='submit' aria-label='Save'>
                Update
              </Button>
            </Dialog.Footer>
          </Form>
        </Formik>
      </Dialog.Content>
    </Dialog>
  )
}
