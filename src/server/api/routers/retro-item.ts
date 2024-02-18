import { z } from 'zod'

import { RetroItemCreateInputSchema, RetroItemUpdateInputSchema } from '@/schemas/retro-item'
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const retroItemRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.retroItem.findMany()
  }),
  getAllByRetroId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.retroItem.findMany({
      where: {
        retrospectiveId: input,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  }),
  getAllByRetroIdFiltered: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    const id = ctx.session?.user?.id
    return ctx.db.retroItem.findMany({
      where: {
        retrospectiveId: input,
        userId: id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  }),
  getAllByRetroIdSorted: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.retroItem.findMany({
      where: {
        retrospectiveId: input,
      },
      orderBy: {
        votes: 'desc',
      },
    })
  }),
  add: publicProcedure.input(RetroItemCreateInputSchema).mutation(({ ctx, input }) => {
    return ctx.db.retroItem.create({ data: input })
  }),
  edit: publicProcedure.input(RetroItemUpdateInputSchema).mutation(({ ctx, input }) => {
    return ctx.db.retroItem.update({
      where: {
        id: input.id,
      },
      data: input,
    })
  }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.db.retroItem.delete({
      where: {
        id: input,
      },
    })
  }),
})
