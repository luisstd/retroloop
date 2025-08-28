'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

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
} from '@/app/ui/navigation-menu'
import { cn } from '@/utils/cn'

export function Menu() {
  const { data: session } = useSession()
  const path = usePathname()

  const isLandingPage = path === '/'

  return (
    <div className='min-w-full'>
      <NavigationMenu className='bg-background m-5 flex max-w-none items-center gap-2 rounded-full border-2 p-1 text-xl shadow-xs sm:gap-10 md:mx-auto md:max-w-max'>
        <NavigationMenuList>
          <NavigationMenuItem className='items-top flex cursor-pointer text-center text-2xl font-bold italic sm:text-3xl'>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'flex cursor-pointer items-center rounded-l-3xl rounded-r-md',
                )}
                aria-label='Landingpage'
              >
                <Image
                  className={isLandingPage ? 'hidden sm:block' : 'block'}
                  src='/logo-transparent.png'
                  alt='Retroloop logo'
                  width={isLandingPage ? 45 : 55}
                  height={isLandingPage ? 45 : 55}
                />
                {isLandingPage && (
                  <span className='text-md not-italic sm:text-xl'>
                    Retroloop
                  </span>
                )}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className='hidden sm:flex'>
          <NavigationMenuItem>
            {isLandingPage ? (
              <Link href='#features' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
                  aria-label='Features'
                >
                  Features
                </NavigationMenuLink>
              </Link>
            ) : (
              <Link href='/dashboard' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
                  aria-label='Dashboard'
                >
                  Dashboard
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>

          <NavigationMenuItem aria-label=''>
            {isLandingPage ? (
              <Link href='#pricing' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
                  aria-label='Pricing'
                >
                  Pricing
                </NavigationMenuLink>
              </Link>
            ) : (
              <Link href='/profile' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
                  aria-label='Profile'
                >
                  Profile
                </NavigationMenuLink>
              </Link>
            )}
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
