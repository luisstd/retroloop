import React, { useState } from 'react'

import { IconMinimize, IconPlus } from '@tabler/icons'

import { Transition } from '@headlessui/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Field, Form, Formik } from 'formik'

export default function AddRetroDialog(props: any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <div className='flex flex-row items-center transition ease-in-out border-2 border-black rounded-md w-fit dark:border-neutral-200 hover:scale-105 hover:cursor-pointer'>
          <h2 className='p-1 m-2 text-2xl italic font-bold'>Start Retro</h2>

          <IconPlus size={40} className='p-1 m-2 rounded-md justify-self-center' />
        </div>
      </Dialog.Trigger>
      <Transition.Root show={isOpen}>
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 z-20 bg-black/50' />
        </Transition.Child>
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        ></Transition.Child>
      </Transition.Root>
      <Dialog.Overlay className='fixed inset-0 z-20 bg-black/50' />

      <Dialog.Content className='fixed z-50 w-screen max-w-md p-5 bg-white border-2 border-black rounded-lg dark:border-neutral-200 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:w-full focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:bg-black dark:text-neutral-200 '>
        <div className='flex flex-row items-start'>
          <Dialog.Title className='py-5 text-3xl italic font-bold '>
            Start a retrospective
          </Dialog.Title>

          <Dialog.Close asChild className='inline-flex'>
            <button aria-label='Close'>
              <IconMinimize />
            </button>
          </Dialog.Close>
        </div>
        {/* <Dialog.Description className=''>You can change this later</Dialog.Description> */}
        <Formik
          initialValues={{
            name: '',
            date: new Date(),
            link: '',
          }}
          onSubmit={async (values) => {
            props.handleAddRetro(values)
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
                className='p-2 m-2 rounded-md outline-2 bg-neutral-100 dark:bg-neutral-700'
              />
            </fieldset>

            <div className='flex flex-row justify-end w-full'>
              <button
                type='submit'
                aria-label='Close'
                className='p-1 m-2 mt-10 italic font-bold border-2 border-black rounded-md dark:border-neutral-200'
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
