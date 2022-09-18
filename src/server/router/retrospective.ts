import { createRouter } from './context'
import { z } from 'zod'

export const retrospectiveRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.retrospective.findMany()
    },
  })
  .query('getFirst', {
    async resolve({ ctx }) {
      return await ctx.prisma.retrospective.findFirst()
    },
  })
  .mutation('add', {
    input: z.object({
      name: z.string(),
      date: z.date(),
      link: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.retrospective.create({ data: input })
    },
  })
