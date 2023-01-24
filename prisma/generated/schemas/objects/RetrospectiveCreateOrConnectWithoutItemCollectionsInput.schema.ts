import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateWithoutItemCollectionsInputObjectSchema } from './RetrospectiveCreateWithoutItemCollectionsInput.schema'
import { RetrospectiveUncheckedCreateWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutItemCollectionsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveCreateOrConnectWithoutItemCollectionsInput> = z
  .object({
    where: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RetrospectiveCreateWithoutItemCollectionsInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedCreateWithoutItemCollectionsInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveCreateOrConnectWithoutItemCollectionsInputObjectSchema = Schema
