import { z } from 'zod'

export const UserCreateInputSchema = z.object({
  email: z.string(),
  name: z.string(),
})

export const UserUpdateInputSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
})
