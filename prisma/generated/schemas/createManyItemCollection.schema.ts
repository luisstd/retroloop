import { z } from 'zod'

import { ItemCollectionCreateManyInputObjectSchema } from './objects/ItemCollectionCreateManyInput.schema'

export const ItemCollectionCreateManySchema = z.object({
  data: z.union([
    ItemCollectionCreateManyInputObjectSchema,
    z.array(ItemCollectionCreateManyInputObjectSchema),
  ]),
})
