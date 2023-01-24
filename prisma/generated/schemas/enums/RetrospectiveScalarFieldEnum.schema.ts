import { z } from 'zod'

export const RetrospectiveScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'name',
  'date',
  'phase',
  'timerExpiration',
  'workspaceId',
])
