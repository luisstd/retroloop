'use client'

import { IconLogin } from '@tabler/icons-react'
import { signIn } from 'next-auth/react'

import { Button } from '@/app/ui/button/button'

export function LoginButton() {
  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={() => signIn()}
      className='rounded-l-md rounded-r-3xl'
    >
      <IconLogin size={24} className='cursor-pointer' />
      Login
    </Button>
  )
}
