import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionCreateOrConnectWithoutRetrospectivesInputObjectSchema } from './ItemCollectionCreateOrConnectWithoutRetrospectivesInput.schema'
import { ItemCollectionCreateWithoutRetrospectivesInputObjectSchema } from './ItemCollectionCreateWithoutRetrospectivesInput.schema'
import { ItemCollectionUncheckedCreateWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUncheckedCreateWithoutRetrospectivesInput.schema'
import { ItemCollectionWhereUniqueInputObjectSchema } from './ItemCollectionWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionUncheckedCreateNestedManyWithoutRetrospectivesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCollectionCreateWithoutRetrospectivesInputObjectSchema),
          z.lazy(() => ItemCollectionCreateWithoutRetrospectivesInputObjectSchema).array(),
          z.lazy(() => ItemCollectionUncheckedCreateWithoutRetrospectivesInputObjectSchema),
          z.lazy(() => ItemCollectionUncheckedCreateWithoutRetrospectivesInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemCollectionCreateOrConnectWithoutRetrospectivesInputObjectSchema),
          z.lazy(() => ItemCollectionCreateOrConnectWithoutRetrospectivesInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema),
          z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const ItemCollectionUncheckedCreateNestedManyWithoutRetrospectivesInputObjectSchema = Schema
