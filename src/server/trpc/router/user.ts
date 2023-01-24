import { UserCreateInputObjectSchema } from 'prisma/generated/schemas'

import { t } from '../trpc'

export const userRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany()
  }),
  add: t.procedure.input(UserCreateInputObjectSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.user.create({ data: input })
  }),
})
