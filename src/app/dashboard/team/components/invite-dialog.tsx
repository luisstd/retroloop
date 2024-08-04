import { IconPlus, IconSend } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

import { Button } from '@/app/ui/button/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/ui/dialog/dialog'
import { Input } from '@/app/ui/input/input'
import { Label } from '@/app/ui/label/label'
import { useToast } from '@/app/ui/toast/use-toast'

type InviteDialogProps = {
  ctaCopy: string
  ctaVariant: 'default' | 'secondary' | 'outline'
  dialogTitle: string
  dialogDescription: string
  iconVariant: 'send' | 'plus' | 'none'
}

export function InviteDialog({
  ctaCopy,
  ctaVariant,
  dialogTitle,
  dialogDescription,
  iconVariant,
}: InviteDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  const { toast } = useToast()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className='flex gap-1' variant={ctaVariant}>
          {ctaCopy}
          {iconVariant === 'none' ? null : iconVariant === 'send' ? (
            <IconSend size={18} />
          ) : (
            <IconPlus size={18} />
          )}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>

        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={(values) => {
            signIn('email', { ...values, redirect: false })
            setIsOpen(false)
            toast({
              title: 'Successfully sent login link',
              description:
                'The recipient can now login with the link sent to their email',
            })
          }}
        >
          <Form className='flex flex-col gap-10'>
            <fieldset className='flex flex-col gap-2'>
              <Label htmlFor='email'>E-Mail</Label>
              <Field
                as={Input}
                id='email'
                name='email'
                placeholder='example@email.com'
              />
            </fieldset>

            <DialogFooter>
              <Button type='submit' aria-label='Send invite'>
                Send invite
              </Button>
            </DialogFooter>
          </Form>
        </Formik>
      </DialogContent>
    </Dialog>
  )
}
