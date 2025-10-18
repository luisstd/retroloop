'use client'

import { getYear } from 'date-fns'
import Link from 'next/link'

import { Button } from '@/app/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/app/ui/navigation-menu'

export function Footer() {
  const currentYear = getYear(new Date())

  return (
    <footer className='flex flex-col items-center'>
      <NavigationMenu className='p-5'>
        <NavigationMenuList className='flex items-center gap-2'>
          <NavigationMenuItem>
            <Button variant='link' asChild>
              <Link href='/privacy'>Privacy</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant='link' asChild>
              <Link href='/imprint'>Imprint</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant='link' asChild>
              <Link href='/terms'>Terms</Link>
            </Button>
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
