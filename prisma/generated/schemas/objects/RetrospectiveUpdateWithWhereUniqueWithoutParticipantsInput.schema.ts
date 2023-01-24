import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveUncheckedUpdateWithoutParticipantsInputObjectSchema } from './RetrospectiveUncheckedUpdateWithoutParticipantsInput.schema'
import { RetrospectiveUpdateWithoutParticipantsInputObjectSchema } from './RetrospectiveUpdateWithoutParticipantsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpdateWithWhereUniqueWithoutParticipantsInput> = z
  .object({
    where: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RetrospectiveUpdateWithoutParticipantsInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedUpdateWithoutParticipantsInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveUpdateWithWhereUniqueWithoutParticipantsInputObjectSchema = Schema
