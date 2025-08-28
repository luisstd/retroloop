'use client'

import { IconMenu2 } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/app/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@/app/ui/dropdown-menu'
import { NavigationMenuLink } from '@/app/ui/navigation-menu'

export function NavigationDropdown() {
  const currentPage = usePathname()
  const isLandingPage = currentPage === '/'

  if (isLandingPage) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='sm:hidden'>
        <Button variant='ghost' size='icon' aria-label='Navigation dropdown'>
          <IconMenu2 size={24} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem
            className={`flex ${currentPage === '/dashboard' ? 'font-bold' : 'font-normal'}`}
          >
            <Link href='/dashboard' legacyBehavior passHref>
              <NavigationMenuLink aria-label='Dashboard'>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={`flex ${currentPage === '/profile' ? 'font-bold' : 'font-normal'}`}
          >
            <Link href='/profile' legacyBehavior passHref>
              <NavigationMenuLink aria-label='Profile'>
                Profile
              </NavigationMenuLink>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}
