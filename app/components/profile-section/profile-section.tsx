'use client'

import { User } from '@prisma/client'
import { IconUserCircle } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { version } from 'package.json'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { DeleteUserDialog } from '@/components/profile-section/components/delete-user-dialog'
import { UserUpdateInputSchema } from '@/schemas/user'
import { UserUpdateInput } from '@/types/user'
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar/avatar'
import { Badge } from '@/ui/badge/badge'
import { Button } from '@/ui/button/button'
import { Card, CardHeader, CardTitle } from '@/ui/card/card'
import { Input } from '@/ui/input/input'
import { Label } from '@/ui/label/label'
import { useToast } from '@/ui/toast/use-toast'
import { trpc } from '@/utils/trpc'

export function ProfileSection() {
  const user = trpc.user.getLoggedIn.useQuery()
  const router = useRouter()
  const { toast } = useToast()

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
    toast({
      title: 'Profile updated',
      description: 'Your profile was successfully updated',
    })
  }

  function handleDelete(input: User): void {
    mutationDelete.mutate(input)
    toast({
      title: 'Account deleted',
      description: 'Your account was successfully deleted',
    })
  }

  return (
    <Card className='w-[calc(100%-2.5rem)] bg-background p-10 shadow-sm'>
      <CardHeader className='flex flex-row items-baseline justify-between'>
        <CardTitle>PROFILE</CardTitle>
        <Badge>Version {version}</Badge>
      </CardHeader>

      <Formik
        validationSchema={toFormikValidationSchema(UserUpdateInputSchema)}
        initialValues={{
          id: user.data?.id || '',
          name: user.data?.name || '',
          email: user.data?.email || '',
          image: user.data?.image || '',
          role: user.data?.role || '',
          createdAt: user.data?.createdAt,
          emailVerified: user.data?.emailVerified,
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className='mx-auto w-10/12'>
          <div className='flex items-end justify-around'>
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
                <AvatarImage src={user.data?.image || ''} alt='User Avatar' />
                <AvatarFallback delayMs={300} className='h-32 w-32'>
                  <IconUserCircle size={64} />
                </AvatarFallback>
              </Avatar>
              <div className='flex flex-col items-center gap-2'>
                <Label>User since</Label>
                <Badge variant='outline'>{user.data?.createdAt.toLocaleString()}</Badge>

                {user.data ? (
                  <DeleteUserDialog itemToDelete={user.data} deleteHandler={handleDelete} />
                ) : null}
              </div>
            </section>
          </div>
        </Form>
      </Formik>
    </Card>
  )
}
