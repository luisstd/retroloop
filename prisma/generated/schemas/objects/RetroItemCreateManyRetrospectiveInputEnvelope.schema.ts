import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateManyRetrospectiveInputObjectSchema } from './RetroItemCreateManyRetrospectiveInput.schema'

const Schema: z.ZodType<Prisma.RetroItemCreateManyRetrospectiveInputEnvelope> = z
  .object({
    data: z.lazy(() => RetroItemCreateManyRetrospectiveInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const RetroItemCreateManyRetrospectiveInputEnvelopeObjectSchema = Schema
