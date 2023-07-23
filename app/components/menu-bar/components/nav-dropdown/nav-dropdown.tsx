'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { IconDotsCircleHorizontal, IconMenu, IconSquare } from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function NavigationDropdown() {
  const router = useRouter()
  const currentPage = router.pathname

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconMenu size={30} />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className='m-2 w-full gap-1 rounded-md border-2 border-base-dark bg-base-light pt-1 dark:border-base-light dark:bg-base-dark dark:text-base-light'>
            <DropdownMenu.Label />
            <DropdownMenu.Item />
            <Link href='/dashboard'>
              <NavigationMenu.Item
                className={`mx-0 flex w-full items-center gap-1 px-1 py-1 hover:bg-neutral-100 dark:hover:text-base-dark
              ${currentPage === '/dashboard' ? 'font-bold' : 'font-normal'}`}
              >
                <IconSquare size={26} />
                <NavigationMenu.Link>Dashboard</NavigationMenu.Link>
              </NavigationMenu.Item>
            </Link>

            <Link href='/settings'>
              <NavigationMenu.Item
                className={`mx-0 flex w-full items-center gap-1 px-1 py-1 hover:bg-neutral-100 dark:hover:text-base-dark
              ${currentPage === '/settings' ? 'font-bold' : 'font-normal'}`}
              >
                <IconDotsCircleHorizontal size={26} />
                <NavigationMenu.Link>Settings</NavigationMenu.Link>
              </NavigationMenu.Item>
            </Link>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  )
}
