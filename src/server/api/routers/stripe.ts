import { z } from 'zod'

import { env } from '@/env.mjs'
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { getOrCreateStripeCustomerIdForUser } from '@/server/stripe/stripe-webhook-handlers'

export const stripeRouter = createTRPCRouter({
  createCheckoutSession: protectedProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    const { stripe, session, db: prisma, headers } = ctx

    const customerId = await getOrCreateStripeCustomerIdForUser({
      prisma,
      stripe,
      userId: session.user?.id,
    })

    const priceId = input === 'YEARLY' ? env.STRIPE_PRICE_ID_YEARLY : env.STRIPE_PRICE_ID_MONTHLY

    if (!customerId) {
      throw new Error('Could not create customer')
    }

    const baseUrl =
      env.NODE_ENV === 'development'
        ? `http://${headers.get('host') ?? 'localhost:3000'}`
        : `https://${headers.get('host') ?? env.NEXTAUTH_URL}`

    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      client_reference_id: session.user?.id,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/dashboard?checkoutSuccess=true`,
      cancel_url: `${baseUrl}/dashboard?checkoutCanceled=true`,
      subscription_data: {
        metadata: {
          userId: session.user?.id,
        },
      },
    })

    if (!checkoutSession) {
      throw new Error('Could not create checkout session')
    }

    return { checkoutUrl: checkoutSession.url }
  }),
  createBillingPortalSession: protectedProcedure.mutation(async ({ ctx }) => {
    const { stripe, session, db: prisma, headers } = ctx

    const customerId = await getOrCreateStripeCustomerIdForUser({
      prisma,
      stripe,
      userId: session.user?.id,
    })

    if (!customerId) {
      throw new Error('Could not create customer')
    }

    const baseUrl =
      env.NODE_ENV === 'development'
        ? `http://${headers.get('host') ?? 'localhost:3000'}`
        : `https://${headers.get('host') ?? env.NEXTAUTH_URL}`

    const stripeBillingPortalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${baseUrl}/dashboard`,
    })

    if (!stripeBillingPortalSession) {
      throw new Error('Could not create billing portal session')
    }

    return { billingPortalUrl: stripeBillingPortalSession.url }
  }),
})
