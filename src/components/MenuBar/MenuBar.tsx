import { useSession } from 'next-auth/react'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { IconInfinity, IconSquare, IconDotsCircleHorizontal } from '@tabler/icons'

import ThemeDropdown from '@/components/MenuBar/components/ThemeDropdown'
import UserDropdown from '@/components/MenuBar/components/UserDropdown'
import LoginButton from '@/components/MenuBar/components/LoginButton'

export default function MenuBar() {
  const { data: session } = useSession()
  return (
    <div className='flex items-center w-screen max-w-screen-2xl'>
      <NavigationMenu.Root className='flex items-center justify-between w-full p-2 m-5 text-xl border-2 border-black rounded-md dark:border-neutral-200 max-w-screen-2xl'>
        <NavigationMenu.List className='flex items-center gap-2'>
          <NavigationMenu.Item>
            <IconInfinity size={40} />
          </NavigationMenu.Item>
          <NavigationMenu.Item className='text-3xl italic text-center'>
            <NavigationMenu.Link href='/'>retroloop</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <NavigationMenu.List className='flex gap-6'>
          <NavigationMenu.Item className='flex items-center gap-1 p-2 transition ease-in-out rounded-md hover:bg-neutral-100 dark:hover:text-black'>
            <IconSquare size={24} />
            <NavigationMenu.Link href='/dashboard'>Dashboard</NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item className='flex items-center gap-1 p-2 transition ease-in-out rounded-md hover:bg-neutral-100 dark:hover:text-black'>
            <IconDotsCircleHorizontal size={24} />
            <NavigationMenu.Link href='/settings'>Settings</NavigationMenu.Link>
          </NavigationMenu.Item>
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
