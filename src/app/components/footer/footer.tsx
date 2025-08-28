'use client'

import { getYear } from 'date-fns'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/app/ui/navigation-menu'
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
                Privacy
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/imprint' legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
              >
                Imprint
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/terms' legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
              >
                Terms
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <a
        className='justify-self-start pb-10 text-sm hover:underline'
        href='https://noisia.co'
        target='_blank'
      >
        &copy; {currentYear} Noisia Labs OÜ
      </a>
    </footer>
  )
}
