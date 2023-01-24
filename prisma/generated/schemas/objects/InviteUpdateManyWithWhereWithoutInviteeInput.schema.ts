import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteScalarWhereInputObjectSchema } from './InviteScalarWhereInput.schema'
import { InviteUncheckedUpdateManyWithoutInviteInputObjectSchema } from './InviteUncheckedUpdateManyWithoutInviteInput.schema'
import { InviteUpdateManyMutationInputObjectSchema } from './InviteUpdateManyMutationInput.schema'

const Schema: z.ZodType<Prisma.InviteUpdateManyWithWhereWithoutInviteeInput> = z
  .object({
    where: z.lazy(() => InviteScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => InviteUpdateManyMutationInputObjectSchema),
      z.lazy(() => InviteUncheckedUpdateManyWithoutInviteInputObjectSchema),
    ]),
  })
  .strict()

export const InviteUpdateManyWithWhereWithoutInviteeInputObjectSchema = Schema
