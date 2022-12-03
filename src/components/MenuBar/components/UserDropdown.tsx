import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { IconUserCircle } from '@tabler/icons'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

function UserDropdown() {
  const { data: session } = useSession()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconUserCircle size={30} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Label />
          <DropdownMenu.Item className='flex flex-col items-center w-full p-3 bg-white border-2 border-black rounded-md dark:bg-black dark:text-neutral-200 dark:border-neutral-200 '>
            <span>
              Logged in as <br />
              <strong>{session?.user?.name}</strong>
            </span>

            <button
              className='w-full p-1 m-2 italic font-bold border-2 border-black rounded-md dark:border-neutral-200'
              onClick={() => signOut()}
            >
              Logout
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default UserDropdown
