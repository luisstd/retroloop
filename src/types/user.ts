import { User } from '@prisma/client'

export type UserInput = Omit<User, 'id' | 'createdAt' | 'emailVerified'>

export type UserSession = {
  id: string
  name: string
  email: string
  image: string
}
