import { z } from 'zod'

import { ItemCollectionWhereInputObjectSchema } from './objects/ItemCollectionWhereInput.schema'

export const ItemCollectionDeleteManySchema = z.object({
  where: ItemCollectionWhereInputObjectSchema.optional(),
})
