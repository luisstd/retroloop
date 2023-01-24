import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateManyRetrospectiveInputEnvelopeObjectSchema } from './RetroItemCreateManyRetrospectiveInputEnvelope.schema'
import { RetroItemCreateOrConnectWithoutRetrospectiveInputObjectSchema } from './RetroItemCreateOrConnectWithoutRetrospectiveInput.schema'
import { RetroItemCreateWithoutRetrospectiveInputObjectSchema } from './RetroItemCreateWithoutRetrospectiveInput.schema'
import { RetroItemUncheckedCreateWithoutRetrospectiveInputObjectSchema } from './RetroItemUncheckedCreateWithoutRetrospectiveInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemCreateNestedManyWithoutRetrospectiveInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RetroItemCreateWithoutRetrospectiveInputObjectSchema),
        z.lazy(() => RetroItemCreateWithoutRetrospectiveInputObjectSchema).array(),
        z.lazy(() => RetroItemUncheckedCreateWithoutRetrospectiveInputObjectSchema),
        z.lazy(() => RetroItemUncheckedCreateWithoutRetrospectiveInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RetroItemCreateOrConnectWithoutRetrospectiveInputObjectSchema),
        z.lazy(() => RetroItemCreateOrConnectWithoutRetrospectiveInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => RetroItemCreateManyRetrospectiveInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const RetroItemCreateNestedManyWithoutRetrospectiveInputObjectSchema = Schema
