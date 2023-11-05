import { IconMailFast } from '@tabler/icons-react'
import { signIn } from 'next-auth/react'
import { Button } from 'src/app/ui/button/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'src/app/ui/card/card'

export default function VerifyRequest() {
  return (
    <section className='mx-auto grid h-screen place-items-center'>
      <Card className='mx-5 sm:mx-0'>
        <CardHeader>
          <CardTitle>Check your e-mail</CardTitle>
          <CardDescription>A sign-in link has been sent to your e-mail address.</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col items-center gap-4'>
          <IconMailFast size={128} />
          <Button variant='link' onClick={() => signIn()}>
            Back to sign-in
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
