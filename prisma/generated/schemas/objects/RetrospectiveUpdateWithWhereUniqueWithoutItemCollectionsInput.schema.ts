import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveUncheckedUpdateWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUncheckedUpdateWithoutItemCollectionsInput.schema'
import { RetrospectiveUpdateWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUpdateWithoutItemCollectionsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpdateWithWhereUniqueWithoutItemCollectionsInput> = z
  .object({
    where: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RetrospectiveUpdateWithoutItemCollectionsInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedUpdateWithoutItemCollectionsInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveUpdateWithWhereUniqueWithoutItemCollectionsInputObjectSchema = Schema
