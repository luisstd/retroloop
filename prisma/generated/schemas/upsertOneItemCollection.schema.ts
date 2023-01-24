import { z } from 'zod'

import { ItemCollectionCreateInputObjectSchema } from './objects/ItemCollectionCreateInput.schema'
import { ItemCollectionUncheckedCreateInputObjectSchema } from './objects/ItemCollectionUncheckedCreateInput.schema'
import { ItemCollectionUncheckedUpdateInputObjectSchema } from './objects/ItemCollectionUncheckedUpdateInput.schema'
import { ItemCollectionUpdateInputObjectSchema } from './objects/ItemCollectionUpdateInput.schema'
import { ItemCollectionWhereUniqueInputObjectSchema } from './objects/ItemCollectionWhereUniqueInput.schema'

export const ItemCollectionUpsertSchema = z.object({
  where: ItemCollectionWhereUniqueInputObjectSchema,
  create: z.union([
    ItemCollectionCreateInputObjectSchema,
    ItemCollectionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ItemCollectionUpdateInputObjectSchema,
    ItemCollectionUncheckedUpdateInputObjectSchema,
  ]),
})
