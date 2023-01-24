import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateOrConnectWithoutItemCollectionsInputObjectSchema } from './RetrospectiveCreateOrConnectWithoutItemCollectionsInput.schema'
import { RetrospectiveCreateWithoutItemCollectionsInputObjectSchema } from './RetrospectiveCreateWithoutItemCollectionsInput.schema'
import { RetrospectiveScalarWhereInputObjectSchema } from './RetrospectiveScalarWhereInput.schema'
import { RetrospectiveUncheckedCreateWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutItemCollectionsInput.schema'
import { RetrospectiveUpdateManyWithWhereWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUpdateManyWithWhereWithoutItemCollectionsInput.schema'
import { RetrospectiveUpdateWithWhereUniqueWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUpdateWithWhereUniqueWithoutItemCollectionsInput.schema'
import { RetrospectiveUpsertWithWhereUniqueWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUpsertWithWhereUniqueWithoutItemCollectionsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUncheckedUpdateManyWithoutItemCollectionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RetrospectiveCreateWithoutItemCollectionsInputObjectSchema),
          z.lazy(() => RetrospectiveCreateWithoutItemCollectionsInputObjectSchema).array(),
          z.lazy(() => RetrospectiveUncheckedCreateWithoutItemCollectionsInputObjectSchema),
          z.lazy(() => RetrospectiveUncheckedCreateWithoutItemCollectionsInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RetrospectiveCreateOrConnectWithoutItemCollectionsInputObjectSchema),
          z.lazy(() => RetrospectiveCreateOrConnectWithoutItemCollectionsInputObjectSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => RetrospectiveUpsertWithWhereUniqueWithoutItemCollectionsInputObjectSchema),
          z
            .lazy(() => RetrospectiveUpsertWithWhereUniqueWithoutItemCollectionsInputObjectSchema)
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
          z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
          z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
          z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
          z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => RetrospectiveUpdateWithWhereUniqueWithoutItemCollectionsInputObjectSchema),
          z
            .lazy(() => RetrospectiveUpdateWithWhereUniqueWithoutItemCollectionsInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => RetrospectiveUpdateManyWithWhereWithoutItemCollectionsInputObjectSchema),
          z
            .lazy(() => RetrospectiveUpdateManyWithWhereWithoutItemCollectionsInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RetrospectiveScalarWhereInputObjectSchema),
          z.lazy(() => RetrospectiveScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const RetrospectiveUncheckedUpdateManyWithoutItemCollectionsNestedInputObjectSchema = Schema
