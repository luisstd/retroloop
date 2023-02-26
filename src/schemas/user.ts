import { z } from 'zod'

export const UserCreateInputSchema = z.object({
  email: z.string(),
  name: z.string().nullable(),
})

export const UserUpdateInputSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
})

export const UserSessionSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullable(),
  image: z.string().nullable(),
})
