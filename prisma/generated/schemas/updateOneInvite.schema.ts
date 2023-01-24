import { z } from 'zod'

import { InviteUncheckedUpdateInputObjectSchema } from './objects/InviteUncheckedUpdateInput.schema'
import { InviteUpdateInputObjectSchema } from './objects/InviteUpdateInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema'

export const InviteUpdateOneSchema = z.object({
  data: z.union([InviteUpdateInputObjectSchema, InviteUncheckedUpdateInputObjectSchema]),
  where: InviteWhereUniqueInputObjectSchema,
})
