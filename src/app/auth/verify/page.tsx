'use client'
import { IconMailFast } from '@tabler/icons-react'
import { signIn } from 'next-auth/react'

import { Button } from '@/app/ui/button'
import { Card } from '@/app/ui/card'

export default function VerifyRequest() {
  return (
    <section className='mx-auto grid h-screen place-items-center'>
      <Card className='mx-5 sm:mx-0'>
        <Card.Header>
          <Card.Title>Check your e-mail</Card.Title>
          <Card.Description>
            A sign-in link has been sent to your e-mail address.
          </Card.Description>
        </Card.Header>
        <Card.Content className='flex flex-col items-center gap-4'>
          <IconMailFast size={128} />
          <Button variant='link' onClick={() => signIn()}>
            Back to sign-in
          </Button>
        </Card.Content>
      </Card>
    </section>
  )
}
