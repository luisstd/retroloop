'use client'

import * as Avatar from '@radix-ui/react-avatar'
import { IconUserCircle } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { UserSession } from '@/types/user'
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
        <div className='flex w-screen max-w-screen-2xl flex-col items-center'>
          <h1 className='my-5 text-3xl font-bold italic'>Complete login</h1>
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
            <Form className='border-base-dark bg-base-light dark:border-base-light dark:bg-base-dark dark:text-base-light flex w-screen max-w-md flex-col items-center gap-4 rounded-lg border-2 p-5'>
              <Avatar.Root className='hover:cursor-pointer'>
                <Avatar.Image src={data.user?.image || ''} alt='User Avatar' />
                <Avatar.Fallback delayMs={600}>
                  <IconUserCircle size={72} />
                </Avatar.Fallback>
              </Avatar.Root>
              <fieldset className='flex w-full flex-col gap-4'>
                <label htmlFor='name' className='font-bold'>
                  Name
                </label>
                <Field
                  id='name'
                  name='name'
                  component='input'
                  rows={10}
                  required
                  className='border-base-dark dark:border-base-light h-full min-h-min w-full rounded-md border-2 bg-neutral-100 p-2 dark:bg-neutral-700'
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
                  className={`h-full w-full border-2 p-2 ${
                    data.user?.email ? 'italic text-gray-400 ' : ''
                  }  border-base-dark dark:border-base-light min-h-min rounded-md bg-neutral-100 dark:bg-neutral-700`}
                />
              </fieldset>
              <div className='flex w-full flex-row justify-end'>
                <button
                  type='submit'
                  aria-label='Save'
                  className='btn m-2 mt-10 px-2 py-1 font-bold italic'
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
