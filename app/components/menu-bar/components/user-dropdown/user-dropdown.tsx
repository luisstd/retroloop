'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { IconUserCircle } from '@tabler/icons-react'
import { signOut, useSession } from 'next-auth/react'

export function UserDropdown() {
  const { data: session } = useSession()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconUserCircle size={30} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Label />
          <DropdownMenu.Item className='flex w-full flex-col items-center rounded-md border-2 border-base-dark bg-base-light p-3 dark:border-base-light dark:bg-base-dark '>
            <span>
              Logged in as <br />
              <strong>{session?.user?.name}</strong>
            </span>

            <button className='btn m-2 px-2 py-1 font-bold italic' onClick={() => signOut()}>
              Logout
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
