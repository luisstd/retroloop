'use client'

import { IconDeviceLaptop, IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/app/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@/app/ui/dropdown-menu'

export function ThemeDropdown() {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon' aria-label='Select theme'>
            {resolvedTheme === 'light' && theme === 'light' ? (
              <IconSun size={24} className='text-blue-400' />
            ) : resolvedTheme === 'light' ? (
              <IconSun size={24} />
            ) : resolvedTheme === 'dark' && theme === 'dark' ? (
              <IconMoon size={24} className='text-blue-300' />
            ) : resolvedTheme === 'dark' ? (
              <IconMoon size={24} />
            ) : (
              <IconDeviceLaptop size={24} />
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
          <DropdownMenuContent aria-label='Dark/Light/System Mode Selection'>
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => setTheme('light')}
              className={`flex items-center gap-1 ${
                theme === 'light' ? 'font-bold' : 'font-normal'
              }`}
            >
              <IconSun size={22} />
              <span>Light</span>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => setTheme('dark')}
              className={`flex items-center gap-1 ${
                theme === 'dark' ? 'font-bold' : 'font-normal'
              }`}
            >
              <IconMoon size={22} />
              <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme('system')}
              className={`flex items-center gap-1 ${
                theme === 'system' ? 'font-bold' : 'font-normal'
              }`}
            >
              <IconDeviceLaptop size={22} />
              <span>System</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </>
  )
}
