import { z } from 'zod'

import { ItemCollectionScalarFieldEnumSchema } from './enums/ItemCollectionScalarFieldEnum.schema'
import { ItemCollectionOrderByWithRelationInputObjectSchema } from './objects/ItemCollectionOrderByWithRelationInput.schema'
import { ItemCollectionWhereInputObjectSchema } from './objects/ItemCollectionWhereInput.schema'
import { ItemCollectionWhereUniqueInputObjectSchema } from './objects/ItemCollectionWhereUniqueInput.schema'

export const ItemCollectionFindManySchema = z.object({
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
  distinct: z.array(ItemCollectionScalarFieldEnumSchema).optional(),
})
