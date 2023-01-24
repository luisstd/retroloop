import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteCreateManyInviteeInputObjectSchema } from './InviteCreateManyInviteeInput.schema'

const Schema: z.ZodType<Prisma.InviteCreateManyInviteeInputEnvelope> = z
  .object({
    data: z.lazy(() => InviteCreateManyInviteeInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const InviteCreateManyInviteeInputEnvelopeObjectSchema = Schema
