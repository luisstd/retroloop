'use client'

import { Transition } from '@headlessui/react'
import { Retrospective } from '@prisma/client'
import * as Dialog from '@radix-ui/react-dialog'
import { IconMinimize, IconPlus } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { RetroItemCreateInputSchema } from '@/schemas/retro-item'
import { RetroItemCreateInput } from '@/types/retro-item'

type RetroItemDialogProps = {
  itemType: string
  userId: string
  retrospective: Retrospective
  handleAddRetroItem: (input: RetroItemCreateInput) => void
}

export function RetroItemDialog({
  itemType,
  userId,
  retrospective,
  handleAddRetroItem,
}: RetroItemDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger className='justify-self-end' asChild>
        <button className='btn' aria-label='Add item' data-testid='add-item-button'>
          <IconPlus size={40} className='justify-self-center rounded-md p-1' />
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
        data-testid='dialog-content'
      >
        <div className='flex flex-row items-start justify-between'>
          <Dialog.Title className='py-5 text-3xl font-bold italic '>Add item</Dialog.Title>

          <Dialog.Close asChild className='inline-flex'>
            <button className='btn border-none' aria-label='Close' data-testid='close-dialog'>
              <IconMinimize />
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Description className='pb-2'>
          {itemType === 'success' ? 'What went well?' : null}
          {itemType === 'improvement' ? 'What could we improve?' : null}
          {itemType === 'action' ? 'What should we start doing?' : null}
        </Dialog.Description>
        <Formik
          validationSchema={toFormikValidationSchema(RetroItemCreateInputSchema)}
          initialValues={{
            type: itemType ? itemType : '',
            content: '',
            retrospectiveId: retrospective.id,
            votes: 0,
            voters: [],
            userId: userId,
          }}
          onSubmit={(values: RetroItemCreateInput) => {
            handleAddRetroItem(values)
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
                className='h-full min-h-min w-full rounded-md border-2 border-base-dark bg-neutral-200 p-2 dark:border-base-light dark:bg-neutral-700'
              />
            </fieldset>

            <div className='flex w-full flex-row justify-end'>
              <button
                type='submit'
                aria-label='Save'
                className='btn m-2 mt-10 p-1 font-bold italic'
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
