import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getServerSession } from 'next-auth/next'
import { getCsrfToken, getProviders, signIn } from 'next-auth/react'

import { Button } from '@/ui/button/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card/card'
import { Input } from '@/ui/input/input'
import { Label } from '@/ui/label/label'

import { authOptions } from '../api/auth/[...nextauth]'

export default function SignIn({
  providers,
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const loginProviders = Object.values(providers).filter((provider) => provider.type !== 'email')
  return (
    <section className='mx-auto grid h-screen place-items-center'>
      <Card className='mx-5 sm:mx-0'>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>
            Sign in to Retroloop via e-mail link or using one of the providers below
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col items-center gap-4'>
          <div className='space-between flex w-full gap-4'>
            {loginProviders.map((provider) => (
              <Button
                size='lg'
                variant='secondary'
                key={provider.id}
                onClick={() => signIn(provider.id)}
                className='flex w-full gap-2'
              >
                {provider.id === 'github' ? (
                  <IconBrandGithub size={22} />
                ) : (
                  <IconBrandGoogle size={22} />
                )}
                {provider.name}
              </Button>
            ))}
          </div>

          <form method='post' action='/api/auth/signin/email' className='w-full'>
            <Input name='csrfToken' type='hidden' defaultValue={csrfToken} />
            <Label hidden>E-mail</Label>
            <div className='flex flex-col items-center gap-4'>
              <Input type='email' id='email' name='email' placeholder='E-mail address' />
              <Button variant='default' type='submit' className='w-full'>
                Send login link
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/dashboard' } }
  }

  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)

  return {
    props: { providers: providers ?? [], csrfToken },
  }
}
