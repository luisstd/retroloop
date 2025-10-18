import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = 'Enter text',
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`focus-visible:ring-primary w-full rounded border-2 px-4 py-2 shadow-md transition focus:shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-hidden ${
        props['aria-invalid']
          ? 'border-destructive text-destructive shadow-destructive shadow-xs'
          : ''
      } ${className}`}
      {...props}
    />
  )
}
