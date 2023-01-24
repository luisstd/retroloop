import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema'
import { InviteUncheckedCreateNestedManyWithoutInviteeInputObjectSchema } from './InviteUncheckedCreateNestedManyWithoutInviteeInput.schema'
import { RetroItemUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './RetroItemUncheckedCreateNestedManyWithoutAuthorInput.schema'
import { RetrospectiveUncheckedCreateNestedManyWithoutParticipantsInputObjectSchema } from './RetrospectiveUncheckedCreateNestedManyWithoutParticipantsInput.schema'
import { WorkspaceUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedCreateNestedManyWithoutOwnerInput.schema'

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    email: z.string(),
    emailVerified: z.date().optional().nullable(),
    name: z.string(),
    role: z.string().optional().nullable(),
    retrospectives: z
      .lazy(() => RetrospectiveUncheckedCreateNestedManyWithoutParticipantsInputObjectSchema)
      .optional(),
    invite: z.lazy(() => InviteUncheckedCreateNestedManyWithoutInviteeInputObjectSchema).optional(),
    retroItem: z
      .lazy(() => RetroItemUncheckedCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
    workspace: z
      .lazy(() => WorkspaceUncheckedCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    image: z.string().optional().nullable(),
    accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutSessionsInputObjectSchema = Schema
