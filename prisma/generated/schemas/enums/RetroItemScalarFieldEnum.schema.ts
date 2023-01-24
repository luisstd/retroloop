import { z } from 'zod'

export const RetroItemScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'content',
  'type',
  'itemCollectionId',
  'retrospectiveId',
  'votes',
  'userId',
])
