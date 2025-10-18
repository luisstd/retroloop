'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import React, { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils/cn'

const Menu = DropdownMenu.Root
const Trigger = DropdownMenu.Trigger

interface IMenuContent
  extends ComponentPropsWithoutRef<typeof DropdownMenu.Content> {}

const Content = ({ className, ...props }: IMenuContent) => (
  <DropdownMenu.Portal>
    <DropdownMenu.Content
      side='bottom'
      align='start'
      className={cn(
        'bg-background text-foreground z-50 min-w-20 rounded-md border-2 shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        className,
      )}
      {...props}
    />
  </DropdownMenu.Portal>
)

const MenuItem = React.forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof DropdownMenu.Item>
>(({ className, ...props }, ref) => (
  <DropdownMenu.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors select-none',
      'hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
      'data-disabled:pointer-events-none data-disabled:opacity-50',
      className,
    )}
    {...props}
  />
))
MenuItem.displayName = 'MenuItem'

const MenuComponent = Object.assign(Menu, {
  Trigger,
  Content,
  Item: MenuItem,
})

export { MenuComponent as Menu }
