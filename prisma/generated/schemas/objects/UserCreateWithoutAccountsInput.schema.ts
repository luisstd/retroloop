import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteCreateNestedManyWithoutInviteeInputObjectSchema } from './InviteCreateNestedManyWithoutInviteeInput.schema'
import { RetroItemCreateNestedManyWithoutAuthorInputObjectSchema } from './RetroItemCreateNestedManyWithoutAuthorInput.schema'
import { RetrospectiveCreateNestedManyWithoutParticipantsInputObjectSchema } from './RetrospectiveCreateNestedManyWithoutParticipantsInput.schema'
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'
import { WorkspaceCreateNestedManyWithoutOwnerInputObjectSchema } from './WorkspaceCreateNestedManyWithoutOwnerInput.schema'

const Schema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z
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
    workspace: z.lazy(() => WorkspaceCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
    image: z.string().optional().nullable(),
    sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutAccountsInputObjectSchema = Schema
