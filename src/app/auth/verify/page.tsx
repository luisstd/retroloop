'use client'
import { IconMailFast } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/app/ui/button'
import { Card } from '@/app/ui/card'

export default function VerifyRequest() {
  return (
    <section className='flex flex-1 items-center justify-center'>
      <Card className='mx-5 sm:mx-0 sm:max-w-lg'>
        <Card.Header className='p-6 pb-4'>
          <Card.Title>Check your email</Card.Title>
          <Card.Description>
            A sign-in link has been sent to your email address.
          </Card.Description>
        </Card.Header>
        <Card.Content className='flex flex-col items-center gap-6 p-6 pt-4'>
          <IconMailFast size={80} />
          <Button variant='link' asChild>
            <Link href='/auth/login'>Back to sign-in</Link>
          </Button>
        </Card.Content>
      </Card>
    </section>
  )
}
