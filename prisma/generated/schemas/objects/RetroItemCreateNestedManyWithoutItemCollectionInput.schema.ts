import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateManyItemCollectionInputEnvelopeObjectSchema } from './RetroItemCreateManyItemCollectionInputEnvelope.schema'
import { RetroItemCreateOrConnectWithoutItemCollectionInputObjectSchema } from './RetroItemCreateOrConnectWithoutItemCollectionInput.schema'
import { RetroItemCreateWithoutItemCollectionInputObjectSchema } from './RetroItemCreateWithoutItemCollectionInput.schema'
import { RetroItemUncheckedCreateWithoutItemCollectionInputObjectSchema } from './RetroItemUncheckedCreateWithoutItemCollectionInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemCreateNestedManyWithoutItemCollectionInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RetroItemCreateWithoutItemCollectionInputObjectSchema),
        z.lazy(() => RetroItemCreateWithoutItemCollectionInputObjectSchema).array(),
        z.lazy(() => RetroItemUncheckedCreateWithoutItemCollectionInputObjectSchema),
        z.lazy(() => RetroItemUncheckedCreateWithoutItemCollectionInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RetroItemCreateOrConnectWithoutItemCollectionInputObjectSchema),
        z.lazy(() => RetroItemCreateOrConnectWithoutItemCollectionInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => RetroItemCreateManyItemCollectionInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const RetroItemCreateNestedManyWithoutItemCollectionInputObjectSchema = Schema
