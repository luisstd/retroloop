import { IconPlus } from '@tabler/icons-react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { Button } from '@/app/ui/button'
import { Dialog } from '@/app/ui/dialog'
import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
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
    <Dialog.Content size='md'>
      <Dialog.Header>
        <span>Retrospective limit reached</span>
      </Dialog.Header>
      <Dialog.Description>
        You have reached the limit of 3 retrospectives for the free plan.
        Upgrade to Unlimited to create more.
      </Dialog.Description>
      <div className='px-4'>
        <Button
          onClick={async () => {
            const { checkoutUrl } = await createCheckoutSession(
              StripeBillingInterval.YEARLY,
            )
            if (checkoutUrl) {
              router.push(checkoutUrl)
            }
          }}
        >
          Upgrade subscription
        </Button>
      </div>
    </Dialog.Content>
  )
}

export function AddRetro({ handleAddRetro, isLimitReached }: AddRetroProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button className='flex gap-1'>
          Start Retro
          <IconPlus size={18} />
        </Button>
      </Dialog.Trigger>

      {isLimitReached ? (
        <RetroLimitReached />
      ) : (
        <Dialog.Content size='md'>
          <Dialog.Header>
            <span>Start retrospective</span>
          </Dialog.Header>
          <Dialog.Description>
            Create a new retrospective by giving it a name.
          </Dialog.Description>

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
              <fieldset className='flex flex-col gap-2 px-4'>
                <Label htmlFor='name'>Retro Name</Label>
                <Field
                  id='name'
                  as={Input}
                  name='name'
                  placeholder='Untitled Retro'
                />
              </fieldset>

              <Dialog.Footer>
                <Button type='submit' aria-label='Start Retro'>
                  Start Retro
                </Button>
              </Dialog.Footer>
            </Form>
          </Formik>
        </Dialog.Content>
      )}
    </Dialog>
  )
}
