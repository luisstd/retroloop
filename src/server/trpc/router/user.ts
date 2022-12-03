import { z } from 'zod'

import { t } from '../trpc'

export const userRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany()
  }),
  add: t.procedure
    .input(
      z.object({
        email: z.string(),
        name: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.create({ data: input })
    }),
})
