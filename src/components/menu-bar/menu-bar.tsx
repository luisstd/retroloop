import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { IconDotsCircleHorizontal, IconInfinity, IconSquare } from '@tabler/icons-react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'

import { LoginButton } from '@/components/menu-bar/components/login-button/login-button'
import { NavigationDropdown } from '@/components/menu-bar/components/nav-dropdown/nav-dropdown'
import { ThemeDropdown } from '@/components/menu-bar/components/theme-dropdown/theme-dropdown'
import { UserDropdown } from '@/components/menu-bar/components/user-dropdown/user-dropdown'

export function MenuBar() {
  const { data: session, status } = useSession()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <div className='flex items-center w-screen max-w-screen-2xl'>
      <NavigationMenu.Root className='relative flex items-center justify-between w-full p-2 m-5 text-xl border-2 rounded-md shadow-md border-base-dark dark:border-base-light max-w-screen-2xl bg-base-light dark:bg-base-dark'>
        <NavigationMenu.List className='flex items-center gap-2'>
          <Link href='/' legacyBehavior>
            <NavigationMenu.Item className='flex items-center text-2xl italic text-center sm:text-3xl'>
              <IconInfinity className='sm:hidden' size={28} />
              <IconInfinity className='hidden sm:block' size={40} />
              <NavigationMenu.Link className='px-1 font-semibold transition ease-in-out rounded-md cursor-pointer hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'>
                retroloop
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </Link>
        </NavigationMenu.List>

        <NavigationMenu.List className='hidden gap-6 sm:flex'>
          <Link href='/dashboard' legacyBehavior>
            {isSignedUp ? (
              <NavigationMenu.Item className='flex items-center gap-1 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'>
                <IconSquare size={24} />
                <NavigationMenu.Link>Dashboard</NavigationMenu.Link>
              </NavigationMenu.Item>
            ) : (
              <NavigationMenu.Item
                onClick={() => signIn()}
                className='flex items-center gap-1 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'
              >
                <IconSquare size={24} />
                <NavigationMenu.Link>Dashboard</NavigationMenu.Link>
              </NavigationMenu.Item>
            )}
          </Link>

          <Link href='/settings' legacyBehavior>
            {isSignedUp ? (
              <NavigationMenu.Item className='flex items-center gap-1 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'>
                <IconDotsCircleHorizontal size={24} />
                <NavigationMenu.Link>Settings</NavigationMenu.Link>
              </NavigationMenu.Item>
            ) : (
              <NavigationMenu.Item
                onClick={() => signIn()}
                className='flex items-center gap-1 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'
              >
                <IconDotsCircleHorizontal size={24} />
                <NavigationMenu.Link>Settings</NavigationMenu.Link>
              </NavigationMenu.Item>
            )}
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
