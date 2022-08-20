import { createRouter } from './context'
import { z } from 'zod'

export const retrospectiveRouter = createRouter().query('getAll', {
  async resolve({ ctx }) {
    return await ctx.prisma.retrospective.findMany()
  },
})
