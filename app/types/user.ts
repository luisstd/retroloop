import { z } from 'zod'

import { UserCreateInputSchema, UserUpdateInputSchema } from '@/app/schemas/user'

export type UserCreateInput = z.infer<typeof UserCreateInputSchema>

export type UserUpdateInput = z.infer<typeof UserUpdateInputSchema>

export type UserSession = {
  id: string
  name: string
  email: string
  image: string
}
