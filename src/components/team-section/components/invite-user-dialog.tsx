import { Transition } from '@headlessui/react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconMinimize, IconPlus } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

type InviteUserDialogProps = {
  handleToastOpen: (value: boolean) => void
}

export default function InviteUserDialog({ handleToastOpen }: InviteUserDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className='flex flex-row items-center btn'>
          <h2 className='p-2 text-lg italic font-bold'>Invite</h2>

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

      <Dialog.Content className='fixed z-50 w-screen max-w-md p-5 border-2 rounded-lg border-base-dark bg-base-light dark:border-base-light top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:w-full dark:bg-base-dark dark:text-base-light'>
        <div className='flex flex-row items-start justify-between'>
          <Dialog.Title className='py-5 text-3xl italic font-bold '>Invite to team</Dialog.Title>

          <Dialog.Close asChild className='inline-flex'>
            <button className='border-none btn' aria-label='Close'>
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
                className='p-2 m-2 rounded-md outline-2 bg-neutral-200 dark:bg-neutral-700'
              />
            </fieldset>

            <div className='flex flex-row justify-end w-full'>
              <button
                type='submit'
                aria-label='Close'
                className='px-1 py-1 m-2 mt-10 italic font-bold btn'
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
