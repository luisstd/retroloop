import { Field, Form, Formik } from 'formik'
import { useSession } from 'next-auth/react'
import React from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { UserSessionSchema } from '@/schemas/user'
import { UserSession } from '@/types/user'
import { trpc } from '@/utils/trpc'

function SignUpForm() {
  const { data } = useSession()

  const mutation = trpc.user.edit.useMutation({})

  function handleSubmit(input: UserSession): void {
    mutation.mutate(input)
  }

  return (
    <>
      {data ? (
        <div className='flex flex-col items-center w-screen max-w-screen-2xl'>
          <h1 className='my-5 text-3xl italic font-bold'>Complete login</h1>
          <Formik
            validationSchema={toFormikValidationSchema(UserSessionSchema)}
            initialValues={{
              id: data.user?.id || '',
              email: data.user?.email || '',
              name: data.user?.name || '',
              image: data.user?.image || '',
            }}
            onSubmit={handleSubmit}
          >
            <Form className='w-screen max-w-md p-5 border-2 rounded-lg border-base-dark bg-base-light dark:bg-base-dark dark:border-base-light dark:text-base-light'>
              <fieldset className='flex flex-col w-auto gap-4'>
                <label htmlFor='name' className='font-bold'>
                  Name
                </label>
                <Field
                  id='name'
                  name='name'
                  component='input'
                  rows={10}
                  required
                  className='w-full h-full p-2 border-2 rounded-md bg-neutral-100 dark:bg-neutral-700 border-base-dark min-h-min dark:border-base-light'
                />

                <label htmlFor='name' className='font-bold'>
                  E-Mail
                </label>
                <Field
                  id='email'
                  name='email'
                  component='input'
                  rows={10}
                  required
                  disabled={data.user?.email}
                  className={`w-full h-full p-2 border-2 ${
                    data.user?.email ? 'text-gray-400 italic ' : ''
                  }  rounded-md bg-neutral-100 dark:bg-neutral-700 border-base-dark min-h-min dark:border-base-light`}
                />
              </fieldset>

              <div className='flex flex-row justify-end w-full'>
                <button
                  type='submit'
                  aria-label='Save'
                  className='px-2 py-1 m-2 mt-10 italic font-bold btn'
                >
                  Continue
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      ) : null}
    </>
  )
}

export default SignUpForm
