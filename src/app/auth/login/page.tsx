'use client'
import { Field, Form, Formik } from 'formik'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

import { Button } from '@/app/ui/button'
import { Card } from '@/app/ui/card'
import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'

export default function Login() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackurl') || undefined

  return (
    <section className='mx-auto grid h-screen place-items-center'>
      <Card className='mx-5 sm:mx-0'>
        <Card.Header>
          <Card.Title>Sign in</Card.Title>
          <Card.Description>
            Sign in to Retroloop via e-mail link or using one of the providers
            below
          </Card.Description>
        </Card.Header>
        <Card.Content className='flex flex-col items-center gap-4'>
          <div className='mx-auto flex w-full flex-col justify-between gap-3 sm:flex-row sm:gap-6'>
            <Button
              onClick={() => signIn('github', { callbackUrl })}
              className='w-full'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='26'
                height='24'
                fill='currentColor'
                className='mr-2'
                viewBox='0 0 1792 1792'
              >
                <path d='M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z'></path>
              </svg>
              Sign in with GitHub
            </Button>

            <button
              className='gsi-material-button'
              onClick={() => signIn('google', { callbackUrl })}
            >
              <div className='gsi-material-button-state'></div>
              <div className='gsi-material-button-content-wrapper'>
                <div className='gsi-material-button-icon'>
                  <svg
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                  >
                    <path
                      fill='#EA4335'
                      d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
                    ></path>
                    <path
                      fill='#4285F4'
                      d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
                    ></path>
                    <path
                      fill='#FBBC05'
                      d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
                    ></path>
                    <path
                      fill='#34A853'
                      d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
                    ></path>
                    <path fill='none' d='M0 0h48v48H0z'></path>
                  </svg>
                </div>
                <span className='gsi-material-button-contents'>
                  Sign in with Google
                </span>
              </div>
            </button>
          </div>
          <Formik
            initialValues={{ email: '' }}
            onSubmit={(values) => {
              signIn('email', { callbackUrl, email: values.email })
            }}
          >
            <Form className='mt-5 w-full'>
              <Label hidden htmlFor='email'>
                E-mail
              </Label>
              <div className='flex flex-col items-center gap-4'>
                <Field
                  as={Input}
                  type='email'
                  id='email'
                  name='email'
                  placeholder='E-mail address'
                />
                <Button variant='secondary' type='submit' className='w-full'>
                  Send login link
                </Button>
              </div>
            </Form>
          </Formik>
        </Card.Content>
      </Card>
    </section>
  )
}
