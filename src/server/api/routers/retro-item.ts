import { z } from 'zod'

import { RetroItemCreateInputSchema, RetroItemUpdateInputSchema } from '@/schemas/retro-item'
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'

export const retroItemRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.retroItem.findMany()
  }),
  getAllByRetroId: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.retroItem.findMany({
      where: {
        retrospectiveId: input,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  }),
  getAllByRetroIdFiltered: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
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
  getAllByRetroIdSorted: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.retroItem.findMany({
      where: {
        retrospectiveId: input,
      },
      orderBy: {
        votes: 'desc',
      },
    })
  }),
  add: protectedProcedure.input(RetroItemCreateInputSchema).mutation(({ ctx, input }) => {
    return ctx.db.retroItem.create({ data: input })
  }),
  edit: protectedProcedure.input(RetroItemUpdateInputSchema).mutation(({ ctx, input }) => {
    return ctx.db.retroItem.update({
      where: {
        id: input.id,
      },
      data: input,
    })
  }),
  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.db.retroItem.delete({
      where: {
        id: input,
      },
    })
  }),
})
