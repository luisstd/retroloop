import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateManyAuthorInputEnvelopeObjectSchema } from './RetroItemCreateManyAuthorInputEnvelope.schema'
import { RetroItemCreateOrConnectWithoutAuthorInputObjectSchema } from './RetroItemCreateOrConnectWithoutAuthorInput.schema'
import { RetroItemCreateWithoutAuthorInputObjectSchema } from './RetroItemCreateWithoutAuthorInput.schema'
import { RetroItemScalarWhereInputObjectSchema } from './RetroItemScalarWhereInput.schema'
import { RetroItemUncheckedCreateWithoutAuthorInputObjectSchema } from './RetroItemUncheckedCreateWithoutAuthorInput.schema'
import { RetroItemUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './RetroItemUpdateManyWithWhereWithoutAuthorInput.schema'
import { RetroItemUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './RetroItemUpdateWithWhereUniqueWithoutAuthorInput.schema'
import { RetroItemUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './RetroItemUpsertWithWhereUniqueWithoutAuthorInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUpdateManyWithoutAuthorNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => RetroItemUpsertWithWhereUniqueWithoutAuthorInputObjectSchema),
        z.lazy(() => RetroItemUpsertWithWhereUniqueWithoutAuthorInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => RetroItemCreateManyAuthorInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => RetroItemUpdateWithWhereUniqueWithoutAuthorInputObjectSchema),
        z.lazy(() => RetroItemUpdateWithWhereUniqueWithoutAuthorInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RetroItemUpdateManyWithWhereWithoutAuthorInputObjectSchema),
        z.lazy(() => RetroItemUpdateManyWithWhereWithoutAuthorInputObjectSchema).array(),
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

export const RetroItemUpdateManyWithoutAuthorNestedInputObjectSchema = Schema
