import { z } from 'zod'

import { InviteWhereInputObjectSchema } from './objects/InviteWhereInput.schema'

export const InviteDeleteManySchema = z.object({ where: InviteWhereInputObjectSchema.optional() })
