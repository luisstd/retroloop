'use client'

import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { UserSession } from '@/types/user'
import { Button } from '@/ui/button/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/card/card'
import { Input } from '@/ui/input/input'
import { Label } from '@/ui/label/label'
import { trpc } from '@/utils/trpc'

export function SignUpForm() {
  const { data } = useSession()
  const router = useRouter()

  const mutation = trpc.user.edit.useMutation({
    onSuccess: () => {
      router.push('/')
    },
  })

  function handleSubmit(input: UserSession): void {
    mutation.mutate(input)
  }

  return (
    <>
      {data ? (
        <section className='mx-auto grid h-screen place-items-center'>
          <Formik
            initialValues={{
              id: data.user?.id || '',
              email: data.user?.email || '',
              name: data.user?.name || '',
              image: data.user?.image || '',
            }}
            onSubmit={(values) => {
              handleSubmit(values)
            }}
          >
            <Card className='mx-5 sm:mx-0'>
              <Form>
                <CardHeader>
                  <CardTitle>Complete login</CardTitle>
                  <CardDescription>
                    Please fill out the missing information for your account
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <fieldset className='flex flex-col gap-4'>
                    <Label htmlFor='name' className='font-bold'>
                      Name
                    </Label>
                    <Field as={Input} id='name' name='name' required />

                    <Label htmlFor='name' className='font-bold'>
                      E-Mail
                    </Label>
                    <Field
                      as={Input}
                      id='email'
                      name='email'
                      required
                      disabled={data.user?.email}
                      className={`${data.user?.email ? 'italic text-muted-foreground ' : ''}`}
                    />
                  </fieldset>
                </CardContent>

                <CardFooter>
                  <Button type='submit' aria-label='Save'>
                    Continue
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Formik>
        </section>
      ) : null}
    </>
  )
}
