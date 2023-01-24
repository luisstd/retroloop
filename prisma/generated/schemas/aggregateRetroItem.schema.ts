import { z } from 'zod'

import { RetroItemAvgAggregateInputObjectSchema } from './objects/RetroItemAvgAggregateInput.schema'
import { RetroItemCountAggregateInputObjectSchema } from './objects/RetroItemCountAggregateInput.schema'
import { RetroItemMaxAggregateInputObjectSchema } from './objects/RetroItemMaxAggregateInput.schema'
import { RetroItemMinAggregateInputObjectSchema } from './objects/RetroItemMinAggregateInput.schema'
import { RetroItemOrderByWithRelationInputObjectSchema } from './objects/RetroItemOrderByWithRelationInput.schema'
import { RetroItemSumAggregateInputObjectSchema } from './objects/RetroItemSumAggregateInput.schema'
import { RetroItemWhereInputObjectSchema } from './objects/RetroItemWhereInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './objects/RetroItemWhereUniqueInput.schema'

export const RetroItemAggregateSchema = z.object({
  orderBy: z
    .union([
      RetroItemOrderByWithRelationInputObjectSchema,
      RetroItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RetroItemWhereInputObjectSchema.optional(),
  cursor: RetroItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), RetroItemCountAggregateInputObjectSchema]).optional(),
  _min: RetroItemMinAggregateInputObjectSchema.optional(),
  _max: RetroItemMaxAggregateInputObjectSchema.optional(),
  _avg: RetroItemAvgAggregateInputObjectSchema.optional(),
  _sum: RetroItemSumAggregateInputObjectSchema.optional(),
})
