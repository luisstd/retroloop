'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from 'src/app/ui/navigation-menu/navigation-menu'

import { cn } from '@/utils/cn'

export function Footer() {
  return (
    <footer>
      <NavigationMenu className='p-5'>
        <NavigationMenuList className='flex items-center gap-2'>
          <NavigationMenuItem>
            <Link href='/privacy' legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}>
                Privacy Policy
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href='/terms' legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}>
                Terms of Use
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </footer>
  )
}
