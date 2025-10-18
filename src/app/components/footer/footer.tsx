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
            <Link href='/privacy'>
              <Button variant='link' className='cursor-pointer'>
                Privacy
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/imprint'>
              <Button variant='link' className='cursor-pointer'>
                Imprint
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/terms'>
              <Button variant='link' className='cursor-pointer'>
                Terms
              </Button>
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
