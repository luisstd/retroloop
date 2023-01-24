import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionCreateOrConnectWithoutItemsInputObjectSchema } from './ItemCollectionCreateOrConnectWithoutItemsInput.schema'
import { ItemCollectionCreateWithoutItemsInputObjectSchema } from './ItemCollectionCreateWithoutItemsInput.schema'
import { ItemCollectionUncheckedCreateWithoutItemsInputObjectSchema } from './ItemCollectionUncheckedCreateWithoutItemsInput.schema'
import { ItemCollectionUncheckedUpdateWithoutItemsInputObjectSchema } from './ItemCollectionUncheckedUpdateWithoutItemsInput.schema'
import { ItemCollectionUpdateWithoutItemsInputObjectSchema } from './ItemCollectionUpdateWithoutItemsInput.schema'
import { ItemCollectionUpsertWithoutItemsInputObjectSchema } from './ItemCollectionUpsertWithoutItemsInput.schema'
import { ItemCollectionWhereUniqueInputObjectSchema } from './ItemCollectionWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionUpdateOneWithoutItemsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemCollectionCreateWithoutItemsInputObjectSchema),
        z.lazy(() => ItemCollectionUncheckedCreateWithoutItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ItemCollectionCreateOrConnectWithoutItemsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => ItemCollectionUpsertWithoutItemsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ItemCollectionUpdateWithoutItemsInputObjectSchema),
        z.lazy(() => ItemCollectionUncheckedUpdateWithoutItemsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const ItemCollectionUpdateOneWithoutItemsNestedInputObjectSchema = Schema
