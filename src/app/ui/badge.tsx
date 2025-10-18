import { cva, VariantProps } from 'class-variance-authority'
import React, { HTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

const badgeVariants = cva('font-semibold rounded', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground border-2',
      secondary: 'bg-secondary text-secondary-foreground border-2',
      outline: 'bg-background border-2 text-foreground',
      solid: 'bg-foreground text-background border-2',
      surface: 'bg-primary text-primary-foreground border-2',
    },
    size: {
      sm: 'px-1.5 py-0.5 text-xs',
      md: 'px-2 py-1 text-sm',
      lg: 'px-2.5 py-1.5 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

interface ButtonProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  children,
  size = 'md',
  variant = 'default',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  )
}
