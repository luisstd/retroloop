import { User } from '@prisma/client'

export type UserInput = Omit<User, 'id' | 'createdAt' | 'emailVerified'>
