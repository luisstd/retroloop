'use client'

import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/ui/navigation-menu/navigation-menu'
import { cn } from '@/utils/cn'

export function Footer() {
  return (
    <>
      <footer className='max-w-screen-2x m-5 rounded-md p-3 dark:border-neutral-200'>
        <NavigationMenu className='grid place-items-center'>
          <NavigationMenuList className='flex items-center gap-2'>
            <NavigationMenuItem className='text-center'>
              <Link href='/privacy' legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}>
                  Privacy Policy
                </NavigationMenuLink>
              </Link>

              <Link href='/terms' legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}>
                  Terms of Use
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </footer>
    </>
  )
}
