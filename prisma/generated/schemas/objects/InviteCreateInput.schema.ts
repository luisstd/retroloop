import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateNestedOneWithoutInviteInputObjectSchema } from './RetrospectiveCreateNestedOneWithoutInviteInput.schema'
import { UserCreateNestedOneWithoutInviteInputObjectSchema } from './UserCreateNestedOneWithoutInviteInput.schema'

const Schema: z.ZodType<Prisma.InviteCreateInput> = z
  .object({
    createdAt: z.date().optional(),
    userId: z.number(),
    retro: z.lazy(() => RetrospectiveCreateNestedOneWithoutInviteInputObjectSchema),
    invitee: z.lazy(() => UserCreateNestedOneWithoutInviteInputObjectSchema).optional(),
  })
  .strict()

export const InviteCreateInputObjectSchema = Schema
