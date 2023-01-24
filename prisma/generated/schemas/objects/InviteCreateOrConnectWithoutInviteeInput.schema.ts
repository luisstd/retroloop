import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteCreateWithoutInviteeInputObjectSchema } from './InviteCreateWithoutInviteeInput.schema'
import { InviteUncheckedCreateWithoutInviteeInputObjectSchema } from './InviteUncheckedCreateWithoutInviteeInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.InviteCreateOrConnectWithoutInviteeInput> = z
  .object({
    where: z.lazy(() => InviteWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InviteCreateWithoutInviteeInputObjectSchema),
      z.lazy(() => InviteUncheckedCreateWithoutInviteeInputObjectSchema),
    ]),
  })
  .strict()

export const InviteCreateOrConnectWithoutInviteeInputObjectSchema = Schema
