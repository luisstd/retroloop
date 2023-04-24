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

export default function RetroDialog({ handleAddRetro }: RetroDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className='relative flex flex-row items-center btn bg-base-light dark:bg-base-dark'>
          <h2 className='p-2 text-lg italic font-bold '>Start Retro</h2>

          <IconPlus size={32} className='p-1 rounded-md justify-self-center' />
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

      <Dialog.Content className='fixed z-50 w-screen max-w-md p-5 border-2 rounded-lg bg-base-light border-base-dark dark:border-base-light top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:w-full dark:bg-base-dark dark:text-base-light '>
        <div className='flex flex-row items-start justify-between'>
          <Dialog.Title className='py-5 text-3xl italic font-bold '>
            Start a retrospective
          </Dialog.Title>

          <Dialog.Close asChild className='inline-flex'>
            <button className='border-none btn' aria-label='Close'>
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
                className='p-2 m-2 rounded-md outline-2 bg-neutral-200 dark:bg-neutral-700'
              />
            </fieldset>

            <div className='flex flex-row justify-end w-full'>
              <button
                type='submit'
                aria-label='Start Retro'
                className='px-2 py-1 m-2 mt-10 italic font-bold btn'
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
