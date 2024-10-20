import { IconPlus } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

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
import { RetrospectiveCreateInputSchema } from '@/schemas/retrospective'
import { api } from '@/trpc/react'
import { RetrospectiveCreateInput } from '@/types/retrospective'
import { StripeBillingInterval } from '@/types/stripe-plan'

type AddRetroProps = {
  handleAddRetro: (input: RetrospectiveCreateInput) => void
  isLimitReached: boolean
}

const RetroLimitReached = () => {
  const router = useRouter()
  const { mutateAsync: createCheckoutSession } =
    api.stripe.createCheckoutSession.useMutation()

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Retrospective limit reached</DialogTitle>
        <DialogDescription>
          You have reached the limit of 1 retrospective for the Standard plan.
          Upgrade to Unlimited to create more.
        </DialogDescription>
      </DialogHeader>
      <Button
        onClick={async () => {
          const { checkoutUrl } = await createCheckoutSession(
            StripeBillingInterval.MONTHLY,
          )
          if (checkoutUrl) {
            router.push(checkoutUrl)
          }
        }}
      >
        Upgrade subscription
      </Button>
    </DialogContent>
  )
}

export function AddRetro({ handleAddRetro, isLimitReached }: AddRetroProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className='flex gap-1'>
          Start Retro
          <IconPlus size={18} />
        </Button>
      </DialogTrigger>

      {isLimitReached ? (
        <RetroLimitReached />
      ) : (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Start retrospective</DialogTitle>
            <DialogDescription>
              Create a new retrospective by giving it a name.
            </DialogDescription>
          </DialogHeader>

          <Formik
            validationSchema={toFormikValidationSchema(
              RetrospectiveCreateInputSchema,
            )}
            initialValues={{
              name: '',
              date: new Date(),
              timerExpiration: new Date(),
              phase: 'WRITING',
            }}
            onSubmit={(values: RetrospectiveCreateInput) => {
              handleAddRetro(values)
              setIsOpen(false)
            }}
          >
            <Form className='flex flex-col gap-10'>
              <fieldset className='flex flex-col gap-2'>
                <Label htmlFor='name'>Retro Name</Label>
                <Field
                  id='name'
                  as={Input}
                  name='name'
                  placeholder='Untitled Retro'
                />
              </fieldset>

              <DialogFooter>
                <Button type='submit' aria-label='Start Retro'>
                  Start Retro
                </Button>
              </DialogFooter>
            </Form>
          </Formik>
        </DialogContent>
      )}
    </Dialog>
  )
}
