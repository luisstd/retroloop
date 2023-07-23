'use client'

import { Transition } from '@headlessui/react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconMinimize, IconPlus } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

type InviteUserDialogProps = {
  handleToastOpen: (value: boolean) => void
}

export function InviteUserDialog({ handleToastOpen }: InviteUserDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className='btn flex flex-row items-center'>
          <h2 className='p-2 text-lg font-bold italic'>Invite</h2>

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

      <Dialog.Content className='fixed left-2/4 top-2/4 z-50 w-screen max-w-md -translate-x-2/4 -translate-y-2/4 rounded-lg border-2 border-base-dark bg-base-light p-5 dark:border-base-light dark:bg-base-dark dark:text-base-light md:w-full'>
        <div className='flex flex-row items-start justify-between'>
          <Dialog.Title className='py-5 text-3xl font-bold italic '>Invite to team</Dialog.Title>

          <Dialog.Close asChild className='inline-flex'>
            <button className='btn border-none' aria-label='Close'>
              <IconMinimize />
            </button>
          </Dialog.Close>
        </div>
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={(values) => {
            signIn('email', { ...values, redirect: false })
            handleToastOpen(true)
            setIsOpen(false)
          }}
        >
          <Form>
            <fieldset>
              <label htmlFor='email' className='font-bold'>
                E-Mail:
              </label>
              <Field
                id='email'
                name='email'
                placeholder='example@email.com'
                className='m-2 rounded-md bg-neutral-200 p-2 outline-2 dark:bg-neutral-700'
              />
            </fieldset>

            <div className='flex w-full flex-row justify-end'>
              <button
                type='submit'
                aria-label='Close'
                className='btn m-2 mt-10 px-1 py-1 font-bold italic'
              >
                Send invite
              </button>
            </div>
          </Form>
        </Formik>
      </Dialog.Content>
    </Dialog.Root>
  )
}
