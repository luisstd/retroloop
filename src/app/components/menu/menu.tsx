'use client'

import { IconInfinity } from '@tabler/icons-react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'

import { LoginButton } from '@/app/components/menu/components/login-button/login-button'
import { NavigationDropdown } from '@/app/components/menu/components/nav-dropdown/nav-dropdown'
import { ThemeDropdown } from '@/app/components/menu/components/theme-dropdown/theme-dropdown'
import { UserDropdown } from '@/app/components/menu/components/user-dropdown/user-dropdown'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/app/ui/navigation-menu/navigation-menu'
import { cn } from '@/utils/cn'

export function Menu() {
  const { data: session, status } = useSession()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <div className='min-w-full'>
      <NavigationMenu className='m-5 flex max-w-none items-center gap-2 rounded-full border-2 bg-background p-1 text-xl shadow-sm md:mx-auto md:max-w-max'>
        <NavigationMenuList>
          <NavigationMenuItem className='items-top flex cursor-pointer text-center text-2xl font-bold italic sm:text-3xl'>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'cursor-pointer rounded-l-3xl rounded-r-md'
                )}
                aria-label='Landingpage'
              >
                <IconInfinity className='self-center' size={28} />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className='hidden sm:flex'>
          <NavigationMenuItem>
            <Link href='/dashboard' legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
                onClick={!isSignedUp ? () => signIn() : undefined}
                aria-label='Dashboard'
              >
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem aria-label=''>
            <Link href='/profile' legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
                onClick={!isSignedUp ? () => signIn() : undefined}
                aria-label='Profile'
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
    </div>
  )
}
