import { User } from '@prisma/client'
import * as Avatar from '@radix-ui/react-avatar'
import * as Label from '@radix-ui/react-label'
import * as Toast from '@radix-ui/react-toast'
import { IconCheck, IconUserCircle } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import DeleteUserDialog from '@/components/profile-section/components/delete-user-dialog'
import { UserUpdateInputSchema } from '@/schemas/user'
import { UserUpdateInput } from '@/types/user'
import { trpc } from '@/utils/trpc'

const SettingsSection = () => {
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
          <Toast.Title className='flex items-center gap-2 text-md'>
            <span>Success</span>
            <IconCheck />
          </Toast.Title>
        </Toast.Root>

        {open ? (
          <Toast.Viewport className='fixed bottom-0 right-0 gap-2 p-5 m-5 border-2 rounded-md bg-base-light dark:bg-base-dark dark:text-base-light border-base-dark text-base-dark w-fit dark:border-base-light ' />
        ) : null}

        {user.data ? (
          <main className='flex justify-around w-full gap-5 max-w-screen-2xl'>
            <section className='flex-grow p-5 mx-5 text-xl border-2 rounded-md shadow-md border-base-dark min-w-min dark:border-base-light'>
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
                <Form className='flex flex-col items-center w-full md:justify-around md:flex-row'>
                  <div className='flex flex-col items-start gap-5 place-items-center'>
                    <fieldset className='flex flex-col items-start'>
                      <Label.Root htmlFor='name' className='px-2 font-bold'>
                        Name:
                      </Label.Root>
                      <Field
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Your Name'
                        className='p-2 m-2 border-2 rounded-md outline-2 bg-neutral-200 dark:bg-neutral-700 border-base-dark dark:border-base-light'
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
                        className='p-2 m-2 border-2 rounded-md outline-2 bg-neutral-200 dark:bg-neutral-700 border-base-dark dark:border-base-light'
                      />
                    </fieldset>

                    <button className='px-2 py-1 m-2 mt-10 italic font-bold btn' type='submit'>
                      Submit
                    </button>
                  </div>

                  <Avatar.Root>
                    <Avatar.Image
                      src={user.data?.image || ''}
                      alt='User Avatar'
                      className='hidden border-2 rounded border-base-dark dark:border-base-light sm:block hover:cursor-pointer'
                      width={250}
                      height='auto'
                    />
                    <Avatar.Fallback delayMs={300} className='hidden sm:block'>
                      <IconUserCircle width={250} size={180} />
                    </Avatar.Fallback>

                    <div className='flex flex-col items-center mt-5 font-mono text-sm '>
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

export default SettingsSection
