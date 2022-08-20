import React from 'react'

import {
  IconSun,
  IconUserCircle,
  IconInfinity,
  IconSquare,
  IconDotsCircleHorizontal,
} from '@tabler/icons'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export default function MenuBar() {
  return (
    <NavigationMenu.Root className='flex items-center justify-between p-2 m-2 text-xl border-2 border-black rounded-md'>
      <NavigationMenu.List className='flex items-center gap-2'>
        <NavigationMenu.Item>
          <IconInfinity size={40} />
        </NavigationMenu.Item>
        <NavigationMenu.Item className='text-3xl italic text-center'>
          <NavigationMenu.Link href='/'>retroloop</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.List className='flex gap-6'>
        <NavigationMenu.Item className='flex items-center gap-1 p-2 transition ease-in-out rounded-md hover:bg-slate-50'>
          <IconSquare size={24} />
          <NavigationMenu.Link href='/dashboard'>Dashboard</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='flex items-center gap-1 p-2 transition ease-in-out rounded-md hover:bg-slate-50'>
          <IconDotsCircleHorizontal size={24} />
          <NavigationMenu.Link>Settings</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
      <NavigationMenu.List className='flex items-center gap-4'>
        <NavigationMenu.Item>
          <IconSun size={30} />
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <IconUserCircle size={30} />
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
