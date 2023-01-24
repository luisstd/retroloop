import { z } from 'zod'

import { SessionScalarFieldEnumSchema } from './enums/SessionScalarFieldEnum.schema'
import { SessionOrderByWithAggregationInputObjectSchema } from './objects/SessionOrderByWithAggregationInput.schema'
import { SessionScalarWhereWithAggregatesInputObjectSchema } from './objects/SessionScalarWhereWithAggregatesInput.schema'
import { SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema'

export const SessionGroupBySchema = z.object({
  where: SessionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SessionOrderByWithAggregationInputObjectSchema,
      SessionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SessionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SessionScalarFieldEnumSchema),
})
