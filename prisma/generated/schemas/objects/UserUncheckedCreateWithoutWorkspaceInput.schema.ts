import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema'
import { InviteUncheckedCreateNestedManyWithoutInviteeInputObjectSchema } from './InviteUncheckedCreateNestedManyWithoutInviteeInput.schema'
import { RetroItemUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './RetroItemUncheckedCreateNestedManyWithoutAuthorInput.schema'
import { RetrospectiveUncheckedCreateNestedManyWithoutParticipantsInputObjectSchema } from './RetrospectiveUncheckedCreateNestedManyWithoutParticipantsInput.schema'
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutWorkspaceInput> = z
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
    image: z.string().optional().nullable(),
    accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutWorkspaceInputObjectSchema = Schema
