import { z } from 'zod'

import { ItemCollectionWhereUniqueInputObjectSchema } from './objects/ItemCollectionWhereUniqueInput.schema'

export const ItemCollectionFindUniqueSchema = z.object({
  where: ItemCollectionWhereUniqueInputObjectSchema,
})
