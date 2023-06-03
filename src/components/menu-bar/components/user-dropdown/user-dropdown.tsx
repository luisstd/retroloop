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
          <DropdownMenu.Item className='flex flex-col items-center w-full p-3 border-2 rounded-md border-base-dark bg-base-light dark:bg-base-dark dark:border-base-light '>
            <span>
              Logged in as <br />
              <strong>{session?.user?.name}</strong>
            </span>

            <button className='px-2 py-1 m-2 italic font-bold btn' onClick={() => signOut()}>
              Logout
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
