import { UserCreateInputSchema } from '@/schemas/user'

import { t } from '../trpc'

export const userRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany()
  }),
  add: t.procedure.input(UserCreateInputSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.user.create({ data: input })
  }),
})
