import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteCreateManyRetroInputObjectSchema } from './InviteCreateManyRetroInput.schema'

const Schema: z.ZodType<Prisma.InviteCreateManyRetroInputEnvelope> = z
  .object({
    data: z.lazy(() => InviteCreateManyRetroInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const InviteCreateManyRetroInputEnvelopeObjectSchema = Schema
