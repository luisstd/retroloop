import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionCreateWithoutItemsInputObjectSchema } from './ItemCollectionCreateWithoutItemsInput.schema'
import { ItemCollectionUncheckedCreateWithoutItemsInputObjectSchema } from './ItemCollectionUncheckedCreateWithoutItemsInput.schema'
import { ItemCollectionUncheckedUpdateWithoutItemsInputObjectSchema } from './ItemCollectionUncheckedUpdateWithoutItemsInput.schema'
import { ItemCollectionUpdateWithoutItemsInputObjectSchema } from './ItemCollectionUpdateWithoutItemsInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemCollectionUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => ItemCollectionUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCollectionCreateWithoutItemsInputObjectSchema),
      z.lazy(() => ItemCollectionUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict()

export const ItemCollectionUpsertWithoutItemsInputObjectSchema = Schema
