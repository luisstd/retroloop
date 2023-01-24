import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionCreateWithoutItemsInputObjectSchema } from './ItemCollectionCreateWithoutItemsInput.schema'
import { ItemCollectionUncheckedCreateWithoutItemsInputObjectSchema } from './ItemCollectionUncheckedCreateWithoutItemsInput.schema'
import { ItemCollectionWhereUniqueInputObjectSchema } from './ItemCollectionWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionCreateOrConnectWithoutItemsInput> = z
  .object({
    where: z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCollectionCreateWithoutItemsInputObjectSchema),
      z.lazy(() => ItemCollectionUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict()

export const ItemCollectionCreateOrConnectWithoutItemsInputObjectSchema = Schema
