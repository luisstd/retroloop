import { authRouter } from '@/server/api/routers/auth'
import { feedbackRouter } from '@/server/api/routers/feedback'
import { newsletterRouter } from '@/server/api/routers/newsletter'
import { retrospectiveRouter } from '@/server/api/routers/retrospective'
import { stripeRouter } from '@/server/api/routers/stripe'
import { userRouter } from '@/server/api/routers/user'
import { createTRPCRouter } from '@/server/api/trpc'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  stripe: stripeRouter,
  auth: authRouter,
  user: userRouter,
  retrospective: retrospectiveRouter,
  feedback: feedbackRouter,
  newsletter: newsletterRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
