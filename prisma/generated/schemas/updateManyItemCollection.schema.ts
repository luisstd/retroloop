import { z } from 'zod'

import { ItemCollectionUpdateManyMutationInputObjectSchema } from './objects/ItemCollectionUpdateManyMutationInput.schema'
import { ItemCollectionWhereInputObjectSchema } from './objects/ItemCollectionWhereInput.schema'

export const ItemCollectionUpdateManySchema = z.object({
  data: ItemCollectionUpdateManyMutationInputObjectSchema,
  where: ItemCollectionWhereInputObjectSchema.optional(),
})
