import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateManyAuthorInputObjectSchema } from './RetroItemCreateManyAuthorInput.schema'

const Schema: z.ZodType<Prisma.RetroItemCreateManyAuthorInputEnvelope> = z
  .object({
    data: z.lazy(() => RetroItemCreateManyAuthorInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const RetroItemCreateManyAuthorInputEnvelopeObjectSchema = Schema
