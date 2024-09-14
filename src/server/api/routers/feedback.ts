import { z } from 'zod'

import {
  FeedbackCreateInputSchema,
  FeedbackUpdateInputSchema,
} from '@/schemas/feedback'
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'

export const feedbackRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.feedback.findMany()
  }),
  getAllByRetroId: protectedProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      return ctx.db.feedback.findMany({
        where: {
          retrospectiveId: input,
        },
        orderBy: {
          createdAt: 'desc',
        },
      })
    }),
  getAllByRetroIdFiltered: protectedProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      const id = ctx.session?.user?.id
      return ctx.db.feedback.findMany({
        where: {
          retrospectiveId: input,
          userId: id,
        },
        orderBy: {
          createdAt: 'desc',
        },
      })
    }),
  getAllByRetroIdSorted: protectedProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      return ctx.db.feedback.findMany({
        where: {
          retrospectiveId: input,
        },
        orderBy: {
          votes: 'desc',
        },
      })
    }),
  add: protectedProcedure
    .input(FeedbackCreateInputSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.feedback.create({ data: input })
    }),
  edit: protectedProcedure
    .input(FeedbackUpdateInputSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.feedback.update({
        where: {
          id: input.id,
        },
        data: input,
      })
    }),
  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.db.feedback.delete({
      where: {
        id: input,
      },
    })
  }),
})
