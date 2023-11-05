import { z } from 'zod'

import { t } from '../trpc'

export const retroItemCollectionRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.itemCollection.findMany()
  }),
  getAllByRetroId: t.procedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.itemCollection.findMany({
      where: {
        retrospectiveId: input,
      },
    })
  }),
  add: t.procedure
    .input(
      z.object({
        retrospectiveId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.itemCollection.create({ data: input })
    }),
  edit: t.procedure
    .input(
      z.object({
        id: z.string(),
        votes: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.itemCollection.update({
        where: {
          id: input.id,
        },
        data: input,
      })
    }),
  delete: t.procedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.itemCollection.delete({
      where: {
        id: input,
      },
    })
  }),
})
