import {
  UserCreateInputSchema,
  UserSessionSchema,
  UserUpdateInputSchema,
} from 'src/app/schemas/user'

import { t } from '../trpc'

export const userRouter = t.router({
  getLoggedIn: t.procedure.query(({ ctx }) => {
    return ctx.prisma.user.findUnique({
      where: {
        id: ctx.session?.user?.id,
      },
    })
  }),
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
    return ctx.prisma.user.update({
      where: {
        id: input.id,
      },
      data: input,
    })
  }),
  delete: t.procedure.input(UserSessionSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.user.delete({
      where: {
        id: input.id,
      },
    })
  }),
})
