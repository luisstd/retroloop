import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteUncheckedUpdateWithoutInviteeInputObjectSchema } from './InviteUncheckedUpdateWithoutInviteeInput.schema'
import { InviteUpdateWithoutInviteeInputObjectSchema } from './InviteUpdateWithoutInviteeInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.InviteUpdateWithWhereUniqueWithoutInviteeInput> = z
  .object({
    where: z.lazy(() => InviteWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => InviteUpdateWithoutInviteeInputObjectSchema),
      z.lazy(() => InviteUncheckedUpdateWithoutInviteeInputObjectSchema),
    ]),
  })
  .strict()

export const InviteUpdateWithWhereUniqueWithoutInviteeInputObjectSchema = Schema
