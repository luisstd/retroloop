import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionCreateOrConnectWithoutItemsInputObjectSchema } from './ItemCollectionCreateOrConnectWithoutItemsInput.schema'
import { ItemCollectionCreateWithoutItemsInputObjectSchema } from './ItemCollectionCreateWithoutItemsInput.schema'
import { ItemCollectionUncheckedCreateWithoutItemsInputObjectSchema } from './ItemCollectionUncheckedCreateWithoutItemsInput.schema'
import { ItemCollectionWhereUniqueInputObjectSchema } from './ItemCollectionWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionCreateNestedOneWithoutItemsInput> = z
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
    connect: z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const ItemCollectionCreateNestedOneWithoutItemsInputObjectSchema = Schema
