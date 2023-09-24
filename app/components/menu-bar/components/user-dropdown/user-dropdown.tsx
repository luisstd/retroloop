'use client'

import { IconUserCircle } from '@tabler/icons-react'
import { signOut, useSession } from 'next-auth/react'

import { Button } from '@/ui/button/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover/popover'

export function UserDropdown() {
  const { data: session } = useSession()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='ghost' className='rounded-l-md rounded-r-3xl'>
          <IconUserCircle size={24} />
        </Button>
      </PopoverTrigger>

      <PopoverContent className='flex w-max flex-col items-center gap-1'>
        <div>
          Logged in as
          <br />
          <strong>{session?.user?.name}</strong>
        </div>
        <Button onClick={() => signOut()}>Logout</Button>
      </PopoverContent>
    </Popover>
  )
}
