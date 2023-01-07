import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { IconDotsCircleHorizontal, IconInfinity, IconSquare } from '@tabler/icons'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import LoginButton from '@/components/MenuBar/components/LoginButton'
import NavigationDropdown from '@/components/MenuBar/components/NavigationDropdown'
import ThemeDropdown from '@/components/MenuBar/components/ThemeDropdown'
import UserDropdown from '@/components/MenuBar/components/UserDropdown'

export default function MenuBar() {
  const { data: session } = useSession()
  return (
    <div className='flex items-center w-screen max-w-screen-2xl'>
      <NavigationMenu.Root className='flex items-center justify-between w-full p-2 m-5 text-xl border-2 border-black rounded-md dark:border-neutral-200 max-w-screen-2xl'>
        <NavigationMenu.List className='flex items-center gap-2'>
          <Link href='/'>
            <NavigationMenu.Item className='flex items-center text-2xl italic text-center sm:text-3xl'>
              <IconInfinity className='sm:hidden' size={28} />
              <IconInfinity className='hidden sm:block' size={40} />
              <NavigationMenu.Link className='px-1 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'>
                retroloop
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </Link>
        </NavigationMenu.List>

        <NavigationMenu.List className='hidden gap-6 sm:flex'>
          <Link href='/dashboard'>
            <NavigationMenu.Item className='flex items-center gap-1 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'>
              <IconSquare size={24} />
              <NavigationMenu.Link>Dashboard</NavigationMenu.Link>
            </NavigationMenu.Item>
          </Link>

          <Link href='/settings'>
            <NavigationMenu.Item className='flex items-center gap-1 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'>
              <IconDotsCircleHorizontal size={24} />
              <NavigationMenu.Link>Settings</NavigationMenu.Link>
            </NavigationMenu.Item>
          </Link>
        </NavigationMenu.List>

        <div className='flex items-center gap-2'>
          <NavigationMenu.List className='flex gap-2 sm:hidden'>
            <NavigationDropdown />
          </NavigationMenu.List>
          <ThemeDropdown />
          {session?.user ? <UserDropdown /> : <LoginButton />}
        </div>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </div>
  )
}
