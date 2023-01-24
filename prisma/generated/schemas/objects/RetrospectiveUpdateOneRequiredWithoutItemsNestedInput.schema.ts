import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateOrConnectWithoutItemsInputObjectSchema } from './RetrospectiveCreateOrConnectWithoutItemsInput.schema'
import { RetrospectiveCreateWithoutItemsInputObjectSchema } from './RetrospectiveCreateWithoutItemsInput.schema'
import { RetrospectiveUncheckedCreateWithoutItemsInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutItemsInput.schema'
import { RetrospectiveUncheckedUpdateWithoutItemsInputObjectSchema } from './RetrospectiveUncheckedUpdateWithoutItemsInput.schema'
import { RetrospectiveUpdateWithoutItemsInputObjectSchema } from './RetrospectiveUpdateWithoutItemsInput.schema'
import { RetrospectiveUpsertWithoutItemsInputObjectSchema } from './RetrospectiveUpsertWithoutItemsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpdateOneRequiredWithoutItemsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RetrospectiveCreateWithoutItemsInputObjectSchema),
        z.lazy(() => RetrospectiveUncheckedCreateWithoutItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RetrospectiveCreateOrConnectWithoutItemsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => RetrospectiveUpsertWithoutItemsInputObjectSchema).optional(),
    connect: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => RetrospectiveUpdateWithoutItemsInputObjectSchema),
        z.lazy(() => RetrospectiveUncheckedUpdateWithoutItemsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const RetrospectiveUpdateOneRequiredWithoutItemsNestedInputObjectSchema = Schema
