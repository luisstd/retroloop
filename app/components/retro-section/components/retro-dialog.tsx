'use client'

import { Transition } from '@headlessui/react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconMinimize, IconPlus } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { RetrospectiveCreateInputSchema } from '@/schemas/retrospective'
import { RetrospectiveCreateInput } from '@/types/retrospective'

type RetroDialogProps = {
  handleAddRetro: (input: RetrospectiveCreateInput) => void
}

export function RetroDialog({ handleAddRetro }: RetroDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className='btn relative flex flex-row items-center bg-base-light dark:bg-base-dark'>
          <h2 className='p-2 text-lg font-bold italic '>Start Retro</h2>

          <IconPlus size={32} className='justify-self-center rounded-md p-1' />
        </button>
      </Dialog.Trigger>
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
      <Dialog.Overlay className='fixed inset-0 z-20 bg-base-dark/50' />

      <Dialog.Content className='fixed left-2/4 top-2/4 z-50 w-screen max-w-md -translate-x-2/4 -translate-y-2/4 rounded-lg border-2 border-base-dark bg-base-light p-5 dark:border-base-light dark:bg-base-dark dark:text-base-light md:w-full '>
        <div className='flex flex-row items-start justify-between'>
          <Dialog.Title className='py-5 text-3xl font-bold italic '>
            Start a retrospective
          </Dialog.Title>

          <Dialog.Close asChild className='inline-flex'>
            <button className='btn border-none' aria-label='Close'>
              <IconMinimize />
            </button>
          </Dialog.Close>
        </div>
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
          <Form>
            <fieldset>
              <label htmlFor='name' className='font-bold'>
                Retro Name:
              </label>
              <Field
                id='name'
                name='name'
                placeholder='Untitled Retro'
                className='m-2 rounded-md bg-neutral-200 p-2 outline-2 dark:bg-neutral-700'
              />
            </fieldset>

            <div className='flex w-full flex-row justify-end'>
              <button
                type='submit'
                aria-label='Start Retro'
                className='btn m-2 mt-10 px-2 py-1 font-bold italic'
              >
                Start Retro
              </button>
            </div>
          </Form>
        </Formik>
      </Dialog.Content>
    </Dialog.Root>
  )
}
