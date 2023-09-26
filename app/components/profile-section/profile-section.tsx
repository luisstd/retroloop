'use client'

import { User } from '@prisma/client'
import * as Avatar from '@radix-ui/react-avatar'
import * as Label from '@radix-ui/react-label'
import * as Toast from '@radix-ui/react-toast'
import { IconCheck, IconUserCircle } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { DeleteUserDialog } from '@/components/profile-section/components/delete-user-dialog'
import { UserUpdateInputSchema } from '@/schemas/user'
import { UserUpdateInput } from '@/types/user'
import { trpc } from '@/utils/trpc'

export function ProfileSection() {
  const user = trpc.user.getLoggedIn.useQuery()
  const router = useRouter()

  const [open, setOpen] = useState(false)

  const mutationEdit = trpc.user.edit.useMutation({
    onSuccess: () => {
      user.refetch()
    },
  })

  const mutationDelete = trpc.user.delete.useMutation({
    onSuccess: () => {
      router.push('/')
    },
  })

  function handleSubmit(input: UserUpdateInput): void {
    mutationEdit.mutate(input)
    setOpen(true)
  }

  function handleDelete(input: User): void {
    mutationDelete.mutate(input)
    setOpen(true)
  }

  return (
    <>
      <Toast.Provider swipeDirection='right'>
        <Toast.Root open={open} onOpenChange={setOpen}>
          <Toast.Title className='text-md flex items-center gap-2'>
            <span>Success</span>
            <IconCheck />
          </Toast.Title>
        </Toast.Root>

        {open ? (
          <Toast.Viewport className='border-base-dark bg-base-light text-base-dark dark:border-base-light dark:bg-base-dark dark:text-base-light fixed bottom-0 right-0 m-5 w-fit gap-2 rounded-md border-2 p-5 ' />
        ) : null}

        {user.data ? (
          <main className='flex w-full max-w-screen-2xl justify-around gap-5'>
            <section className='border-base-dark dark:border-base-light mx-5 min-w-min flex-grow rounded-md border-2 p-5 text-xl shadow-md'>
              <Formik
                validationSchema={toFormikValidationSchema(UserUpdateInputSchema)}
                initialValues={{
                  id: user.data.id || '',
                  name: user.data.name || '',
                  email: user.data.email || '',
                  image: user.data.image || '',
                  role: user.data.role || '',
                  createdAt: user.data.createdAt,
                  emailVerified: user.data.emailVerified,
                }}
                onSubmit={(values) => handleSubmit(values)}
              >
                <Form className='flex w-full flex-col items-center md:flex-row md:justify-around'>
                  <div className='flex flex-col place-items-center items-start gap-5'>
                    <fieldset className='flex flex-col items-start'>
                      <Label.Root htmlFor='name' className='px-2 font-bold'>
                        Name:
                      </Label.Root>
                      <Field
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Your Name'
                        className='border-base-dark dark:border-base-light m-2 rounded-md border-2 bg-neutral-200 p-2 outline-2 dark:bg-neutral-700'
                      />
                    </fieldset>

                    <fieldset className='flex flex-col items-start'>
                      <Label.Root htmlFor='email' className='px-2 font-bold'>
                        E-Mail:
                      </Label.Root>
                      <Field
                        id='email'
                        name='email'
                        type='email'
                        placeholder='user@mail.com'
                        className='border-base-dark dark:border-base-light m-2 rounded-md border-2 bg-neutral-200 p-2 outline-2 dark:bg-neutral-700'
                      />
                    </fieldset>

                    <button className='btn m-2 mt-10 px-2 py-1 font-bold italic' type='submit'>
                      Submit
                    </button>
                  </div>

                  <Avatar.Root>
                    <Avatar.Image
                      src={user.data?.image || ''}
                      alt='User Avatar'
                      className='border-base-dark dark:border-base-light hidden rounded border-2 hover:cursor-pointer sm:block'
                      width={250}
                      height='auto'
                    />
                    <Avatar.Fallback delayMs={300} className='hidden sm:block'>
                      <IconUserCircle width={250} size={180} />
                    </Avatar.Fallback>

                    <div className='mt-5 flex flex-col items-center font-mono text-sm '>
                      <b>Signed up at: </b>

                      <p>{user.data.createdAt.toLocaleString()}</p>

                      <DeleteUserDialog itemToDelete={user.data} deleteHandler={handleDelete} />
                    </div>
                  </Avatar.Root>
                </Form>
              </Formik>
              <div className='flex flex-row items-center justify-around '></div>
            </section>
          </main>
        ) : null}
      </Toast.Provider>
    </>
  )
}
