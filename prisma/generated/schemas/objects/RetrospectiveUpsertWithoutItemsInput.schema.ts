import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateWithoutItemsInputObjectSchema } from './RetrospectiveCreateWithoutItemsInput.schema'
import { RetrospectiveUncheckedCreateWithoutItemsInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutItemsInput.schema'
import { RetrospectiveUncheckedUpdateWithoutItemsInputObjectSchema } from './RetrospectiveUncheckedUpdateWithoutItemsInput.schema'
import { RetrospectiveUpdateWithoutItemsInputObjectSchema } from './RetrospectiveUpdateWithoutItemsInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => RetrospectiveUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RetrospectiveCreateWithoutItemsInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveUpsertWithoutItemsInputObjectSchema = Schema
