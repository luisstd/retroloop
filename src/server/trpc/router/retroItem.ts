import { z } from 'zod'

import { t } from '../trpc'

export const RetroItemCreateInputSchema = z.object({
  content: z.string(),
  type: z.string(),
  retrospectiveId: z.string(),
  votes: z.number().nullable(),
})

export const RetroItemUpdateInputSchema = z.object({
  id: z.string(),
  content: z.string(),
  type: z.string(),
  retrospectiveId: z.string(),
  userId: z.string().nullable(),
  votes: z.number().nullable(),
})

export const retroItemRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.retroItem.findMany()
  }),
  getAllByRetroId: t.procedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.retroItem.findMany({
      where: {
        retrospectiveId: input,
      },
    })
  }),
  add: t.procedure.input(RetroItemCreateInputSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.retroItem.create({ data: input })
  }),
  edit: t.procedure.input(RetroItemUpdateInputSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.retroItem.update({
      where: {
        id: input.id,
      },
      data: input,
    })
  }),
  delete: t.procedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.retroItem.delete({
      where: {
        id: input,
      },
    })
  }),
})
