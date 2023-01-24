import { z } from 'zod'

import { InviteCreateInputObjectSchema } from './objects/InviteCreateInput.schema'
import { InviteUncheckedCreateInputObjectSchema } from './objects/InviteUncheckedCreateInput.schema'
import { InviteUncheckedUpdateInputObjectSchema } from './objects/InviteUncheckedUpdateInput.schema'
import { InviteUpdateInputObjectSchema } from './objects/InviteUpdateInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema'

export const InviteUpsertSchema = z.object({
  where: InviteWhereUniqueInputObjectSchema,
  create: z.union([InviteCreateInputObjectSchema, InviteUncheckedCreateInputObjectSchema]),
  update: z.union([InviteUpdateInputObjectSchema, InviteUncheckedUpdateInputObjectSchema]),
})
