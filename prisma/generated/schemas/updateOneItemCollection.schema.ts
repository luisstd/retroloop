import { z } from 'zod'

import { ItemCollectionUncheckedUpdateInputObjectSchema } from './objects/ItemCollectionUncheckedUpdateInput.schema'
import { ItemCollectionUpdateInputObjectSchema } from './objects/ItemCollectionUpdateInput.schema'
import { ItemCollectionWhereUniqueInputObjectSchema } from './objects/ItemCollectionWhereUniqueInput.schema'

export const ItemCollectionUpdateOneSchema = z.object({
  data: z.union([
    ItemCollectionUpdateInputObjectSchema,
    ItemCollectionUncheckedUpdateInputObjectSchema,
  ]),
  where: ItemCollectionWhereUniqueInputObjectSchema,
})
