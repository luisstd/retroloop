'use client'

import { Transition } from '@headlessui/react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconMinimize, IconPencil } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import cloneDeep from 'lodash/cloneDeep'
import { useState } from 'react'

type EditDialogProps = {
  itemToEdit: Record<string, unknown>
  editHandler: (input: unknown) => void
}

export function EditDialog({ itemToEdit, editHandler }: EditDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className='btn mx-1'>
          <IconPencil size={26} className='justify-self-center rounded-md p-1' />
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

      <Dialog.Content
        onPointerDownOutside={(event) => event.preventDefault()}
        className='fixed left-2/4 top-2/4 z-50 w-screen max-w-md -translate-x-2/4 -translate-y-2/4 rounded-lg border-2 border-base-dark bg-base-light p-5 dark:border-base-light dark:bg-base-dark dark:text-base-light md:w-full'
      >
        <div className='flex flex-row items-start justify-between'>
          <Dialog.Title className='py-5 text-3xl font-bold italic '>Edit item</Dialog.Title>

          <Dialog.Close asChild className='inline-flex'>
            <button className='btn border-none' aria-label='Close'>
              <IconMinimize />
            </button>
          </Dialog.Close>
        </div>
        <Formik
          initialValues={cloneDeep(itemToEdit)}
          onSubmit={(values) => {
            editHandler(values)
            setIsOpen(false)
          }}
        >
          <Form>
            <fieldset>
              <label htmlFor='name' className='font-bold'></label>

              <Field
                id='content'
                name='content'
                component='textarea'
                rows={10}
                className='h-full min-h-min w-full rounded-md border-2 border-base-dark bg-neutral-100 p-2 dark:border-base-light dark:bg-neutral-700'
              />
            </fieldset>

            <div className='flex w-full flex-row justify-end'>
              <button
                type='submit'
                aria-label='Save'
                className='btn m-2 mt-10 px-2 py-1 font-bold italic'
              >
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </Dialog.Content>
    </Dialog.Root>
  )
}
