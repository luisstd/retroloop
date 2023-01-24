import { z } from 'zod'

import { ItemCollectionAvgAggregateInputObjectSchema } from './objects/ItemCollectionAvgAggregateInput.schema'
import { ItemCollectionCountAggregateInputObjectSchema } from './objects/ItemCollectionCountAggregateInput.schema'
import { ItemCollectionMaxAggregateInputObjectSchema } from './objects/ItemCollectionMaxAggregateInput.schema'
import { ItemCollectionMinAggregateInputObjectSchema } from './objects/ItemCollectionMinAggregateInput.schema'
import { ItemCollectionOrderByWithRelationInputObjectSchema } from './objects/ItemCollectionOrderByWithRelationInput.schema'
import { ItemCollectionSumAggregateInputObjectSchema } from './objects/ItemCollectionSumAggregateInput.schema'
import { ItemCollectionWhereInputObjectSchema } from './objects/ItemCollectionWhereInput.schema'
import { ItemCollectionWhereUniqueInputObjectSchema } from './objects/ItemCollectionWhereUniqueInput.schema'

export const ItemCollectionAggregateSchema = z.object({
  orderBy: z
    .union([
      ItemCollectionOrderByWithRelationInputObjectSchema,
      ItemCollectionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ItemCollectionWhereInputObjectSchema.optional(),
  cursor: ItemCollectionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), ItemCollectionCountAggregateInputObjectSchema]).optional(),
  _min: ItemCollectionMinAggregateInputObjectSchema.optional(),
  _max: ItemCollectionMaxAggregateInputObjectSchema.optional(),
  _avg: ItemCollectionAvgAggregateInputObjectSchema.optional(),
  _sum: ItemCollectionSumAggregateInputObjectSchema.optional(),
})
