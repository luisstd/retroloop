import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateWithoutParticipantsInputObjectSchema } from './RetrospectiveCreateWithoutParticipantsInput.schema'
import { RetrospectiveUncheckedCreateWithoutParticipantsInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutParticipantsInput.schema'
import { RetrospectiveUncheckedUpdateWithoutParticipantsInputObjectSchema } from './RetrospectiveUncheckedUpdateWithoutParticipantsInput.schema'
import { RetrospectiveUpdateWithoutParticipantsInputObjectSchema } from './RetrospectiveUpdateWithoutParticipantsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpsertWithWhereUniqueWithoutParticipantsInput> = z
  .object({
    where: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RetrospectiveUpdateWithoutParticipantsInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedUpdateWithoutParticipantsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RetrospectiveCreateWithoutParticipantsInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedCreateWithoutParticipantsInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveUpsertWithWhereUniqueWithoutParticipantsInputObjectSchema = Schema
