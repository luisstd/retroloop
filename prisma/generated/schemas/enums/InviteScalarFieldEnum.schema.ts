import { z } from 'zod'

export const InviteScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'userId', 'retrospectiveId'])
