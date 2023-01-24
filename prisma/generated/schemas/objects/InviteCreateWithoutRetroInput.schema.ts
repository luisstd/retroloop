import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateNestedOneWithoutInviteInputObjectSchema } from './UserCreateNestedOneWithoutInviteInput.schema'

const Schema: z.ZodType<Prisma.InviteCreateWithoutRetroInput> = z
  .object({
    createdAt: z.date().optional(),
    userId: z.number(),
    invitee: z.lazy(() => UserCreateNestedOneWithoutInviteInputObjectSchema).optional(),
  })
  .strict()

export const InviteCreateWithoutRetroInputObjectSchema = Schema
