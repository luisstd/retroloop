import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema'
import { InviteCreateNestedManyWithoutInviteeInputObjectSchema } from './InviteCreateNestedManyWithoutInviteeInput.schema'
import { RetroItemCreateNestedManyWithoutAuthorInputObjectSchema } from './RetroItemCreateNestedManyWithoutAuthorInput.schema'
import { RetrospectiveCreateNestedManyWithoutParticipantsInputObjectSchema } from './RetrospectiveCreateNestedManyWithoutParticipantsInput.schema'
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'

const Schema: z.ZodType<Prisma.UserCreateWithoutWorkspaceInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    email: z.string(),
    emailVerified: z.date().optional().nullable(),
    name: z.string(),
    role: z.string().optional().nullable(),
    retrospectives: z
      .lazy(() => RetrospectiveCreateNestedManyWithoutParticipantsInputObjectSchema)
      .optional(),
    invite: z.lazy(() => InviteCreateNestedManyWithoutInviteeInputObjectSchema).optional(),
    retroItem: z.lazy(() => RetroItemCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
    image: z.string().optional().nullable(),
    accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutWorkspaceInputObjectSchema = Schema
