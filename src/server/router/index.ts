// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { retrospectiveRouter } from './retrospective'
import { userRouter } from '@/server/router/user'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('retrospective.', retrospectiveRouter)
  .merge('user.', userRouter)

// export type definition of API
export type AppRouter = typeof appRouter
