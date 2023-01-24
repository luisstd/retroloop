import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema'
import { RetroItemUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './RetroItemUncheckedCreateNestedManyWithoutAuthorInput.schema'
import { RetrospectiveUncheckedCreateNestedManyWithoutParticipantsInputObjectSchema } from './RetrospectiveUncheckedCreateNestedManyWithoutParticipantsInput.schema'
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'
import { WorkspaceUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedCreateNestedManyWithoutOwnerInput.schema'

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutInviteInput> = z
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

export const UserUncheckedCreateWithoutInviteInputObjectSchema = Schema
