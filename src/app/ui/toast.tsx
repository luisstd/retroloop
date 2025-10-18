'use client'

import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        classNames: {
          toast:
            'h-auto w-full p-4 bg-background border-2 rounded shadow-md group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border flex items-center relative',
          description:
            'group-[.toast]:text-muted-foreground ml-2 text-sm font-sans',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground py-1 px-2 rounded bg-background border-border shadow-md border-2 ml-auto h-fit min-w-fit transition hover:translate-y-0.5',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-foreground py-1 px-2 rounded text-sm bg-background border-border shadow-md border-2 ml-auto h-fit min-w-fit transition hover:translate-y-0.5',
          title: 'ml-2 font-sans',
          closeButton:
            'absolute bg-background -top-1 -left-1 rounded-full border-2 p-0.5',
        },
        unstyled: true,
      }}
      {...props}
    />
  )
}

export { Toaster }
