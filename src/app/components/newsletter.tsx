import { Field, FieldProps, Form, Formik } from 'formik'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { Button } from '@/app/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/ui/card'
import { Input } from '@/app/ui/input'
import { useToast } from '@/app/ui/use-toast'
import { api } from '@/trpc/react'

const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
})

const NewsletterSignup = () => {
  const { toast } = useToast()
  const { mutate: subscribeNewsletter } = api.newsletter.subscribe.useMutation({
    onSuccess: () => {
      toast({
        title: 'Subscribed to newsletter',
        description: 'You will receive updates about Retroloop',
      })
    },
    onError: (error) => {
      toast({
        title: error.message,
        description: 'Please try again',
      })
    },
  })

  const handleNewsletterSubscription = async (email: string) => {
    subscribeNewsletter(email)
  }

  return (
    <Card className='m-5 max-w-lg p-5'>
      <CardHeader>
        <CardTitle className='text-center text-2xl font-bold'>
          Subscribe to stay up to date with product updates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={toFormikValidationSchema(emailSchema)}
          onSubmit={(values, { resetForm }) => {
            handleNewsletterSubscription(values.email)
            resetForm()
          }}
        >
          <Form className='flex flex-col gap-2 sm:flex-row'>
            <Field name='email'>
              {({ field }: FieldProps) => (
                <Input
                  type='email'
                  placeholder='Enter your email'
                  className='grow'
                  {...field}
                  required
                />
              )}
            </Field>

            <Button
              type='submit'
              className='w-full sm:w-auto'
              variant='secondary'
            >
              Sign up
            </Button>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  )
}

export default NewsletterSignup
