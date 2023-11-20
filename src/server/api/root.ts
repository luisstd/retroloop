import { authRouter } from '@/server/api/routers/auth'
import { retroItemRouter } from '@/server/api/routers/retro-item'
import { retrospectiveRouter } from '@/server/api/routers/retrospective'
import { userRouter } from '@/server/api/routers/user'
import { createTRPCRouter } from '@/server/api/trpc'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
  retrospective: retrospectiveRouter,
  retroItem: retroItemRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
