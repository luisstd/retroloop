import { z } from 'zod'

import { ItemCollectionCreateInputObjectSchema } from './objects/ItemCollectionCreateInput.schema'
import { ItemCollectionUncheckedCreateInputObjectSchema } from './objects/ItemCollectionUncheckedCreateInput.schema'

export const ItemCollectionCreateOneSchema = z.object({
  data: z.union([
    ItemCollectionCreateInputObjectSchema,
    ItemCollectionUncheckedCreateInputObjectSchema,
  ]),
})
