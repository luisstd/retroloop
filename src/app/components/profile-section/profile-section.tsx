'use client'
import { User } from '@prisma/client'
import { IconUserCircle } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { version } from 'package.json'
import { GridLoader } from 'react-spinners'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { DeleteUserDialog } from '@/app/components/profile-section/components/delete-user-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/avatar/avatar'
import { Badge } from '@/app/ui/badge/badge'
import { Button } from '@/app/ui/button/button'
import { Card, CardHeader, CardTitle } from '@/app/ui/card/card'
import { Input } from '@/app/ui/input/input'
import { Label } from '@/app/ui/label/label'
import { useToast } from '@/app/ui/toast/use-toast'
import { UserUpdateInputSchema } from '@/schemas/user'
import { api } from '@/trpc/react'
import { UserUpdateInput } from '@/types/user'
import { formatDate } from '@/utils/utils'

export function ProfileSection() {
  const router = useRouter()
  const { toast } = useToast()
  const { resolvedTheme } = useTheme()

  const { data: user, isLoading, refetch } = api.user.getLoggedIn.useQuery()

  const { mutate: updateUser } = api.user.edit.useMutation({
    onSuccess: () => {
      refetch()
    },
  })

  const { mutate: deleteUser } = api.user.delete.useMutation({
    onSuccess: () => {
      router.push('/')
    },
  })

  const handleSubmit = (input: UserUpdateInput): void => {
    updateUser(input)
    toast({
      title: 'Profile updated',
      description: 'Your profile was successfully updated',
    })
  }

  const handleDelete = (input: User): void => {
    deleteUser(input)
    toast({
      title: 'Account deleted',
      description: 'Your account was successfully deleted',
    })
  }

  const subscriptionType = (subscription: User['subscriptionType']) => {
    if (subscription === 'standard') {
      return 'Standard'
    } else if (subscription === 'unlimited') {
      return 'Unlimited'
    }
  }

  return (
    <>
      {user ? (
        <Card className='w-[calc(100%-2.5rem)] bg-background p-10 shadow-sm'>
          <CardHeader className='flex flex-row items-end justify-between'>
            <CardTitle>PROFILE</CardTitle>
            <Badge>Version {version}</Badge>
          </CardHeader>

          <Formik
            validationSchema={toFormikValidationSchema(UserUpdateInputSchema)}
            initialValues={{
              id: user?.id || '',
              name: user?.name || '',
              email: user?.email || '',
              image: user?.image || '',
              role: user?.role || '',
              createdAt: user?.createdAt,
              emailVerified: user?.emailVerified,
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form className='mx-auto w-10/12'>
              <div className='flex flex-col items-center justify-around gap-5 sm:flex-row sm:items-end sm:gap-0'>
                <section className='flex flex-col gap-5'>
                  <fieldset className='flex flex-col items-start gap-2'>
                    <Label htmlFor='name'>Name</Label>
                    <Field as={Input} id='name' name='name' type='text' placeholder='Your Name' />
                  </fieldset>

                  <fieldset className='flex flex-col items-start gap-2'>
                    <Label htmlFor='email'>E-Mail</Label>
                    <Field
                      as={Input}
                      id='email'
                      name='email'
                      type='email'
                      placeholder='user@mail.com'
                    />
                  </fieldset>

                  <Button type='submit'>Submit</Button>
                </section>

                <section className='flex flex-col items-center gap-2'>
                  <Avatar className='h-32 w-32'>
                    <AvatarImage src={user.image || ''} alt='User Avatar' />
                    <AvatarFallback className='h-32 w-32'>
                      <IconUserCircle size={64} />
                    </AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col items-center gap-2'>
                    <Label>User since</Label>
                    <Badge variant='outline'>{formatDate(user.createdAt)}</Badge>

                    <Label>Account type</Label>
                    <Badge variant='outline'>{subscriptionType(user.subscriptionType)}</Badge>

                    <div className='flex flex-col gap-2'>
                      {user.subscriptionType === 'standard' && <Button>Upgrade account</Button>}

                      {user && (
                        <DeleteUserDialog itemToDelete={user} deleteHandler={handleDelete} />
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </Form>
          </Formik>
        </Card>
      ) : (
        <div className='grid h-screen place-items-center'>
          <GridLoader
            color={resolvedTheme === 'light' ? 'black' : 'white'}
            loading={isLoading}
            size={15}
            aria-label='Loading Spinner'
          />
        </div>
      )}
    </>
  )
}
