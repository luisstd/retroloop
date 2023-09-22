'use client'

import { IconDotsCircleHorizontal, IconInfinity, IconLayoutGrid } from '@tabler/icons-react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'

import { LoginButton } from '@/components/menu-bar/components/login-button/login-button'
import { NavigationDropdown } from '@/components/menu-bar/components/nav-dropdown/nav-dropdown'
import { ThemeDropdown } from '@/components/menu-bar/components/theme-dropdown/theme-dropdown'
import { UserDropdown } from '@/components/menu-bar/components/user-dropdown/user-dropdown'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/ui/navigation-menu/navigation-menu'
import { cn } from '@/utils/cn'

export function MenuBar() {
  const { data: session, status } = useSession()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <div className='flex w-screen max-w-screen-2xl items-center'>
      <NavigationMenu className='border-base-dark bg-base-light dark:border-base-light dark:bg-base-dark relative m-5 flex w-full max-w-screen-2xl items-center justify-between rounded-md border-2 p-2 text-xl shadow-md'>
        <NavigationMenuList className='flex items-center gap-2'>
          <NavigationMenuItem className='items-top flex cursor-pointer text-center text-2xl font-bold italic sm:text-3xl '>
            <Link href='/' legacyBehavior>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'items-top flex cursor-pointer text-center text-2xl font-bold italic sm:text-3xl'
                )}
              >
                <IconInfinity className='self-center sm:hidden' size={28} />
                <IconInfinity className='hidden sm:block' size={40} />
                retroloop
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className='hidden gap-6 sm:flex'>
          <NavigationMenuItem>
            <Link href='/dashboard' legacyBehavior>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), 'flex cursor-pointer gap-2 text-lg')}
                onClick={!isSignedUp ? () => signIn() : undefined}
              >
                <IconLayoutGrid size={20} />
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href='/settings' legacyBehavior>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), 'flex cursor-pointer gap-2 text-lg')}
                onClick={!isSignedUp ? () => signIn() : undefined}
              >
                <IconDotsCircleHorizontal size={20} />
                Settings
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
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
