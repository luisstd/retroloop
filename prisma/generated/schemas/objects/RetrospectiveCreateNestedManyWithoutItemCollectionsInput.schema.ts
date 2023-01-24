import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateOrConnectWithoutItemCollectionsInputObjectSchema } from './RetrospectiveCreateOrConnectWithoutItemCollectionsInput.schema'
import { RetrospectiveCreateWithoutItemCollectionsInputObjectSchema } from './RetrospectiveCreateWithoutItemCollectionsInput.schema'
import { RetrospectiveUncheckedCreateWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutItemCollectionsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveCreateNestedManyWithoutItemCollectionsInput> = z
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
    connect: z
      .union([
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const RetrospectiveCreateNestedManyWithoutItemCollectionsInputObjectSchema = Schema
