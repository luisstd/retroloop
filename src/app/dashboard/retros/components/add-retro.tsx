import { IconPlus } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
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
import { Input } from '@/app/ui/input/input'
import { Label } from '@/app/ui/label/label'
import { RetrospectiveCreateInputSchema } from '@/schemas/retrospective'
import { RetrospectiveCreateInput } from '@/types/retrospective'

type AddRetroProps = {
  handleAddRetro: (input: RetrospectiveCreateInput) => void
  isLimitReached: boolean
}

const RetroLimitReached = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Retrospective limit reached</DialogTitle>
        <DialogDescription>
          You have reached the maximum of 3 active retrospectives for the Standard plan. Upgrade to
          Unlimited to create more.
        </DialogDescription>
      </DialogHeader>
      <Button>Upgrade subscription</Button>
    </DialogContent>
  )
}

export function AddRetro({ handleAddRetro, isLimitReached }: AddRetroProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className='flex gap-1'>
          Start Retro
          <IconPlus size={18} />
        </Button>
      </DialogTrigger>

      {isLimitReached ? (
        <RetroLimitReached />
      ) : (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Start retrospective</DialogTitle>
            <DialogDescription>Create a new retrospective by giving it a name</DialogDescription>
          </DialogHeader>

          <Formik
            validationSchema={toFormikValidationSchema(RetrospectiveCreateInputSchema)}
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
            <Form className='flex flex-col gap-5'>
              <fieldset>
                <Label htmlFor='name'>Retro Name</Label>

                <Field id='name' as={Input} name='name' placeholder='Untitled Retro' />
              </fieldset>

              <DialogFooter>
                <Button type='submit' aria-label='Start Retro'>
                  Start Retro
                </Button>
              </DialogFooter>
            </Form>
          </Formik>
        </DialogContent>
      )}
    </Dialog>
  )
}
