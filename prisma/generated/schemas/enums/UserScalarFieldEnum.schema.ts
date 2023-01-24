import { z } from 'zod'

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'email',
  'emailVerified',
  'name',
  'role',
  'image',
])
