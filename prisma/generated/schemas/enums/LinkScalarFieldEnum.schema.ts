import { z } from 'zod'

export const LinkScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'url',
  'expiration',
  'retrospectiveId',
  'workspaceId',
])
