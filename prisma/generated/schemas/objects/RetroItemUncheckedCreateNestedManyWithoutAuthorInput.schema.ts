import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateManyAuthorInputEnvelopeObjectSchema } from './RetroItemCreateManyAuthorInputEnvelope.schema'
import { RetroItemCreateOrConnectWithoutAuthorInputObjectSchema } from './RetroItemCreateOrConnectWithoutAuthorInput.schema'
import { RetroItemCreateWithoutAuthorInputObjectSchema } from './RetroItemCreateWithoutAuthorInput.schema'
import { RetroItemUncheckedCreateWithoutAuthorInputObjectSchema } from './RetroItemUncheckedCreateWithoutAuthorInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUncheckedCreateNestedManyWithoutAuthorInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RetroItemCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => RetroItemCreateWithoutAuthorInputObjectSchema).array(),
        z.lazy(() => RetroItemUncheckedCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => RetroItemUncheckedCreateWithoutAuthorInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RetroItemCreateOrConnectWithoutAuthorInputObjectSchema),
        z.lazy(() => RetroItemCreateOrConnectWithoutAuthorInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => RetroItemCreateManyAuthorInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const RetroItemUncheckedCreateNestedManyWithoutAuthorInputObjectSchema = Schema
