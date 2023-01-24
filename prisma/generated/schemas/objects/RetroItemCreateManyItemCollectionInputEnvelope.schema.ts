import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateManyItemCollectionInputObjectSchema } from './RetroItemCreateManyItemCollectionInput.schema'

const Schema: z.ZodType<Prisma.RetroItemCreateManyItemCollectionInputEnvelope> = z
  .object({
    data: z.lazy(() => RetroItemCreateManyItemCollectionInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const RetroItemCreateManyItemCollectionInputEnvelopeObjectSchema = Schema
