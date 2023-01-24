import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteCreateWithoutInviteeInputObjectSchema } from './InviteCreateWithoutInviteeInput.schema'
import { InviteUncheckedCreateWithoutInviteeInputObjectSchema } from './InviteUncheckedCreateWithoutInviteeInput.schema'
import { InviteUncheckedUpdateWithoutInviteeInputObjectSchema } from './InviteUncheckedUpdateWithoutInviteeInput.schema'
import { InviteUpdateWithoutInviteeInputObjectSchema } from './InviteUpdateWithoutInviteeInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.InviteUpsertWithWhereUniqueWithoutInviteeInput> = z
  .object({
    where: z.lazy(() => InviteWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => InviteUpdateWithoutInviteeInputObjectSchema),
      z.lazy(() => InviteUncheckedUpdateWithoutInviteeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InviteCreateWithoutInviteeInputObjectSchema),
      z.lazy(() => InviteUncheckedCreateWithoutInviteeInputObjectSchema),
    ]),
  })
  .strict()

export const InviteUpsertWithWhereUniqueWithoutInviteeInputObjectSchema = Schema
