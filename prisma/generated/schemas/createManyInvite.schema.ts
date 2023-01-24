import { z } from 'zod'

import { InviteCreateManyInputObjectSchema } from './objects/InviteCreateManyInput.schema'

export const InviteCreateManySchema = z.object({
  data: z.union([InviteCreateManyInputObjectSchema, z.array(InviteCreateManyInputObjectSchema)]),
})
