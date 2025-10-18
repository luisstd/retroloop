'use client'

import { IconDeviceLaptop, IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/app/ui/button'
import { Menu } from '@/app/ui/dropdown-menu'

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
    <Menu>
      <Menu.Trigger asChild>
        <Button size='icon' variant='outline' aria-label='Select theme'>
          {resolvedTheme === 'light' && theme === 'light' ? (
            <IconSun size={24} className='text-primary' />
          ) : resolvedTheme === 'light' ? (
            <IconSun size={24} />
          ) : resolvedTheme === 'dark' && theme === 'dark' ? (
            <IconMoon size={24} className='text-primary' />
          ) : resolvedTheme === 'dark' ? (
            <IconMoon size={24} />
          ) : (
            <IconDeviceLaptop size={24} />
          )}
        </Button>
      </Menu.Trigger>

      <Menu.Content aria-label='Dark/Light/System Mode Selection'>
        <div className='px-2 py-1.5 text-sm font-semibold'>Theme</div>
        <Menu.Item
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1 ${
            theme === 'light' ? 'font-bold' : 'font-normal'
          }`}
        >
          <IconSun size={22} />
          <span>Light</span>
        </Menu.Item>

        <Menu.Item
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1 ${
            theme === 'dark' ? 'font-bold' : 'font-normal'
          }`}
        >
          <IconMoon size={22} />
          <span>Dark</span>
        </Menu.Item>
        <Menu.Item
          onClick={() => setTheme('system')}
          className={`flex items-center gap-1 ${
            theme === 'system' ? 'font-bold' : 'font-normal'
          }`}
        >
          <IconDeviceLaptop size={22} />
          <span>System</span>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
