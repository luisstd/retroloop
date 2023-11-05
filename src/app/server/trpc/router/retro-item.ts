import { RetroItemCreateInputSchema, RetroItemUpdateInputSchema } from 'src/app/schemas/retro-item'
import { z } from 'zod'

import { t } from '../trpc'

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
