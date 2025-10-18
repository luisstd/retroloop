import React from 'react'

import { cn } from '@/utils/cn'

export function Textarea({
  placeholder = 'Enter text...',
  className = '',
  ...props
}) {
  return (
    <textarea
      placeholder={placeholder}
      rows={4}
      className={cn(
        'border-border placeholder:text-muted-foreground w-full rounded border-2 px-4 py-2 shadow-md transition focus:shadow-xs focus:outline-hidden',
        className,
      )}
      {...props}
    />
  )
}
