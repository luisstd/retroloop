import { t } from '../trpc'
import { z } from 'zod'

export const retrospectiveRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.retrospective.findMany()
  }),
  getFirst: t.procedure.query(({ ctx }) => {
    return ctx.prisma.retrospective.findFirst()
  }),
  add: t.procedure
    .input(
      z.object({
        name: z.string(),
        date: z.date(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.retrospective.create({ data: input })
    }),
})
