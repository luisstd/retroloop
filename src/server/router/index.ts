// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { retrospectiveRouter } from './retrospective'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('retrospective.', retrospectiveRouter)

// export type definition of API
export type AppRouter = typeof appRouter
