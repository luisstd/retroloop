import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SessionCreateManyUserInputObjectSchema } from './SessionCreateManyUserInput.schema'

const Schema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => SessionCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const SessionCreateManyUserInputEnvelopeObjectSchema = Schema
