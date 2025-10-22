'use client'

import { IconLogin } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/app/ui/button'

export function LoginButton() {
  return (
    <Button variant='outline' size='icon' aria-label='Login' asChild>
      <Link href='/auth/login'>
        <IconLogin size={24} />
      </Link>
    </Button>
  )
}
