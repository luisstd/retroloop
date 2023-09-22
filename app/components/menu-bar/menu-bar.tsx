'use client'

import { IconDotsCircleHorizontal, IconInfinity, IconLayoutGrid } from '@tabler/icons-react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'

import { LoginButton } from '@/components/menu-bar/components/login-button/login-button'
import { NavigationDropdown } from '@/components/menu-bar/components/nav-dropdown/nav-dropdown'
import { ThemeDropdown } from '@/components/menu-bar/components/theme-dropdown/theme-dropdown'
import { UserDropdown } from '@/components/menu-bar/components/user-dropdown/user-dropdown'
import { Button } from '@/ui/button/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from '@/ui/navigation-menu/navigation-menu'

export function MenuBar() {
  const { data: session, status } = useSession()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <div className='flex w-screen max-w-screen-2xl items-center'>
      <NavigationMenu className='border-base-dark bg-base-light dark:border-base-light dark:bg-base-dark relative m-5 flex w-full max-w-screen-2xl items-center justify-between rounded-md border-2 p-2 text-xl shadow-md'>
        <NavigationMenuList className='flex items-center gap-2'>
          <Link href='/'>
            <NavigationMenuLink>
              <NavigationMenuItem className='items-top flex cursor-pointer text-center text-2xl font-bold italic sm:text-3xl'>
                <IconInfinity className='self-center sm:hidden' size={28} />
                <IconInfinity className='hidden sm:block' size={40} />
                retroloop
              </NavigationMenuItem>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuList>

        <NavigationMenuList className='hidden gap-6 sm:flex'>
          <Link href='/dashboard'>
            <NavigationMenuLink>
              <NavigationMenuItem>
                <Button
                  className='flex gap-2 text-lg'
                  variant='ghost'
                  onClick={!isSignedUp ? () => signIn() : undefined}
                >
                  <IconLayoutGrid size={20} />
                  Dashboard
                </Button>
              </NavigationMenuItem>
            </NavigationMenuLink>
          </Link>

          <Link href='/settings'>
            <NavigationMenuLink>
              <NavigationMenuItem className='hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark flex cursor-pointer items-center gap-1 rounded-md p-2 transition ease-in-out'>
                <Button
                  className='flex gap-2 text-lg'
                  variant='ghost'
                  onClick={!isSignedUp ? () => signIn() : undefined}
                >
                  <IconDotsCircleHorizontal size={20} />
                  Settings
                </Button>
              </NavigationMenuItem>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuList>

        <div className='flex items-center gap-2'>
          <NavigationMenuList className='flex gap-2 sm:hidden'>
            <NavigationDropdown />
          </NavigationMenuList>
          <ThemeDropdown />
          {session?.user ? <UserDropdown /> : <LoginButton />}
        </div>

        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  )
}
