import { Resend } from 'resend'
import { z } from 'zod'

import { env } from '@/env.mjs'

import { createTRPCRouter, publicProcedure } from '../trpc'

const resend = new Resend(env.RESEND_API_KEY)
const audienceId = env.RESEND_AUDIENCE_ID

export const newsletterRouter = createTRPCRouter({
  subscribe: publicProcedure
    .input(z.string().email())
    .mutation(async ({ ctx, input }) => {
      const email = input

      try {
        await ctx.db.newsletterSubscription.create({
          data: { email },
        })

        await resend.contacts.create({
          email,
          audienceId,
        })

        await resend.emails.send({
          from: 'Retroloop <newsletter@retroloop.io>',
          to: email,
          subject: 'Newsletter Subscription Confirmation',
          html: `<p>Thank you for subscribing to the Retroloop newsletter!</p>`,
        })

        return { success: true }
      } catch (error) {
        console.error('Error during newsletter subscription:', error)
        throw new Error('Failed to subscribe to the newsletter.')
      }
    }),
})
