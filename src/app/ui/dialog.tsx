'use client'

import * as ReactDialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { cva, VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import React, { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/utils/cn'

const Dialog = (
  props: React.ComponentPropsWithoutRef<typeof ReactDialog.Root>,
) => <ReactDialog.Root modal={false} {...props} />
const DialogTrigger = ReactDialog.Trigger

const overlayVariants = cva(
  ` fixed bg-black/80 font-head
    data-[state=open]:fade-in-0
    data-[state=open]:animate-in
    data-[state=closed]:animate-out
    data-[state=closed]:fade-out-0
  `,
  {
    variants: {
      variant: {
        default: 'inset-0 z-50 bg-black/85',
        none: 'fixed bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface IDialogBackgroupProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof overlayVariants> {}

const DialogBackdrop = React.forwardRef<HTMLDivElement, IDialogBackgroupProps>(
  function DialogBackdrop(inputProps: IDialogBackgroupProps, forwardedRef) {
    const { variant = 'default', className, ...props } = inputProps

    return (
      <div
        className={cn(overlayVariants({ variant }), className)}
        ref={forwardedRef}
        {...props}
      />
    )
  },
)
DialogBackdrop.displayName = 'DialogBackdrop'

const dialogVariants = cva(
  `fixed left-[50%] top-[50%] z-50 grid rounded overflow-hidden w-[calc(100%-2rem)] sm:w-full mx-auto translate-x-[-50%] translate-y-[-50%] gap-4 border-2 bg-background shadow-lg duration-200
  data-[state=open]:animate-in
  data-[state=open]:fade-in-0
  data-[state=open]:zoom-in-95
  data-[state=closed]:animate-out
  data-[state=closed]:fade-out-0
  data-[state=closed]:zoom-out-95`,
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

interface IDialogContentProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof ReactDialog.Content>,
      'className'
    >,
    VariantProps<typeof dialogVariants> {
  overlay?: IDialogBackgroupProps
  className?: string
}

const DialogContent = React.forwardRef<HTMLDivElement, IDialogContentProps>(
  function DialogContent(inputProps: IDialogContentProps, forwardedRef) {
    const { children, size, className, overlay, ...props } = inputProps

    return (
      <ReactDialog.Portal>
        <DialogBackdrop {...overlay} />
        <ReactDialog.Content
          className={cn(dialogVariants({ size }), className)}
          ref={forwardedRef}
          {...props}
        >
          <VisuallyHidden>
            <ReactDialog.Title />
          </VisuallyHidden>
          <div className='relative flex flex-col gap-4'>{children}</div>
        </ReactDialog.Content>
      </ReactDialog.Portal>
    )
  },
)
DialogContent.displayName = 'DialogContent'

interface IDialogDescriptionProps extends HTMLAttributes<HTMLDivElement> {}
const DialogDescription = ({
  children,
  className,
  ...props
}: IDialogDescriptionProps) => {
  return (
    <ReactDialog.Description className={cn('px-4', className)} {...props}>
      {children}
    </ReactDialog.Description>
  )
}

const dialogFooterVariants = cva(
  'flex items-center justify-end border-t-2 min-h-12 gap-4 px-4 py-2',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
      },
      position: {
        fixed: 'sticky bottom-0',
        static: 'static',
      },
    },
    defaultVariants: {
      position: 'fixed',
    },
  },
)

export interface IDialogFooterProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogFooterVariants> {}

const DialogFooter = ({
  children,
  className,
  position,
  variant,
  ...props
}: IDialogFooterProps) => {
  return (
    <div
      className={cn(dialogFooterVariants({ position, variant }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

const dialogHeaderVariants = cva(
  'flex items-center justify-between border-b-2 px-4 min-h-12',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
      },
      position: {
        fixed: 'sticky top-0',
        static: 'static',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'static',
    },
  },
)

const DialogHeaderDefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <DialogTrigger title='Close pop-up' className='cursor-pointer' asChild>
        <X />
      </DialogTrigger>
    </>
  )
}

interface IDialogHeaderProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogHeaderVariants>,
    ReactDialog.DialogTitleProps {}

const DialogHeader = ({
  children,
  className,
  position,
  variant,
  asChild,
  ...props
}: IDialogHeaderProps) => {
  return (
    <div
      className={cn(dialogHeaderVariants({ position, variant }), className)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <DialogHeaderDefaultLayout>{children}</DialogHeaderDefaultLayout>
      )}
    </div>
  )
}

const DialogComponent = Object.assign(Dialog, {
  Trigger: DialogTrigger,
  Header: DialogHeader,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
})

export { DialogComponent as Dialog }
