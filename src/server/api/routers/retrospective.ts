import { z } from 'zod'

import {
  RetrospectiveCreateInputSchema,
  RetrospectiveUpdateInputSchema,
} from '@/schemas/retrospective'
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const retrospectiveRouter = createTRPCRouter({
  getAll: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.retrospective.findMany({
      where: {
        participants: {
          some: {
            id: input,
          },
        },
      },
    })
  }),
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.retrospective.findUnique({
      where: {
        id: input,
      },
    })
  }),
  add: publicProcedure.input(RetrospectiveCreateInputSchema).mutation(async ({ ctx, input }) => {
    const userId = ctx.session?.user?.id

    return ctx.db.retrospective.create({
      data: {
        ...input,
        participants: {
          connect: [
            {
              id: userId,
            },
          ],
        },
      },
    })
  }),
  addParticipant: publicProcedure
    .input(z.object({ retroId: z.string(), userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { retroId, userId } = input

      return ctx.db.retrospective.update({
        where: {
          id: retroId,
        },
        data: {
          participants: {
            connect: [{ id: userId }],
          },
        },
      })
    }),
  edit: publicProcedure.input(RetrospectiveUpdateInputSchema).mutation(({ ctx, input }) => {
    return ctx.db.retrospective.update({
      where: {
        id: input.id,
      },
      data: input,
    })
  }),
})
