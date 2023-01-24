import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateOrConnectWithoutParticipantsInputObjectSchema } from './RetrospectiveCreateOrConnectWithoutParticipantsInput.schema'
import { RetrospectiveCreateWithoutParticipantsInputObjectSchema } from './RetrospectiveCreateWithoutParticipantsInput.schema'
import { RetrospectiveUncheckedCreateWithoutParticipantsInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutParticipantsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUncheckedCreateNestedManyWithoutParticipantsInput> = z
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
    connect: z
      .union([
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const RetrospectiveUncheckedCreateNestedManyWithoutParticipantsInputObjectSchema = Schema
