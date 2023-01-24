import { z } from 'zod'

export const ItemCollectionScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'votes',
  'retrospectiveId',
])
