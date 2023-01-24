import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateWithoutItemsInputObjectSchema } from './RetrospectiveCreateWithoutItemsInput.schema'
import { RetrospectiveUncheckedCreateWithoutItemsInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutItemsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveCreateOrConnectWithoutItemsInput> = z
  .object({
    where: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RetrospectiveCreateWithoutItemsInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveCreateOrConnectWithoutItemsInputObjectSchema = Schema
