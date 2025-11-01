'use client'

import { Field, Form, Formik } from 'formik'
import { toast } from 'sonner'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { Button } from '@/app/ui/button'
import { Card } from '@/app/ui/card'
import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
import { useSession } from '@/lib/auth-client'
import { UserUpdateInputSchema } from '@/schemas/user'
import { api } from '@/trpc/react'
import type { UserUpdateInput } from '@/types/user'

interface SignUpFormProps {
  onSuccess?: () => void
}

export function SignUpForm({ onSuccess }: SignUpFormProps) {
  const { data } = useSession()

  const mutation = api.user.edit.useMutation({
    onSuccess: () => {
      onSuccess?.()
    },
    onError: (error) => {
      console.error('Failed to update user:', error)
      toast.error('Failed to save your information. Please try again.')
    },
  })

  function handleSubmit(input: UserUpdateInput): void {
    mutation.mutate(input)
  }

  return (
    <>
      {data ? (
        <section className='mx-auto grid h-screen place-items-center'>
          <Formik
            validationSchema={toFormikValidationSchema(UserUpdateInputSchema)}
            initialValues={{
              id: data.user?.id || '',
              email: data.user?.email || '',
              name: data.user?.name || '',
              image: data.user?.image || undefined,
            }}
            onSubmit={handleSubmit}
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
                    <Field
                      as={Input}
                      id='name'
                      name='name'
                      required
                      placeholder='Enter your name'
                    />

                    <Label htmlFor='email' className='font-bold'>
                      Email
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
                  <Button
                    type='submit'
                    aria-label='Save'
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? 'Saving...' : 'Continue'}
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
