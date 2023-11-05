'use client'

import { IconPlus } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { Button } from 'src/app/ui/button/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'src/app/ui/dialog/dialog'
import { Input } from 'src/app/ui/input/input'
import { Label } from 'src/app/ui/label/label'
import { useToast } from 'src/app/ui/toast/use-toast'

export function InviteUserDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className='flex gap-1'>
          Invite
          <IconPlus size={18} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite to team</DialogTitle>
          <DialogDescription>Invite someone by sending them a login link</DialogDescription>
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
              description: 'The recipient can now login with the link sent to their email',
            })
          }}
        >
          <Form className='flex flex-col gap-5'>
            <fieldset>
              <Label htmlFor='email'>E-Mail</Label>
              <Field as={Input} id='email' name='email' placeholder='example@email.com' />
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
