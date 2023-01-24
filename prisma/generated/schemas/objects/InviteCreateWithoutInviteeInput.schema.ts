import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateNestedOneWithoutInviteInputObjectSchema } from './RetrospectiveCreateNestedOneWithoutInviteInput.schema'

const Schema: z.ZodType<Prisma.InviteCreateWithoutInviteeInput> = z
  .object({
    createdAt: z.date().optional(),
    userId: z.number(),
    retro: z.lazy(() => RetrospectiveCreateNestedOneWithoutInviteInputObjectSchema),
  })
  .strict()

export const InviteCreateWithoutInviteeInputObjectSchema = Schema
