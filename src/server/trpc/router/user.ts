import { UserCreateInputSchema, UserUpdateInputSchema } from '@/schemas/user'

import { t } from '../trpc'

export const userRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany({
      where: {
        retrospectives: {
          some: {
            participants: {
              some: {
                id: {
                  equals: ctx.session?.user?.id,
                },
              },
            },
          },
        },
        NOT: {
          id: {
            equals: ctx.session?.user?.id,
          },
        },
      },
    })
  }),
  add: t.procedure.input(UserCreateInputSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.user.create({ data: input })
  }),
  edit: t.procedure.input(UserUpdateInputSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.user.create({ data: input })
  }),
})
