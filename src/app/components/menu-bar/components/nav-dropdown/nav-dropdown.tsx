'use client'

import { IconMenu } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/app/ui/button/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@/app/ui/dropdown-menu/dropdown-menu'
import { NavigationMenuLink } from '@/app/ui/navigation-menu/navigation-menu'

export function NavigationDropdown() {
  const currentPage = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='sm:hidden'>
        <Button variant='ghost' size='icon'>
          <IconMenu size={24} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem
            className={`flex ${currentPage === '/dashboard' ? 'font-bold' : 'font-normal'}`}
          >
            <Link href='/dashboard' legacyBehavior passHref>
              <NavigationMenuLink>Dashboard</NavigationMenuLink>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={`flex ${currentPage === '/profile' ? 'font-bold' : 'font-normal'}`}
          >
            <Link href='/profile' legacyBehavior passHref>
              <NavigationMenuLink>Settings</NavigationMenuLink>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}
