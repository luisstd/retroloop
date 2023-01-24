import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateWithoutItemCollectionsInputObjectSchema } from './RetrospectiveCreateWithoutItemCollectionsInput.schema'
import { RetrospectiveUncheckedCreateWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutItemCollectionsInput.schema'
import { RetrospectiveUncheckedUpdateWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUncheckedUpdateWithoutItemCollectionsInput.schema'
import { RetrospectiveUpdateWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUpdateWithoutItemCollectionsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpsertWithWhereUniqueWithoutItemCollectionsInput> = z
  .object({
    where: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RetrospectiveUpdateWithoutItemCollectionsInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedUpdateWithoutItemCollectionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RetrospectiveCreateWithoutItemCollectionsInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedCreateWithoutItemCollectionsInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveUpsertWithWhereUniqueWithoutItemCollectionsInputObjectSchema = Schema
