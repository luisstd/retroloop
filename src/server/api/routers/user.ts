import { UserCreateInputSchema, UserSessionSchema, UserUpdateInputSchema } from '@/schemas/user'
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const userRouter = createTRPCRouter({
  getLoggedIn: publicProcedure.query(({ ctx }) => {
    return ctx.db.user.findUnique({
      where: {
        id: ctx.session?.user?.id,
      },
    })
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany({
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
  add: publicProcedure.input(UserCreateInputSchema).mutation(({ ctx, input }) => {
    return ctx.db.user.create({ data: input })
  }),
  edit: publicProcedure.input(UserUpdateInputSchema).mutation(({ ctx, input }) => {
    return ctx.db.user.update({
      where: {
        id: input.id,
      },
      data: input,
    })
  }),
  delete: publicProcedure.input(UserSessionSchema).mutation(({ ctx, input }) => {
    return ctx.db.user.delete({
      where: {
        id: input.id,
      },
    })
  }),
})
