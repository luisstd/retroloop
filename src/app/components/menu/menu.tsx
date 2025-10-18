'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { LoginButton } from '@/app/components/menu/components/login-button/login-button'
import { NavigationDropdown } from '@/app/components/menu/components/nav-dropdown/nav-dropdown'
import { ThemeDropdown } from '@/app/components/menu/components/theme-dropdown/theme-dropdown'
import { UserDropdown } from '@/app/components/menu/components/user-dropdown/user-dropdown'
import { Button } from '@/app/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/app/ui/navigation-menu'

export function Menu() {
  const { data: session } = useSession()
  const path = usePathname()

  const isLandingPage = path === '/'

  return (
    <div className='min-w-full'>
      <NavigationMenu className='bg-background m-5 flex max-w-none items-center gap-3 rounded-full border-2 p-3 shadow-xs sm:gap-6 md:mx-auto md:max-w-max'>
        <NavigationMenuList className='w-full justify-between gap-3 sm:w-auto sm:justify-center sm:gap-6'>
          <NavigationMenuItem className='flex cursor-pointer items-center text-center font-bold'>
            <Link href='/'>
              <Button
                variant='link'
                className='flex cursor-pointer items-center gap-2'
                aria-label='Landingpage'
              >
                <Image
                  src='/logo-transparent.png'
                  alt='Retroloop logo'
                  width={48}
                  height={48}
                />
                {isLandingPage && (
                  <span className='hidden text-xl sm:block'>Retroloop</span>
                )}
              </Button>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className='hidden sm:flex'>
            {isLandingPage ? (
              <Link href='#features'>
                <Button
                  variant='link'
                  className='cursor-pointer'
                  aria-label='Features'
                >
                  Features
                </Button>
              </Link>
            ) : (
              <Link href='/dashboard'>
                <Button
                  variant='link'
                  className='cursor-pointer'
                  aria-label='Dashboard'
                >
                  Dashboard
                </Button>
              </Link>
            )}
          </NavigationMenuItem>

          <NavigationMenuItem className='hidden sm:flex'>
            {isLandingPage ? (
              <Link href='#pricing'>
                <Button
                  variant='link'
                  className='cursor-pointer'
                  aria-label='Pricing'
                >
                  Pricing
                </Button>
              </Link>
            ) : (
              <Link href='/profile'>
                <Button
                  variant='link'
                  className='cursor-pointer'
                  aria-label='Profile'
                >
                  Profile
                </Button>
              </Link>
            )}
          </NavigationMenuItem>

          <div className='flex items-center gap-2 sm:gap-6'>
            <NavigationMenuItem>
              <NavigationDropdown />
            </NavigationMenuItem>

            <div className='flex items-center gap-2 pr-2'>
              <NavigationMenuItem>
                <ThemeDropdown />
              </NavigationMenuItem>

              <NavigationMenuItem>
                {session?.user ? <UserDropdown /> : <LoginButton />}
              </NavigationMenuItem>
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
