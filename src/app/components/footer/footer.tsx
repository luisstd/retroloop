'use client'

import { getYear } from 'date-fns'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/app/ui/navigation-menu/navigation-menu'
import { cn } from '@/utils/cn'

export function Footer() {
  const currentYear = getYear(new Date())

  return (
    <footer className='flex flex-col items-center'>
      <NavigationMenu className='p-5'>
        <NavigationMenuList className='flex items-center gap-2'>
          <NavigationMenuItem>
            <Link href='/privacy' legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
              >
                Privacy Policy
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/terms' legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
              >
                Terms of Use
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className='justify-self-start pb-10 text-sm'>
        &copy; {currentYear} Noisia Labs OÜ
      </p>
    </footer>
  )
}
