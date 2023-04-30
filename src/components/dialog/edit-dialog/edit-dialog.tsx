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
        <button className='mx-1 btn'>
          <IconPencil size={26} className='p-1 rounded-md justify-self-center' />
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
        className='fixed z-50 w-screen max-w-md p-5 border-2 rounded-lg border-base-dark bg-base-light dark:bg-base-dark dark:border-base-light top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:w-full dark:text-base-light'
      >
        <div className='flex flex-row items-start justify-between'>
          <Dialog.Title className='py-5 text-3xl italic font-bold '>Edit item</Dialog.Title>

          <Dialog.Close asChild className='inline-flex'>
            <button className='border-none btn' aria-label='Close'>
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
                className='w-full h-full p-2 border-2 rounded-md bg-neutral-100 dark:bg-neutral-700 border-base-dark min-h-min dark:border-base-light'
              />
            </fieldset>

            <div className='flex flex-row justify-end w-full'>
              <button
                type='submit'
                aria-label='Save'
                className='px-2 py-1 m-2 mt-10 italic font-bold btn'
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
