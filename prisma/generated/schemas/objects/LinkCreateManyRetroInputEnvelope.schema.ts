import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateManyRetroInputObjectSchema } from './LinkCreateManyRetroInput.schema'

const Schema: z.ZodType<Prisma.LinkCreateManyRetroInputEnvelope> = z
  .object({
    data: z.lazy(() => LinkCreateManyRetroInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const LinkCreateManyRetroInputEnvelopeObjectSchema = Schema
