import { z } from 'zod'

import { InviteUpdateManyMutationInputObjectSchema } from './objects/InviteUpdateManyMutationInput.schema'
import { InviteWhereInputObjectSchema } from './objects/InviteWhereInput.schema'

export const InviteUpdateManySchema = z.object({
  data: InviteUpdateManyMutationInputObjectSchema,
  where: InviteWhereInputObjectSchema.optional(),
})
