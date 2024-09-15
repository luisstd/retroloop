'use client'
import { User } from '@prisma/client'
import { IconUserCircle } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import packageInfo from 'package.json'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { Feedback } from '@/app/components/feedback/feedback'
import { Loader } from '@/app/components/loader/loader'
import { SignUpForm } from '@/app/components/sign-up/sign-up-form'
import { DeleteUserDialog } from '@/app/profile/delete-user-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/avatar/avatar'
import { Badge } from '@/app/ui/badge/badge'
import { Button } from '@/app/ui/button/button'
import { Card, CardHeader, CardTitle } from '@/app/ui/card/card'
import { Input } from '@/app/ui/input/input'
import { Label } from '@/app/ui/label/label'
import { useToast } from '@/app/ui/toast/use-toast'
import { UserUpdateInputSchema } from '@/schemas/user'
import { api } from '@/trpc/react'
import { StripeBillingInterval } from '@/types/stripe-plan'
import { UserUpdateInput } from '@/types/user'
import { AccountType, formatDate, getAccountType } from '@/utils/utils'

export default function Profile() {
  const { data: session, status } = useSession()
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const isAuthenticated = status === 'authenticated'
  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

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

  const { mutateAsync: createCheckoutSession } =
    api.stripe.createCheckoutSession.useMutation()
  const { mutateAsync: createBillingPortalSession } =
    api.stripe.createBillingPortalSession.useMutation()

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

  if (!isAuthenticated) {
    const currentUrl = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`
    const callbackURL = encodeURIComponent(currentUrl)
    router.push(`/auth/login?callbackurl=${callbackURL}`)
  }

  if (!isSignedUp) {
    return <SignUpForm />
  }

  return (
    <>
      {session.user.email && <Feedback userEmail={session.user.email} />}

      <Card className='w-full bg-background p-10 shadow-sm'>
        <CardHeader className='flex flex-row items-baseline justify-between'>
          <CardTitle>PROFILE</CardTitle>
          <Badge>Version {packageInfo.version}</Badge>
        </CardHeader>

        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : user ? (
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
                <section className='flex flex-col items-center gap-2'>
                  <Avatar className='h-32 w-32'>
                    <AvatarImage src={user.image || ''} alt='User Avatar' />
                    <AvatarFallback className='h-32 w-32'>
                      <IconUserCircle size={64} />
                    </AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col items-center gap-2'>
                    <Label>User since</Label>
                    <Badge variant='outline'>
                      {formatDate(user.createdAt)}
                    </Badge>

                    <Label>Account type</Label>
                    <Badge variant='outline'>
                      {getAccountType(user.stripeSubscriptionStatus)}
                    </Badge>

                    <div className='flex flex-col gap-2'>
                      {getAccountType(user.stripeSubscriptionStatus) ===
                      AccountType.Standard ? (
                        <Button
                          type='button'
                          variant='outline'
                          onClick={async () => {
                            const { checkoutUrl } = await createCheckoutSession(
                              StripeBillingInterval.MONTHLY,
                            )
                            if (checkoutUrl) {
                              router.push(checkoutUrl)
                            }
                          }}
                        >
                          Upgrade account
                        </Button>
                      ) : (
                        <Button
                          type='button'
                          variant='outline'
                          onClick={async () => {
                            const { billingPortalUrl } =
                              await createBillingPortalSession()
                            if (billingPortalUrl) {
                              router.push(billingPortalUrl)
                            }
                          }}
                        >
                          Manage subscription
                        </Button>
                      )}

                      {user && (
                        <DeleteUserDialog
                          itemToDelete={user}
                          deleteHandler={handleDelete}
                        />
                      )}
                    </div>
                  </div>
                </section>

                <section className='flex flex-col gap-5'>
                  <fieldset className='flex flex-col items-start gap-2'>
                    <Label htmlFor='name'>Name</Label>
                    <Field
                      as={Input}
                      id='name'
                      name='name'
                      type='text'
                      placeholder='Your Name'
                    />
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
              </div>
            </Form>
          </Formik>
        ) : null}
      </Card>
    </>
  )
}
