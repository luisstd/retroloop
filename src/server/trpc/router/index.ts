// src/server/trpc/router/index.ts
import { retrospectiveRouter } from '@/server/trpc/router/retrospective'
import { userRouter } from '@/server/trpc/router/user'
import { t } from '../trpc'
import { authRouter } from './auth'

export const appRouter = t.router({
  auth: authRouter,
  user: userRouter,
  retrospective: retrospectiveRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
