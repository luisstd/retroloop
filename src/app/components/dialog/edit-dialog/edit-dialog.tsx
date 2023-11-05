'use client'

import { IconPencil } from '@tabler/icons-react'
import { Field, FieldProps, Form, Formik } from 'formik'
import cloneDeep from 'lodash/cloneDeep'
import { useState } from 'react'

import { Button } from '@/app/ui/button/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/ui/dialog/dialog'
import { Textarea } from '@/app/ui/textarea/textarea'

type EditDialogProps = {
  itemToEdit: Record<string, unknown>
  editHandler: (input: unknown) => void
}

export function EditDialog({ itemToEdit, editHandler }: EditDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size='icon' variant='ghost' className='mx-1'>
          <IconPencil size={16} />
        </Button>
      </DialogTrigger>

      <DialogContent onPointerDownOutside={(event) => event.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Edit feedback</DialogTitle>
        </DialogHeader>
        <Formik
          initialValues={cloneDeep(itemToEdit)}
          onSubmit={(values) => {
            editHandler(values)
            setIsOpen(false)
          }}
        >
          <Form>
            <fieldset className='mb-5'>
              <Field id='content' name='content' className='h-full w-full'>
                {({ field }: FieldProps) => (
                  <Textarea placeholder='Type your feedback here' {...field} rows={8} />
                )}
              </Field>
            </fieldset>

            <DialogFooter>
              <Button type='submit' aria-label='Save'>
                Update
              </Button>
            </DialogFooter>
          </Form>
        </Formik>
      </DialogContent>
    </Dialog>
  )
}
