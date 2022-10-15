import { t } from '../trpc'
import { z } from 'zod'

export const userRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany()
  }),
  getFirst: t.procedure.query(({ ctx }) => {
    return ctx.prisma.user.findFirst()
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
