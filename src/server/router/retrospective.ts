import { createRouter } from './context'

export const retrospectiveRouter = createRouter().query('getAll', {
  async resolve({ ctx }) {
    return await ctx.prisma.retrospective.findMany()
  },
})
