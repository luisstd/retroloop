import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateManyRetrospectiveInputEnvelopeObjectSchema } from './RetroItemCreateManyRetrospectiveInputEnvelope.schema'
import { RetroItemCreateOrConnectWithoutRetrospectiveInputObjectSchema } from './RetroItemCreateOrConnectWithoutRetrospectiveInput.schema'
import { RetroItemCreateWithoutRetrospectiveInputObjectSchema } from './RetroItemCreateWithoutRetrospectiveInput.schema'
import { RetroItemScalarWhereInputObjectSchema } from './RetroItemScalarWhereInput.schema'
import { RetroItemUncheckedCreateWithoutRetrospectiveInputObjectSchema } from './RetroItemUncheckedCreateWithoutRetrospectiveInput.schema'
import { RetroItemUpdateManyWithWhereWithoutRetrospectiveInputObjectSchema } from './RetroItemUpdateManyWithWhereWithoutRetrospectiveInput.schema'
import { RetroItemUpdateWithWhereUniqueWithoutRetrospectiveInputObjectSchema } from './RetroItemUpdateWithWhereUniqueWithoutRetrospectiveInput.schema'
import { RetroItemUpsertWithWhereUniqueWithoutRetrospectiveInputObjectSchema } from './RetroItemUpsertWithWhereUniqueWithoutRetrospectiveInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUpdateManyWithoutRetrospectiveNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => RetroItemUpsertWithWhereUniqueWithoutRetrospectiveInputObjectSchema),
        z.lazy(() => RetroItemUpsertWithWhereUniqueWithoutRetrospectiveInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => RetroItemCreateManyRetrospectiveInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => RetroItemUpdateWithWhereUniqueWithoutRetrospectiveInputObjectSchema),
        z.lazy(() => RetroItemUpdateWithWhereUniqueWithoutRetrospectiveInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RetroItemUpdateManyWithWhereWithoutRetrospectiveInputObjectSchema),
        z.lazy(() => RetroItemUpdateManyWithWhereWithoutRetrospectiveInputObjectSchema).array(),
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

export const RetroItemUpdateManyWithoutRetrospectiveNestedInputObjectSchema = Schema
