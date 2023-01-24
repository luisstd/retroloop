import { z } from 'zod'

import { RetroItemScalarFieldEnumSchema } from './enums/RetroItemScalarFieldEnum.schema'
import { RetroItemOrderByWithAggregationInputObjectSchema } from './objects/RetroItemOrderByWithAggregationInput.schema'
import { RetroItemScalarWhereWithAggregatesInputObjectSchema } from './objects/RetroItemScalarWhereWithAggregatesInput.schema'
import { RetroItemWhereInputObjectSchema } from './objects/RetroItemWhereInput.schema'

export const RetroItemGroupBySchema = z.object({
  where: RetroItemWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RetroItemOrderByWithAggregationInputObjectSchema,
      RetroItemOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RetroItemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RetroItemScalarFieldEnumSchema),
})
