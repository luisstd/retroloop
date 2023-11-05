import { UserCreateInputSchema, UserUpdateInputSchema } from 'src/app/schemas/user'
import { z } from 'zod'

export type UserCreateInput = z.infer<typeof UserCreateInputSchema>

export type UserUpdateInput = z.infer<typeof UserUpdateInputSchema>

export type UserSession = {
  id: string
  name: string
  email: string
  image: string
}
