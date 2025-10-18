'use client'

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
      <NavigationMenu className='bg-background m-5 flex max-w-none items-center gap-3 rounded-full border-2 p-3 shadow-xs sm:gap-6 md:mx-auto md:w-fit'>
        <NavigationMenuList className='w-full justify-between gap-3 sm:w-auto sm:justify-center sm:gap-6'>
          <NavigationMenuItem className='flex items-center text-center font-bold'>
            <Button
              variant='link'
              className='flex items-center gap-2'
              aria-label='Landingpage'
              asChild
            >
              <Link href='/'>
                <span className='text-xl font-bold'>Retroloop</span>
              </Link>
            </Button>
          </NavigationMenuItem>

          <NavigationMenuItem className='hidden sm:flex'>
            {isLandingPage ? (
              <Button variant='link' aria-label='Features' className='w-28 justify-center' asChild>
                <Link href='#features'>Features</Link>
              </Button>
            ) : (
              <Button variant='link' aria-label='Dashboard' className='w-28 justify-center' asChild>
                <Link href='/dashboard'>Dashboard</Link>
              </Button>
            )}
          </NavigationMenuItem>

          <NavigationMenuItem className='hidden sm:flex'>
            {isLandingPage ? (
              <Button variant='link' aria-label='Pricing' className='w-24 justify-center' asChild>
                <Link href='#pricing'>Pricing</Link>
              </Button>
            ) : (
              <Button variant='link' aria-label='Profile' className='w-24 justify-center' asChild>
                <Link href='/profile'>Profile</Link>
              </Button>
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
