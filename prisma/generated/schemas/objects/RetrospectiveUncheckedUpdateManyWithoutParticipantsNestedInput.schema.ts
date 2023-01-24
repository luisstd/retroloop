import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateOrConnectWithoutParticipantsInputObjectSchema } from './RetrospectiveCreateOrConnectWithoutParticipantsInput.schema'
import { RetrospectiveCreateWithoutParticipantsInputObjectSchema } from './RetrospectiveCreateWithoutParticipantsInput.schema'
import { RetrospectiveScalarWhereInputObjectSchema } from './RetrospectiveScalarWhereInput.schema'
import { RetrospectiveUncheckedCreateWithoutParticipantsInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutParticipantsInput.schema'
import { RetrospectiveUpdateManyWithWhereWithoutParticipantsInputObjectSchema } from './RetrospectiveUpdateManyWithWhereWithoutParticipantsInput.schema'
import { RetrospectiveUpdateWithWhereUniqueWithoutParticipantsInputObjectSchema } from './RetrospectiveUpdateWithWhereUniqueWithoutParticipantsInput.schema'
import { RetrospectiveUpsertWithWhereUniqueWithoutParticipantsInputObjectSchema } from './RetrospectiveUpsertWithWhereUniqueWithoutParticipantsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUncheckedUpdateManyWithoutParticipantsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RetrospectiveCreateWithoutParticipantsInputObjectSchema),
        z.lazy(() => RetrospectiveCreateWithoutParticipantsInputObjectSchema).array(),
        z.lazy(() => RetrospectiveUncheckedCreateWithoutParticipantsInputObjectSchema),
        z.lazy(() => RetrospectiveUncheckedCreateWithoutParticipantsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RetrospectiveCreateOrConnectWithoutParticipantsInputObjectSchema),
        z.lazy(() => RetrospectiveCreateOrConnectWithoutParticipantsInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => RetrospectiveUpsertWithWhereUniqueWithoutParticipantsInputObjectSchema),
        z
          .lazy(() => RetrospectiveUpsertWithWhereUniqueWithoutParticipantsInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RetrospectiveUpdateWithWhereUniqueWithoutParticipantsInputObjectSchema),
        z
          .lazy(() => RetrospectiveUpdateWithWhereUniqueWithoutParticipantsInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RetrospectiveUpdateManyWithWhereWithoutParticipantsInputObjectSchema),
        z.lazy(() => RetrospectiveUpdateManyWithWhereWithoutParticipantsInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RetrospectiveScalarWhereInputObjectSchema),
        z.lazy(() => RetrospectiveScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const RetrospectiveUncheckedUpdateManyWithoutParticipantsNestedInputObjectSchema = Schema
