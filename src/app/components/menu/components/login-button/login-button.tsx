'use client'

import { IconLogin } from '@tabler/icons-react'
import { signIn } from 'next-auth/react'

import { Button } from '@/app/ui/button'

export function LoginButton() {
  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => signIn()}
      aria-label='Login'
    >
      <IconLogin size={24} />
    </Button>
  )
}
