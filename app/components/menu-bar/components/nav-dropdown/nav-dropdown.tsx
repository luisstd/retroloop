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
          <DropdownMenu.Content className='w-full gap-1 pt-1 m-2 border-2 rounded-md border-base-dark bg-base-light dark:bg-base-dark dark:text-base-light dark:border-base-light'>
            <DropdownMenu.Label />
            <DropdownMenu.Item />
            <Link href='/dashboard'>
              <NavigationMenu.Item
                className={`flex items-center w-full gap-1 px-1 py-1 mx-0 hover:bg-neutral-100 dark:hover:text-base-dark
              ${currentPage === '/dashboard' ? 'font-bold' : 'font-normal'}`}
              >
                <IconSquare size={26} />
                <NavigationMenu.Link>Dashboard</NavigationMenu.Link>
              </NavigationMenu.Item>
            </Link>

            <Link href='/settings'>
              <NavigationMenu.Item
                className={`flex items-center w-full gap-1 px-1 py-1 mx-0 hover:bg-neutral-100 dark:hover:text-base-dark
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
