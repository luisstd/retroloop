'use client'

import { Transition } from '@headlessui/react'
import { IconPlus } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { RetrospectiveCreateInputSchema } from '@/schemas/retrospective'
import { RetrospectiveCreateInput } from '@/types/retrospective'
import { Button } from '@/ui/button/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/dialog/dialog'
import { Input } from '@/ui/input/input'
import { Label } from '@/ui/label/label'

type RetroDialogProps = {
  handleAddRetro: (input: RetrospectiveCreateInput) => void
}

export function RetroDialog({ handleAddRetro }: RetroDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className='flex gap-1'>
          Start Retro
          <IconPlus size={18} />
        </Button>
      </DialogTrigger>

      <Transition.Root show={isOpen}>
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        ></Transition.Child>
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        ></Transition.Child>
      </Transition.Root>

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
    </Dialog>
  )
}
