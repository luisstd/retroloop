import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateWithoutRetrospectiveInputObjectSchema } from './RetroItemCreateWithoutRetrospectiveInput.schema'
import { RetroItemUncheckedCreateWithoutRetrospectiveInputObjectSchema } from './RetroItemUncheckedCreateWithoutRetrospectiveInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemCreateOrConnectWithoutRetrospectiveInput> = z
  .object({
    where: z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RetroItemCreateWithoutRetrospectiveInputObjectSchema),
      z.lazy(() => RetroItemUncheckedCreateWithoutRetrospectiveInputObjectSchema),
    ]),
  })
  .strict()

export const RetroItemCreateOrConnectWithoutRetrospectiveInputObjectSchema = Schema
