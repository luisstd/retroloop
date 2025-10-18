import { Retrospective } from '@prisma/client'
import { IconDots } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { Button } from '@/app/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/ui/dialog'
import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
import { RetrospectiveCreateInputSchema } from '@/schemas/retrospective'
import { RetrospectiveUpdateInput } from '@/types/retrospective'

type EditRetroProps = {
  handleEditRetro: (input: RetrospectiveUpdateInput) => void
  retrospective: Retrospective
}

export function EditRetro({ handleEditRetro, retrospective }: EditRetroProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size='icon'
          variant='outline'
          aria-label='Edit retrospective button'
        >
          <IconDots size={18} className='text-muted-foreground' />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update retrospective</DialogTitle>
        </DialogHeader>

        <Formik
          validationSchema={toFormikValidationSchema(
            RetrospectiveCreateInputSchema,
          )}
          initialValues={{
            ...retrospective,
          }}
          onSubmit={(values: RetrospectiveUpdateInput) => {
            handleEditRetro(values)
            setIsOpen(false)
          }}
        >
          <Form className='flex flex-col gap-5'>
            <fieldset>
              <Label htmlFor='name'>Retro Name</Label>

              <Field
                id='name'
                as={Input}
                name='name'
                placeholder='Untitled Retro'
              />
            </fieldset>

            <DialogFooter>
              <Button type='submit' aria-label='Start Retro'>
                Update retro
              </Button>
            </DialogFooter>
          </Form>
        </Formik>
      </DialogContent>
    </Dialog>
  )
}
