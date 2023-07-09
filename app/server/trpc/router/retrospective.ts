import { z } from 'zod'

import {
  RetrospectiveCreateInputSchema,
  RetrospectiveUpdateInputSchema,
} from '@/schemas/retrospective'

import { t } from '../trpc'

export const retrospectiveRouter = t.router({
  getAll: t.procedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.retrospective.findMany({
      where: {
        participants: {
          some: {
            id: input,
          },
        },
      },
    })
  }),
  getById: t.procedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.retrospective.findUnique({
      where: {
        id: input,
      },
    })
  }),
  add: t.procedure.input(RetrospectiveCreateInputSchema).mutation(async ({ ctx, input }) => {
    const userId = ctx.session?.user?.id

    return ctx.prisma.retrospective.create({
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
  edit: t.procedure.input(RetrospectiveUpdateInputSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.retrospective.update({
      where: {
        id: input.id,
      },
      data: input,
    })
  }),
})
