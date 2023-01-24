import { z } from 'zod'

import { ItemCollectionWhereUniqueInputObjectSchema } from './objects/ItemCollectionWhereUniqueInput.schema'

export const ItemCollectionDeleteOneSchema = z.object({
  where: ItemCollectionWhereUniqueInputObjectSchema,
})
