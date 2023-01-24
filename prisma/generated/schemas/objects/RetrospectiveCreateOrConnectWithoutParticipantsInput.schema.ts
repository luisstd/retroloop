import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateWithoutParticipantsInputObjectSchema } from './RetrospectiveCreateWithoutParticipantsInput.schema'
import { RetrospectiveUncheckedCreateWithoutParticipantsInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutParticipantsInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveCreateOrConnectWithoutParticipantsInput> = z
  .object({
    where: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RetrospectiveCreateWithoutParticipantsInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedCreateWithoutParticipantsInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveCreateOrConnectWithoutParticipantsInputObjectSchema = Schema
