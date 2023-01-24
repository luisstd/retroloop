import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateOrConnectWithoutItemsInputObjectSchema } from './RetrospectiveCreateOrConnectWithoutItemsInput.schema'
import { RetrospectiveCreateWithoutItemsInputObjectSchema } from './RetrospectiveCreateWithoutItemsInput.schema'
import { RetrospectiveUncheckedCreateWithoutItemsInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutItemsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveCreateNestedOneWithoutItemsInput> = z
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
    connect: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const RetrospectiveCreateNestedOneWithoutItemsInputObjectSchema = Schema
