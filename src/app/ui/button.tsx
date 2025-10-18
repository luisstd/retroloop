import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import React, { ButtonHTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

export const buttonVariants = cva(
  'font-head transition-all rounded outline-hidden duration-200 font-medium flex items-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'shadow-md hover:shadow active:shadow-none bg-primary text-primary-foreground border-2 border-black transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-primary-hover focus-visible:translate-y-1 focus-visible:shadow',
        secondary:
          'shadow-md hover:shadow active:shadow-none bg-secondary shadow-primary text-secondary-foreground border-2 border-black transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-secondary-hover focus-visible:translate-y-1 focus-visible:shadow',
        outline:
          'shadow-md hover:shadow active:shadow-none bg-transparent border-2 transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 focus-visible:translate-y-1 focus-visible:shadow',
        link: 'bg-transparent hover:underline cursor-pointer',
      },
      size: {
        sm: 'px-3 py-1 text-sm shadow hover:shadow-none',
        md: 'px-4 py-1.5 text-base',
        lg: 'px-6 lg:px-8 py-2 lg:py-3 text-md lg:text-lg',
        icon: 'p-2',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  },
)

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      size = 'md',
      className = '',
      variant = 'default',
      asChild = false,
      ...props
    }: IButtonProps,
    forwardedRef,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={forwardedRef}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'
