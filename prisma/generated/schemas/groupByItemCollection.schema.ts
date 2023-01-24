import { z } from 'zod'

import { ItemCollectionScalarFieldEnumSchema } from './enums/ItemCollectionScalarFieldEnum.schema'
import { ItemCollectionOrderByWithAggregationInputObjectSchema } from './objects/ItemCollectionOrderByWithAggregationInput.schema'
import { ItemCollectionScalarWhereWithAggregatesInputObjectSchema } from './objects/ItemCollectionScalarWhereWithAggregatesInput.schema'
import { ItemCollectionWhereInputObjectSchema } from './objects/ItemCollectionWhereInput.schema'

export const ItemCollectionGroupBySchema = z.object({
  where: ItemCollectionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ItemCollectionOrderByWithAggregationInputObjectSchema,
      ItemCollectionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ItemCollectionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ItemCollectionScalarFieldEnumSchema),
})
