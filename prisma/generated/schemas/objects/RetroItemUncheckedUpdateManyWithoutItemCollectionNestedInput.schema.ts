import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateManyItemCollectionInputEnvelopeObjectSchema } from './RetroItemCreateManyItemCollectionInputEnvelope.schema'
import { RetroItemCreateOrConnectWithoutItemCollectionInputObjectSchema } from './RetroItemCreateOrConnectWithoutItemCollectionInput.schema'
import { RetroItemCreateWithoutItemCollectionInputObjectSchema } from './RetroItemCreateWithoutItemCollectionInput.schema'
import { RetroItemScalarWhereInputObjectSchema } from './RetroItemScalarWhereInput.schema'
import { RetroItemUncheckedCreateWithoutItemCollectionInputObjectSchema } from './RetroItemUncheckedCreateWithoutItemCollectionInput.schema'
import { RetroItemUpdateManyWithWhereWithoutItemCollectionInputObjectSchema } from './RetroItemUpdateManyWithWhereWithoutItemCollectionInput.schema'
import { RetroItemUpdateWithWhereUniqueWithoutItemCollectionInputObjectSchema } from './RetroItemUpdateWithWhereUniqueWithoutItemCollectionInput.schema'
import { RetroItemUpsertWithWhereUniqueWithoutItemCollectionInputObjectSchema } from './RetroItemUpsertWithWhereUniqueWithoutItemCollectionInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUncheckedUpdateManyWithoutItemCollectionNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => RetroItemUpsertWithWhereUniqueWithoutItemCollectionInputObjectSchema),
        z.lazy(() => RetroItemUpsertWithWhereUniqueWithoutItemCollectionInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => RetroItemCreateManyItemCollectionInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
        z.lazy(() => RetroItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RetroItemUpdateWithWhereUniqueWithoutItemCollectionInputObjectSchema),
        z.lazy(() => RetroItemUpdateWithWhereUniqueWithoutItemCollectionInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RetroItemUpdateManyWithWhereWithoutItemCollectionInputObjectSchema),
        z.lazy(() => RetroItemUpdateManyWithWhereWithoutItemCollectionInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RetroItemScalarWhereInputObjectSchema),
        z.lazy(() => RetroItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const RetroItemUncheckedUpdateManyWithoutItemCollectionNestedInputObjectSchema = Schema
