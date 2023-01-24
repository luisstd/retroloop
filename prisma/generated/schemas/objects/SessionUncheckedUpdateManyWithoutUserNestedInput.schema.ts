import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SessionCreateManyUserInputEnvelopeObjectSchema } from './SessionCreateManyUserInputEnvelope.schema'
import { SessionCreateOrConnectWithoutUserInputObjectSchema } from './SessionCreateOrConnectWithoutUserInput.schema'
import { SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema'
import { SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema'
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema'
import { SessionUpdateManyWithWhereWithoutUserInputObjectSchema } from './SessionUpdateManyWithWhereWithoutUserInput.schema'
import { SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './SessionUpdateWithWhereUniqueWithoutUserInput.schema'
import { SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './SessionUpsertWithWhereUniqueWithoutUserInput.schema'
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutUserInputObjectSchema),
        z.lazy(() => SessionCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputObjectSchema),
        z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => SessionScalarWhereInputObjectSchema),
        z.lazy(() => SessionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema
