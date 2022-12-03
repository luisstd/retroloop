import { z } from 'zod'

import { t } from '../trpc'

export const retrospectiveRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.retrospective.findMany()
  }),
  getFirst: t.procedure.query(({ ctx }) => {
    return ctx.prisma.retrospective.findFirst()
  }),
  getById: t.procedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.retrospective.findUnique({
      where: {
        id: input,
      },
    })
  }),
  updateTimer: t.procedure
    .input(
      z.object({
        id: z.string().optional(),
        timerExpiration: z.date().optional(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.retrospective.update({
        where: {
          id: input.id,
        },
        data: { timerExpiration: input.timerExpiration },
      })
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
