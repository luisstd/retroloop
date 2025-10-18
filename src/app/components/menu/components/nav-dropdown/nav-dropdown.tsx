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

export function NavigationDropdown() {
  const currentPage = usePathname()
  const isLandingPage = currentPage === '/'

  if (isLandingPage) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='sm:hidden'>
        <Button size='icon' variant='outline' aria-label='Navigation dropdown'>
          <IconMenu2 size={24} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem
            className={`flex ${currentPage === '/dashboard' ? 'font-bold' : 'font-normal'}`}
          >
            <Link href='/dashboard'>
              <Button variant='link' aria-label='Dashboard'>
                Dashboard
              </Button>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={`flex ${currentPage === '/profile' ? 'font-bold' : 'font-normal'}`}
          >
            <Link href='/profile'>
              <Button variant='link' aria-label='Profile'>
                Profile
              </Button>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}
