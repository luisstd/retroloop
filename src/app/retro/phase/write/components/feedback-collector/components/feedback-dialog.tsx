'use client'

import { Retrospective } from '@prisma/client'
import { IconPlus } from '@tabler/icons-react'
import { Field, FieldProps, Form, Formik } from 'formik'
import { useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { Button } from '@/app/ui/button/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/ui/dialog/dialog'
import { Textarea } from '@/app/ui/textarea/textarea'
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
      <DialogTrigger className='justify-self-end' asChild>
        <Button
          size='icon'
          className='mx-2'
          variant='ghost'
          aria-label='Add item'
          data-testid='add-item-button'
        >
          <IconPlus size={26} />
        </Button>
      </DialogTrigger>

      <DialogContent
        onPointerDownOutside={(event) => event.preventDefault()}
        data-testid='dialog-content'
      >
        <DialogHeader>
          <DialogTitle>Add feedback</DialogTitle>
          <DialogDescription>
            {itemType === 'success' ? 'What went well?' : null}
            {itemType === 'improvement' ? 'What could we improve?' : null}
            {itemType === 'action' ? 'What should we start doing?' : null}
          </DialogDescription>
        </DialogHeader>

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
            <fieldset className='mb-5'>
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

            <DialogFooter>
              <Button type='submit' aria-label='Save'>
                Save
              </Button>
            </DialogFooter>
          </Form>
        </Formik>
      </DialogContent>
    </Dialog>
  )
}
