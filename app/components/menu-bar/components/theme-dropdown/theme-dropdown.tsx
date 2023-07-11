'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { IconDeviceLaptop, IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

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
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {resolvedTheme === 'light' && theme === 'light' ? (
            <IconSun size={30} className='text-blue-400' />
          ) : resolvedTheme === 'light' ? (
            <IconSun size={30} />
          ) : resolvedTheme === 'dark' && theme === 'dark' ? (
            <IconMoon size={30} className='text-blue-300' />
          ) : resolvedTheme === 'dark' ? (
            <IconMoon size={30} />
          ) : (
            <IconDeviceLaptop size={30} />
          )}
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Label />
            <DropdownMenu.Item />

            <ToggleGroup.Root
              type='single'
              orientation='vertical'
              value={theme}
              aria-label='Dark/Light/System Mode Selection'
              className='m-2 flex w-full flex-col items-start gap-1 rounded-md border-2 border-base-dark bg-base-light pt-1 dark:border-base-light dark:bg-base-dark'
            >
              <ToggleGroup.Item
                value='light'
                onClick={() => setTheme('light')}
                className={`mx-0 flex w-full items-center gap-1 px-1 py-1 hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark ${
                  theme === 'light' ? 'font-bold' : 'font-normal'
                }`}
              >
                <IconSun size={30} />
                <span>Light</span>
              </ToggleGroup.Item>

              <ToggleGroup.Item
                value='dark'
                onClick={() => setTheme('dark')}
                className={`mx-0 flex w-full items-center gap-1 px-1 py-1 hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark ${
                  theme === 'dark' ? 'font-bold' : 'font-normal'
                }`}
              >
                <IconMoon size={30} />
                <span>Dark</span>
              </ToggleGroup.Item>

              <ToggleGroup.Item
                value='system'
                onClick={() => setTheme('system')}
                className={`mx-0 flex w-full items-center gap-1 px-1 py-1 hover:bg-hover-light hover:text-base-dark dark:hover:bg-hover-dark ${
                  theme === 'system' ? 'font-bold' : 'font-normal'
                }`}
              >
                <IconDeviceLaptop size={30} />
                <span>System</span>
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  )
}
