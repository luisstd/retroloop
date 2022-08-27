import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import {
  IconSun,
  IconUserCircle,
  IconInfinity,
  IconSquare,
  IconDotsCircleHorizontal,
  IconMoon,
  IconDeviceLaptop,
} from '@tabler/icons'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export default function MenuBar() {
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
      <NavigationMenu.Root className='flex items-center justify-between p-2 m-5 text-xl border-2 border-black rounded-md dark:border-neutral-200'>
        <NavigationMenu.List className='flex items-center gap-2'>
          <NavigationMenu.Item>
            <IconInfinity size={40} />
          </NavigationMenu.Item>
          <NavigationMenu.Item className='text-3xl italic text-center'>
            <NavigationMenu.Link href='/'>retroloop</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.List className='flex gap-6'>
          <NavigationMenu.Item className='flex items-center gap-1 p-2 transition ease-in-out rounded-md hover:bg-neutral-100 dark:hover:text-black'>
            <IconSquare size={24} />
            <NavigationMenu.Link href='/dashboard'>Dashboard</NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item className='flex items-center gap-1 p-2 transition ease-in-out rounded-md hover:bg-neutral-100 dark:hover:text-black'>
            <IconDotsCircleHorizontal size={24} />
            <NavigationMenu.Link>Settings</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <div className='flex gap-4'>
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
                  className='flex flex-col items-start w-full gap-1 pt-1 m-2 bg-white border-2 border-black rounded-md dark:bg-black dark:text-neutral-200 dark:border-neutral-200 '
                >
                  <ToggleGroup.Item
                    value='light'
                    onClick={() => setTheme('light')}
                    className={`flex items-center w-full gap-1 px-1 py-1 mx-0 hover:bg-neutral-100 dark:hover:text-black ${
                      theme === 'light' ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    <IconSun size={30} />
                    <span>Light</span>
                  </ToggleGroup.Item>

                  <ToggleGroup.Item
                    value='dark'
                    onClick={() => setTheme('dark')}
                    className={`flex items-center w-full gap-1 px-1 py-1 mx-0 hover:bg-neutral-100 dark:hover:text-black ${
                      theme === 'dark' ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    <IconMoon size={30} />
                    <span>Dark</span>
                  </ToggleGroup.Item>

                  <ToggleGroup.Item
                    value='system'
                    onClick={() => setTheme('system')}
                    className={`flex items-center w-full gap-1 px-1 py-1 mx-0 hover:bg-neutral-100 dark:hover:text-black ${
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
          <IconUserCircle size={30} />
        </div>
        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </>
  )
}
