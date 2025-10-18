'use client'

import { Retrospective } from '@prisma/client'
import { IconPlus } from '@tabler/icons-react'
import { Field, FieldProps, Form, Formik } from 'formik'
import { useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { Button } from '@/app/ui/button'
import { Dialog } from '@/app/ui/dialog'
import { Textarea } from '@/app/ui/textarea'
import { FeedbackCreateInputSchema } from '@/schemas/feedback'
import { FeedbackCreateInput } from '@/types/feedback'

type FeedbackDialogProps = {
  itemType: string
  userId: string
  retrospective: Retrospective
  handleAddFeedback: (input: FeedbackCreateInput) => void
}

export function FeedbackDialog({
  itemType,
  userId,
  retrospective,
  handleAddFeedback,
}: FeedbackDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger className='justify-self-end' asChild>
        <Button
          size='icon'
          variant='outline'
          className='mx-2'
          aria-label='Add item'
          data-testid='add-item-button'
        >
          <IconPlus size={26} />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content
        size='lg'
        onPointerDownOutside={(event) => event.preventDefault()}
        data-testid='dialog-content'
      >
        <Dialog.Header>
          <span>Add feedback</span>
        </Dialog.Header>
        <Dialog.Description>
          {itemType === 'success' ? 'What went well?' : null}
          {itemType === 'improvement' ? 'What could we improve?' : null}
          {itemType === 'action' ? 'What should we start doing?' : null}
        </Dialog.Description>

        <Formik
          validationSchema={toFormikValidationSchema(FeedbackCreateInputSchema)}
          initialValues={{
            type: itemType ? itemType : '',
            content: '',
            retrospectiveId: retrospective.id,
            votes: 0,
            voters: [],
            userId: userId,
          }}
          onSubmit={(values: FeedbackCreateInput) => {
            handleAddFeedback(values)
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
                Save
              </Button>
            </Dialog.Footer>
          </Form>
        </Formik>
      </Dialog.Content>
    </Dialog>
  )
}
