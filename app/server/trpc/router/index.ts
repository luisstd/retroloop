// src/server/trpc/router/index.ts
import { retroItemRouter } from '@/app/server/trpc/router/retro-item'
import { retroItemCollectionRouter } from '@/app/server/trpc/router/retro-item-collection'
import { retrospectiveRouter } from '@/app/server/trpc/router/retrospective'
import { userRouter } from '@/app/server/trpc/router/user'

import { t } from '../trpc'
import { authRouter } from './auth'

export const appRouter = t.router({
  auth: authRouter,
  user: userRouter,
  retrospective: retrospectiveRouter,
  retroItem: retroItemRouter,
  retroItemCollection: retroItemCollectionRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
