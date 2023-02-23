import { z } from 'zod'

export const UserCreateInputSchema = z.object({
  email: z.string(),
  name: z.string().nullable(),
})

export const UserUpdateInputSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
})
