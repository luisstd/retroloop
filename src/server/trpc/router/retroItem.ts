import { t } from '../trpc'
import { z } from 'zod'

export const retroItemRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.retroItem.findMany()
  }),
  getFirst: t.procedure.query(({ ctx }) => {
    return ctx.prisma.retroItem.findFirst()
  }),
  getAllByRetroId: t.procedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.retroItem.findMany({
      where: {
        retrospectiveId: input,
      },
    })
  }),
  add: t.procedure
    .input(
      z.object({
        content: z.string(),
        type: z.string(),
        retrospective: z.object({
          id: z.string(),
          createdAt: z.date(),
          name: z.string(),
          timerExpiration: z.date(),
          workspaceId: z.string(),
        }),
        itemCollection: z.object({
          id: z.string(),
          createdAt: z.date(),
          votes: z.number(),
          retrospectiveId: z.string(),
        }),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.retroItem.create({ data: input })
    }),
})
