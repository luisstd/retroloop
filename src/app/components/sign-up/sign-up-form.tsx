'use client'

import { Field, Form, Formik } from 'formik'
import { useSession } from 'next-auth/react'

import { Button } from '@/app/ui/button'
import { Card } from '@/app/ui/card'
import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
import { api } from '@/trpc/react'
import { UserSession } from '@/types/user'

export function SignUpForm() {
  const { data } = useSession()

  const mutation = api.user.edit.useMutation({
    onSuccess: () => {
      window.location.href = '/dashboard'
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
                <Card.Header>
                  <Card.Title>Complete login</Card.Title>
                  <Card.Description>
                    Please fill out the missing information for your account
                  </Card.Description>
                </Card.Header>

                <Card.Content>
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
                      className={`${data.user?.email ? 'text-muted-foreground italic' : ''}`}
                    />
                  </fieldset>
                </Card.Content>

                <Card.Content>
                  <Button type='submit' aria-label='Save'>
                    Continue
                  </Button>
                </Card.Content>
              </Form>
            </Card>
          </Formik>
        </section>
      ) : null}
    </>
  )
}
