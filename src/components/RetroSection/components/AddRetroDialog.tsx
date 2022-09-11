import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconCross, IconPlus } from '@tabler/icons'

export default function AddRetroDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className='flex flex-row items-center border-2 border-black rounded-md w-fit dark:border-neutral-200'>
          <h2 className='p-3 text-2xl italic font-bold'>Add Retro</h2>

          <button className='flex flex-col items-center p-3 '>
            <IconPlus
              size={36}
              className='p-1 transition ease-in-out border-2 border-black rounded-md dark:border-neutral-200 justify-self-center hover:scale-105 hover:cursor-pointer'
            />
          </button>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed w-11' />
        <Dialog.Content>
          <Dialog.Title>Test</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you are done.
          </Dialog.Description>
          <fieldset>
            <label htmlFor='name'>Name</label>
            <input id='name' defaultValue='Pedro Duarte' />
          </fieldset>
          <fieldset>
            <label htmlFor='username'>Username</label>
            <input id='username' defaultValue='@peduarte' />
          </fieldset>
          <Dialog.Close asChild>
            <button aria-label='Close'>
              <IconCross />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
