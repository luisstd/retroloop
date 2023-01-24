import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionCreateOrConnectWithoutRetrospectivesInputObjectSchema } from './ItemCollectionCreateOrConnectWithoutRetrospectivesInput.schema'
import { ItemCollectionCreateWithoutRetrospectivesInputObjectSchema } from './ItemCollectionCreateWithoutRetrospectivesInput.schema'
import { ItemCollectionScalarWhereInputObjectSchema } from './ItemCollectionScalarWhereInput.schema'
import { ItemCollectionUncheckedCreateWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUncheckedCreateWithoutRetrospectivesInput.schema'
import { ItemCollectionUpdateManyWithWhereWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUpdateManyWithWhereWithoutRetrospectivesInput.schema'
import { ItemCollectionUpdateWithWhereUniqueWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUpdateWithWhereUniqueWithoutRetrospectivesInput.schema'
import { ItemCollectionUpsertWithWhereUniqueWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUpsertWithWhereUniqueWithoutRetrospectivesInput.schema'
import { ItemCollectionWhereUniqueInputObjectSchema } from './ItemCollectionWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionUncheckedUpdateManyWithoutRetrospectivesNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => ItemCollectionUpsertWithWhereUniqueWithoutRetrospectivesInputObjectSchema),
          z
            .lazy(() => ItemCollectionUpsertWithWhereUniqueWithoutRetrospectivesInputObjectSchema)
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema),
          z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema),
          z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema),
          z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema),
          z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ItemCollectionUpdateWithWhereUniqueWithoutRetrospectivesInputObjectSchema),
          z
            .lazy(() => ItemCollectionUpdateWithWhereUniqueWithoutRetrospectivesInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ItemCollectionUpdateManyWithWhereWithoutRetrospectivesInputObjectSchema),
          z
            .lazy(() => ItemCollectionUpdateManyWithWhereWithoutRetrospectivesInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ItemCollectionScalarWhereInputObjectSchema),
          z.lazy(() => ItemCollectionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const ItemCollectionUncheckedUpdateManyWithoutRetrospectivesNestedInputObjectSchema = Schema
