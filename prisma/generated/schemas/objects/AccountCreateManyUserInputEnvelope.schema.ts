import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountCreateManyUserInputObjectSchema } from './AccountCreateManyUserInput.schema'

const Schema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => AccountCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const AccountCreateManyUserInputEnvelopeObjectSchema = Schema
