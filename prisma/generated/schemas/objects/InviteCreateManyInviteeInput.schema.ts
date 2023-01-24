import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.InviteCreateManyInviteeInput> = z
  .object({
    createdAt: z.date().optional(),
    userId: z.number(),
    retrospectiveId: z.string(),
  })
  .strict()

export const InviteCreateManyInviteeInputObjectSchema = Schema
