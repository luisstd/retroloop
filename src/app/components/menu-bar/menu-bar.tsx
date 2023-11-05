'use client'

import { IconInfinity } from '@tabler/icons-react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'

import { LoginButton } from '@/app/components/menu-bar/components/login-button/login-button'
import { NavigationDropdown } from '@/app/components/menu-bar/components/nav-dropdown/nav-dropdown'
import { ThemeDropdown } from '@/app/components/menu-bar/components/theme-dropdown/theme-dropdown'
import { UserDropdown } from '@/app/components/menu-bar/components/user-dropdown/user-dropdown'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/app/ui/navigation-menu/navigation-menu'
import { cn } from '@/utils/cn'

export function MenuBar() {
  const { data: session, status } = useSession()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <NavigationMenu className='m-5 flex items-center gap-2 rounded-full border-2 bg-background p-1 text-xl shadow-sm'>
      <NavigationMenuItem className='items-top flex cursor-pointer text-center text-2xl font-bold italic sm:text-3xl '>
        <Link href='/' legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              'cursor-pointer rounded-l-3xl rounded-r-md'
            )}
          >
            <IconInfinity className='self-center' size={28} />
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuList className='hidden sm:flex'>
        <NavigationMenuItem>
          <Link href='/dashboard' legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
              onClick={!isSignedUp ? () => signIn() : undefined}
            >
              Dashboard
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href='/profile' legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
              onClick={!isSignedUp ? () => signIn() : undefined}
            >
              Profile
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <div>
        <NavigationDropdown />
        <ThemeDropdown />
        {session?.user ? <UserDropdown /> : <LoginButton />}
      </div>

      <NavigationMenuViewport />
    </NavigationMenu>
  )
}
