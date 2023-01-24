import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema'
import { InviteUncheckedCreateNestedManyWithoutInviteeInputObjectSchema } from './InviteUncheckedCreateNestedManyWithoutInviteeInput.schema'
import { RetroItemUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './RetroItemUncheckedCreateNestedManyWithoutAuthorInput.schema'
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'
import { WorkspaceUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedCreateNestedManyWithoutOwnerInput.schema'

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutRetrospectivesInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    email: z.string(),
    emailVerified: z.date().optional().nullable(),
    name: z.string(),
    role: z.string().optional().nullable(),
    invite: z.lazy(() => InviteUncheckedCreateNestedManyWithoutInviteeInputObjectSchema).optional(),
    retroItem: z
      .lazy(() => RetroItemUncheckedCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
    workspace: z
      .lazy(() => WorkspaceUncheckedCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    image: z.string().optional().nullable(),
    accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutRetrospectivesInputObjectSchema = Schema
