import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { IconDotsCircleHorizontal, IconInfinity, IconSquare } from '@tabler/icons'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import LoginButton from '@/components/MenuBar/components/LoginButton'
import ThemeDropdown from '@/components/MenuBar/components/ThemeDropdown'
import UserDropdown from '@/components/MenuBar/components/UserDropdown'

export default function MenuBar() {
  const { data: session } = useSession()
  return (
    <div className='flex items-center w-screen max-w-screen-2xl'>
      <NavigationMenu.Root className='flex items-center justify-between w-full p-2 m-5 text-xl border-2 border-black rounded-md dark:border-neutral-200 max-w-screen-2xl'>
        <NavigationMenu.List className='flex items-center gap-2'>
          <Link href='/'>
            <NavigationMenu.Item className='flex text-3xl italic text-center'>
              <IconInfinity size={40} />
              <NavigationMenu.Link className='px-2 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'>
                retroloop
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </Link>
        </NavigationMenu.List>

        <NavigationMenu.List className='flex gap-6'>
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

        <div className='flex gap-4'>
          <ThemeDropdown />
          {session?.user ? <UserDropdown /> : <LoginButton />}
        </div>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </div>
  )
}
