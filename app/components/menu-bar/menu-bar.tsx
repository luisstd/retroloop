'use client'

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
    <div className='flex w-screen max-w-screen-2xl items-center'>
      <NavigationMenu.Root className='relative m-5 flex w-full max-w-screen-2xl items-center justify-between rounded-md border-2 border-base-dark bg-base-light p-2 text-xl shadow-md dark:border-base-light dark:bg-base-dark'>
        <NavigationMenu.List className='flex items-center gap-2'>
          <Link href='/'>
            <NavigationMenu.Item className='text-center text-2xl italic sm:text-3xl'>
              <div className='items-top flex cursor-pointer rounded-md p-1 pr-2 font-semibold transition ease-in-out hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'>
                <IconInfinity className='self-center sm:hidden' size={28} />
                <IconInfinity className='hidden sm:block' size={40} />
                retroloop
              </div>
            </NavigationMenu.Item>
          </Link>
        </NavigationMenu.List>

        <NavigationMenu.List className='hidden gap-6 sm:flex'>
          <Link href='/dashboard'>
            {isSignedUp ? (
              <NavigationMenu.Item className='flex cursor-pointer items-center gap-1 rounded-md p-2 transition ease-in-out hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'>
                <IconSquare size={24} />
                <div className='text-xl font-medium'>Dashboard</div>
              </NavigationMenu.Item>
            ) : (
              <NavigationMenu.Item
                onClick={() => signIn()}
                className='flex cursor-pointer items-center gap-1 rounded-md p-2 transition ease-in-out hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'
              >
                <IconSquare size={24} />
                <div className='text-xl font-medium'>Dashboard</div>
              </NavigationMenu.Item>
            )}
          </Link>

          <Link href='/settings'>
            {isSignedUp ? (
              <NavigationMenu.Item className='flex cursor-pointer items-center gap-1 rounded-md p-2 transition ease-in-out hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'>
                <IconDotsCircleHorizontal size={24} />
                <div className='text-xl font-medium'>Settings</div>
              </NavigationMenu.Item>
            ) : (
              <NavigationMenu.Item
                onClick={() => signIn()}
                className='flex cursor-pointer items-center gap-1 rounded-md p-2 transition ease-in-out hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'
              >
                <IconDotsCircleHorizontal size={24} />
                <div className='text-xl font-medium'>Settings</div>
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
