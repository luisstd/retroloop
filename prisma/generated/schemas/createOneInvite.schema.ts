import { z } from 'zod'

import { InviteCreateInputObjectSchema } from './objects/InviteCreateInput.schema'
import { InviteUncheckedCreateInputObjectSchema } from './objects/InviteUncheckedCreateInput.schema'

export const InviteCreateOneSchema = z.object({
  data: z.union([InviteCreateInputObjectSchema, InviteUncheckedCreateInputObjectSchema]),
})
