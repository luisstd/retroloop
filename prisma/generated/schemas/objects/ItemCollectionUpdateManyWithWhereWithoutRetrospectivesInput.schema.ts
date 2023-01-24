import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionScalarWhereInputObjectSchema } from './ItemCollectionScalarWhereInput.schema'
import { ItemCollectionUncheckedUpdateManyWithoutItemCollectionsInputObjectSchema } from './ItemCollectionUncheckedUpdateManyWithoutItemCollectionsInput.schema'
import { ItemCollectionUpdateManyMutationInputObjectSchema } from './ItemCollectionUpdateManyMutationInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionUpdateManyWithWhereWithoutRetrospectivesInput> = z
  .object({
    where: z.lazy(() => ItemCollectionScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ItemCollectionUpdateManyMutationInputObjectSchema),
      z.lazy(() => ItemCollectionUncheckedUpdateManyWithoutItemCollectionsInputObjectSchema),
    ]),
  })
  .strict()

export const ItemCollectionUpdateManyWithWhereWithoutRetrospectivesInputObjectSchema = Schema
