import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'

export const authRouter = createTRPCRouter({
  getSession: protectedProcedure.query(({ ctx }) => {
    return ctx.session
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return 'You are logged in and can see this secret message!'
  }),
})
