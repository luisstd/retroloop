import { IconPlus } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { Button } from '@/app/ui/button'
import { Dialog } from '@/app/ui/dialog'
import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
import { RetrospectiveCreateInputSchema } from '@/schemas/retrospective'
import { RetrospectiveCreateInput } from '@/types/retrospective'

type AddRetroProps = {
  handleAddRetro: (input: RetrospectiveCreateInput) => void
}

export function AddRetro({ handleAddRetro }: AddRetroProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button className='flex gap-1'>
          Start Retro
          <IconPlus size={18} />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content size='md'>
        <Dialog.Header>
          <span>Start retrospective</span>
        </Dialog.Header>
        <Dialog.Description>
          Create a new retrospective by giving it a name.
        </Dialog.Description>

        <Formik
          validationSchema={toFormikValidationSchema(
            RetrospectiveCreateInputSchema,
          )}
          initialValues={{
            name: '',
            date: new Date(),
            timerExpiration: new Date(),
            phase: 'WRITING',
          }}
          onSubmit={(values: RetrospectiveCreateInput) => {
            handleAddRetro(values)
            setIsOpen(false)
          }}
        >
          <Form className='flex flex-col gap-10'>
            <fieldset className='flex flex-col gap-2 px-4'>
              <Label htmlFor='name'>Retro Name</Label>
              <Field
                id='name'
                as={Input}
                name='name'
                placeholder='Untitled Retro'
              />
            </fieldset>

            <Dialog.Footer>
              <Button type='submit' aria-label='Start Retro'>
                Start Retro
              </Button>
            </Dialog.Footer>
          </Form>
        </Formik>
      </Dialog.Content>
    </Dialog>
  )
}
