import { IconPlus, IconSend } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/app/ui/button'
import { Dialog } from '@/app/ui/dialog'
import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'

type InviteDialogProps = {
  ctaCopy: string
  ctaVariant: 'default' | 'secondary' | 'outline'
  dialogTitle: string
  dialogDescription: string
  iconVariant: 'send' | 'plus' | 'none'
  fullWidth?: boolean
}

export function InviteDialog({
  ctaCopy,
  ctaVariant,
  dialogTitle,
  dialogDescription,
  iconVariant,
  fullWidth = false,
}: InviteDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button
          className={`flex ${fullWidth ? 'w-full' : ''} justify-center gap-1`}
          variant={ctaVariant}
        >
          {ctaCopy}
          {iconVariant === 'none' ? null : iconVariant === 'send' ? (
            <IconSend size={18} />
          ) : (
            <IconPlus size={18} />
          )}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content size='md'>
        <Dialog.Header>
          <span>{dialogTitle}</span>
        </Dialog.Header>
        <Dialog.Description>{dialogDescription}</Dialog.Description>

        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={(values) => {
            signIn('email', { ...values, redirect: false })
            setIsOpen(false)
            toast('Successfully sent login link', {
              description:
                'The recipient can now login with the link sent to their email',
            })
          }}
        >
          <Form className='flex flex-col gap-10'>
            <fieldset className='flex flex-col gap-2 px-4'>
              <Label htmlFor='email'>Email</Label>
              <Field
                as={Input}
                id='email'
                name='email'
                placeholder='example@email.com'
              />
            </fieldset>

            <Dialog.Footer>
              <Button type='submit' aria-label='Send invite'>
                Send invite
              </Button>
            </Dialog.Footer>
          </Form>
        </Formik>
      </Dialog.Content>
    </Dialog>
  )
}
