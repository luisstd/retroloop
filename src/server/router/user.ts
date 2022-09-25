import { createRouter } from './context'
import { z } from 'zod'

export const userRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany()
    },
  })
  .query('getFirst', {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findFirst()
    },
  })
  .mutation('add', {
    input: z.object({
      email: z.string(),
      name: z.string(),
      role: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.create({ data: input })
    },
  })
